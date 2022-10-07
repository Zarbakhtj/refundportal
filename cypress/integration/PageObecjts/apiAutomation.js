

class apiAutomation {


    getToken() {

        cy.request({
            method: 'POST',
            url: Cypress.env('apiURL')+"/auth/token",
            failOnStatusCode: false,
            body: {
                username: "refund1@test.com",
                password: "Test1234",

            }
        }).then(function (response) {


            expect(response.status).to.eq(200)
            cy.log(response)
            Cypress.env('refreshToken', response.body.refreshToken);
            Cypress.env('accessToken', response.body.accessToken);

            

        })


    }


    loginApi() {
       
        cy.request({
            method: 'GET',
            url: Cypress.env('apiURL')+"/reportingUser/refund1@test.com/centralreportinguser/loginData",
            failOnStatusCode: false,
            
            Authorization: {
                Bearer: Cypress.env('accessToken') }

        }).then(function(response)  {

             if (response.status == 403) {
                 expect(response.body.message).contains("There was a problem making the request")
    
            }
        
            else if (response.status == 200) {
                cy.log(response.body)
                expect(response.status).to.eq(200)
                cy.log(response.body.firstName)
                expect(response.body.firstName).to.be.a('null');
                expect(response.body.catererId).to.eq(1003)

        }
    

    })
}

    accountBalanceApi(){

        cy.request({
            method: 'GET',
            url: Cypress.env('apiURL')+"/sites/6/vms/organisations/1066/accountBalances/518",
            failOnStatusCode: false,
            
            Authorization: {
                Bearer: Cypress.env('accessToken') }

        }).then(function(response){

            cy.log(response.body)
              //  cy.log(response.body[0].siteCustomerList[0].name)
                expect(response.body[0].name).to.eq('Refund')
                expect(response.body[0].purseId).to.eq(499)
                expect(response.body[0].siteCustomerList[0].siteCustomerId).to.eq(528)
                expect(response.body[0].siteCustomerList[0].name).to.eq('Zarbakht jalil')
                


        })


    }


}

export default apiAutomation;