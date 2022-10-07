import neatCSV from 'neat-csv';

class homePage {

    schoolDropDown(dropDown_text, indexText, locator, getval_locator, select_locator) {

        cy.get(locator).type(dropDown_text)


        cy.get(getval_locator).find(select_locator).each(($el, index, $list) => {

            if ($el.text() == indexText) {

                cy.log('Im here')

                
                cy.wrap($el).click()
            }


        })

    }

    checkManualIntervention() {



        cy.get('.mat-checkbox-inner-container').click()
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            if ($el.text().includes(' Jul 18, 2022')) {

                cy.get('mat-icon[color="warn"]').eq(index).click();
                cy.get('.refund-description:visible').then(function (text1) {
                    let acutalText = text1.text();
                    expect(acutalText).to.eq(' Refund request to the payment provider failed. (£1.00)')
                    return false;


                })




            }


        })

    }

    uncheckManualIntervention() {

        cy.get('.mat-checkbox-inner-container').click()

    }

    addRequest() {


        cy.get('[aria-label="Add request"]').click({ force: true });
        //cy.get('[aria-label="Export report"]').click();

    }

    verifyRefundURL() {

        cy.url().should('include', '/refunds')
    }

    enterRefundAmount(enterCSS) {


        // cy.get('#mat-input-17').clear();
        // cy.get('#mat-input-17').type(4);
        cy.get(enterCSS).clear();
        cy.get(enterCSS).type('1');

    }



    clickSubmit() {

        cy.get('.btn_container > .mat-focus-indicator > .mat-button-wrapper').click({force: true});

    }

    verifyToastMessage() {

        cy.get('.toast-message').should('have.text', ' Successfully created new refund request. ')


    }

    exportCSV() {

        var customerName
        cy.get('tbody > :nth-child(1) > .cdk-column-site-customer').then(function (ele) {


            customerName = ele.text().trim();
            cy.log(customerName);

        })


        cy.get('[aria-label="Export report"] > .mat-button-wrapper').click();
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/FCA_Refunds_Report.csv")
            .then(async (text) => {

                const csv = await neatCSV(text)
                cy.log(csv)
                const actualCustomerNameCSV = csv[2][2]
                cy.log(actualCustomerNameCSV)
                expect(customerName).to.equal(actualCustomerNameCSV);


            })


    }

    approveButton() {


        cy.get('tr td:nth-child(3)').each(($el, index, $list) => {

            if ($el.text().includes('Zarbakht')) {

                cy.get('button[aria-label="Approve"]').eq(index).click();
                return false;

            }


        })

    }

    dialog() {


        cy.get('#mat-dialog-0').should('be.visible');
    }

    getAmount() {


        cy.get('.mat-footer-row > .cdk-column-amount').then(function (amount) {


            const refundableAmount = amount.text();
            var res = refundableAmount.split("£");
            res = res[1].trim();
            res = (res + '').replace('.', '');
            cy.log(res)
        })
    }

    verficationArray() {

        var arrayOfElementText = [];

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            $el.text().trim();


            arrayOfElementText.push($el.text().trim())

        })


        cy.log(arrayOfElementText)
        const desc = arrayOfElementText.sort().reverse();
        cy.log(desc)

    }



    toggleOnSettings() {



        cy.get('button[aria-label="Settings"]').click({ force: true });
        cy.get('input[role="switch"]').then(function (x) {
            if ((x.is(':checked'))) {
                cy.log('testing')
                cy.get('.mat-slide-toggle-bar').click();
                cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper').click();

            } else {
                cy.get('.mat-dialog-actions > :nth-child(1) > .mat-button-wrapper').click();
            }
        });
    }

    settingsButton() {

        cy.get('button[aria-label="Settings"] span[class="mat-button-wrapper"]').click({force:true});
        cy.get('.mat-slide-toggle-bar').click();
        cy.get('.mat-dialog-actions > .mat-primary').click();
    }

    declineButton() {


        cy.get('tr td:nth-child(3)').each(($el, index, $list) => {

            if ($el.text().includes('Zarbakht')) {

                cy.get('button[aria-label="Decline"]').eq(index).click();
                return false;

            }


        })

    }

    enterReason() {


        cy.get('#mat-input-15').type('This is tesitng')
        cy.get('button[class="mat-focus-indicator mat-flat-button positive mat-button-base"] span[class="mat-button-wrapper"]').click();
    }

    nextSchool(){

        cy.wait(3000)
        cy.get('body').then(function(body)  {
            if (body.find('[aria-label="Next school"] > .mat-button-wrapper').length > 0) {   
            //evaluates as true if button exists at all
                cy.get('[aria-label="Next school"] > .mat-button-wrapper').then(function(button)  {
                  if (button.is(':visible')){
                    //you get here only if button EXISTS and is VISIBLE
                    
                    cy.wrap(button).click({force:true})

                  } else {
                    //you get here only if button EXISTS but is INVISIBLE
                    
                  }
                });
             } else {
                //you get here if the button DOESN'T EXIST
                cy.log('Button is not visible on the screen')
                
             }
        });
          
    }



}

export default homePage;