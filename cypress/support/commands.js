// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//import 'cypress-fill-command'
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




import "cypress-localstorage-commands"
import './commands'

// Cypress.Cookies.preserveOnce('accessToken', 'refreshToken');


  //  Preserve cookie in every test
    // Cypress.Cookies.defaults({
    //     preserve: (cookie) => {
            
    //         return true;
    //     }
    // })



Cypress.Commands.add('generateCookie',(value)=>{

    cy.request("POST", "http://localhost:8080/GatewayWebapp/data/auth/token",
    {
        "username": "refund1@test.com",
        "password": "Test1234",
      }).then(function(response){
    
    
        expect(response.status).to.eq(200)
        Cypress.env('refreshToken',response.body.refreshToken) ;
        Cypress.env('accessToken',response.body.accessToken) ;
        
        // window.localStorage.setItem('jwt', response.body.accessToken)
    
    })
    
    })


//     Cypress.Commands.add('refresh',(value)=>{

//         cy.request("POST", "http://localhost:8080/GatewayWebapp/data/anon/auth/refresh",
//         {
//             "expiredAccessToken": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJUdWNhc2kiLCJqdGkiOiI3MTFiMmNmOC00YTI2LTQyYjEtOGZkNy1hMGY3ZjAxMDE2YWEiLCJzdWIiOiJyZWZ1bmQxQHRlc3QuY29tIiwibmFtZSI6IiIsInNjb3BlcyI6W10sInVzZXJJZCI6NCwicG9saWNpZXMiOiJudWxsIiwiaWF0IjoxNjU2NjgzMDQ2LCJleHAiOjE2NTY2ODM5NDYsImNhdGVyZXJVc2VyVHlwZSI6MSwidm1zT3JnYW5pc2F0aW9uSWQiOjEwNjZ9.SLRUHsR8Mv4FuPbHAi5R3tF3ctLVrRKLr82xKGNmTl4oO_rOmCPoHVr2MGDnLaYOP5vCJHOhTXhUJlayhBr8iu9M8OmcCtINFzyfi-h7M4gBrG134FXcUXxzgJXVYiOIrSvoel6RwnatPlGf7PRfuBO3A7dCv3JIiPlvrYI_I82cijB1s7TAbzbYjzNWYUcLomisjBZxRuORMIQoOu8BoA8erBjJvhdUvv-Xqrkuyo8pUPnCsMvXHCOjhNt_R283OvCEFugcWEZ8zslCJi_AfNlZu0zmMq2kDeP3wqrlfizUEV0MMK7LaVvFh2BE0wXMYMpcN32EC_o95ySdVLw6EA" 
//           }).then(function(response){
        
        
//             expect(response.status).to.eq(200)
//           //  Cypress.env('accessToken',response.body.accessToken) ;
//             Cypress.env('refreshToken',response.body.refreshToken) ;
//             Cypress.env('accessToken',response.body.accessToken) ;
//         })
        
//         })


        Cypress.Commands.add('balance',(value)=>{
            // cy.log(Cypress.env('accessToken'))
            // cy.log(Cypress.env('refreshToken'))
            cy.request({
                method:"GET", 
                url: "http://localhost:8080/GatewayWebapp/data/sites/6/vms/organisations/1066/accountBalances/518",
                headers : {Authorization: Cypress.env('')}
            
                
            }).then(function(response){
            
            
                expect(response.status).to.eq(200)
                Cypress.env('purseId',response.body.purseId);
            })
            
            })



            
// Cypress.Commands.add('restoreLS', () => {
//     cy.log('Restore Local Storage');
//     cy.restoreLocalStorage();
//   });
  
