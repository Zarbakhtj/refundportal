/// <refernce types="cypress" />
import homePage from "../PageObecjts/homePage";
const home = new homePage();


describe('Test Cases after the user is Logged-In', function () {
    beforeEach(() => {
        // Preserve cookie in every test
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
                return true;
            }
        })
    });


    it('Check the toggle on Settings pop up if its toggled on, change its state to off', function () {

        home.toggleOnSettings();



    })

    it('Select value from School Drop Down', function () {

        home.schoolDropDown('F', ' FCA ', '#mat-input-2', '#mat-autocomplete-0', '.mat-option-text');



    })





        it('Check the Manual Intervention Checkbox', function () {


            
            home.checkManualIntervention();


        })

        it('Array Verification', function () {

            home.verficationArray();
    
    
        })

        it('Uncheck the Manual Intervention Checkbox', function () {
            
            home.uncheckManualIntervention();


        })



    })



