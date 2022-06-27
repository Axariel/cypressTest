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
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('search',(value)=>{
    
      cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
            cy.get(index.searchBox).type(value);
            cy.get(index.searchBoton).click();
           
                      
        })
        
        
        
    
})

Cypress.Commands.add('login',(email, password)=>{
    
  cy.fixture('index').then((index)=>{
            
            cy.get(index.login).click();
            cy.get(index.email).type(email);
            cy.get(index.password).type(password);
            cy.get(index.botonSingIn).click();
           
            
        })
        
        
        
    
})