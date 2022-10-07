
class Login {

    visit() {


        cy.visit(Cypress.env('url'))
    }

    verifySignInHeading() {

        cy.get('h1').contains('Sign in')

    }

    verifyURL(){


        cy.url().should('include', '/management-portal')
    }

    enterEmailAddress() {
        
        cy.get('#mat-input-0').type('refund1@test.com')

    }

    enterPassword() {
        
        cy.get('#mat-input-1').type('Test1234')

    }

    clickCTA(){


        cy.get('.mat-flat-button > .mat-button-wrapper').click();
    }
   

}

export default Login;
