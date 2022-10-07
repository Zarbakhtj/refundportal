/// <refernce types="cypress" />

import apiAutomation from "../PageObecjts/apiAutomation";
const api = new apiAutomation();

describe('Api Automation test cases', function () {


    it('Get Token Api', function () {

        api.getToken();


    })


    it('Login Api', function () {
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        //  cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        // cy.setLocalStorage('jwt', Cypress.env('accessToken'))

        api.loginApi();


    })

    it('Account balance Api', function () {
        cy.setCookie('accessToken', Cypress.env('accessToken'))
        //  cy.setCookie('refreshToken', Cypress.env('refreshToken'))
        // cy.setLocalStorage('jwt', Cypress.env('accessToken'))

       api.accountBalanceApi();


    })



})