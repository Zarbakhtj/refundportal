/// <refernce types="cypress" />
import postgreSQL from 'cypress-postgresql';
postgreSQL.loadDBCommands();

describe('Verify DB Connection', () => {


    it('Verify connection with database', () =>{

        cy.postgreSQL("select transaction_id, total from nwfp1234567.transaction order by transaction_id desc limit 10").then(function(result){


            cy.log(result.total);
            let a = result.total;
            expect(a).to.be.equal(-100);
        })

    })




})