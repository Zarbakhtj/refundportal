//var Login = require('../e2e/Pages/loginPage.js').Login;
//var login = require('../PageObjects/login.js').Login;

/// <refernce types="cypress" />

import Login from '../PageObecjts/login.js'
const abc = new Login()




describe('Test Cases for Login Page', () => {


    beforeEach(() => {



        cy.generateCookie().then(function () {

            cy.log('this is testing',

                {

                    onBeforeLoad: function (window) {

                        window.cookies.setItem('refreshToken', Cypress.env('refreshToken'))
                        window.cookies.setItem('accessToken', Cypress.env('accessToken'))
                        cy.log('cookies are set??')
                        // window.localStorage.setItem('jwt', Cypress.env('accessToken'))
                        cy.saveLocalStorage();

                    }



                })

        })




    });

    it('Vist the URL', function () {

        cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        cy.setLocalStorage('jwt', Cypress.env('accessToken'))
        


        abc.visit();




    })


    it('Verify the Heading of Login Page', function () {

        abc.verifySignInHeading();



    })

    it('Verify the URL of Login Page', function () {

        abc.verifyURL();



    })

    it('Enter the email address', function () {

        abc.enterEmailAddress();

    })

    it('Enter the Password', function () {

        abc.enterPassword();

    })

    it('Click on Login Button', function () {

        abc.clickCTA();


    })


})


