/// <refernce types="cypress" />
// const neatCSV = require('neat-csv')
 import neatCSV from 'neat-csv';
import homePage from "../PageObecjts/homePage";
const home = new homePage();

describe('Test Cases for Adding a Refund Request', function () {



    it('Click on Add Request button', function () {

        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        home.addRequest();



    })



    it('Verify the URL of Refund Screen', function () {

        home.verifyRefundURL();


    })



    it('Select value from account drop down', function () {



        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.log(localStorage)
        home.schoolDropDown('t', ' test first test last ', '#mat-input-4', '#mat-option-13', '.mat-option-text')

    })



    it('Enter the Refund Amount', function () {

        home.enterRefundAmount('#mat-input-5');


    })

    it('Get the amount', function () {

        home.getAmount();


    })

   

    it('Click on Submit Button', function () {

        home.clickSubmit();


    })

    it('Verify the text of Toast Message', function () {

        home.verifyToastMessage();


    })

    it('Verify CSV', function () {

        home.exportCSV();


    })


    it('Click on Approve button', function () {

        //cy.pause()
        home.approveButton();
        


    })


   

    it('Click on Settings button', function () {

        cy.wait(10000)
        home.settingsButton();


    })

    

    it('Click on Add Request button again to make another refund', function () {

        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        home.addRequest();



    })

    it('Select value from account drop down for another refund', function () {



        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.log(localStorage)
        
        home.schoolDropDown('t', ' test first test last ', '#mat-input-8', '#mat-option-28', '.mat-option-text')

    })

    it('Enter the Refund Amount', function () {

        home.enterRefundAmount('#mat-input-9');


    })

    it('Click on Submit Button', function () {

        home.clickSubmit();


    })

    it('Click on Settings button', function () {

        home.settingsButton();


    })

    it('Click on Add Request button again to make another refund', function () {

        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        home.addRequest();



    })

    it('Select value from account drop down for another refund', function () {



        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        cy.log(localStorage)
        home.schoolDropDown('t', ' test first test last ', '#mat-input-12', '#mat-option-43', '.mat-option-text')

    })

    it('Enter the Refund Amount', function () {

        home.enterRefundAmount('#mat-input-13');


    })

    it('Click on Submit Button', function () {

        home.clickSubmit();


    })

    it('Click on Decline button', function () {

        cy.wait(5000)
        home.declineButton();


    })


    it('Enter Reason on the decline pop up', function () {

       home.enterReason();


    })


    it('Verify that Next School button is visible on the screen and it is clickable/non broken', function () {

        home.nextSchool();
 
 
     })

    

})











