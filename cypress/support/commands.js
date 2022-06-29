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

Cypress.Commands.add('addCart',()=>{
    
           cy.fixture('index').then((index)=>{
            cy.get(index.phoneGalaxy).click();
            cy.get(index.addCart).click();
            cy.wait(1000);
            cy.get(index.addCart).click();
            
            cy.get(index.visualiceCart).click();
            cy.get(index.position1Cart).should('contain','galaxy');
            cy.get(index.position2Cart).should('contain','galaxy');
            
            
        })
        
  
})


Cypress.Commands.add('completePurchase',(name,country,city,card,month,year)=>{
    
          cy.fixture('index').then((index)=>{
         
         cy.get(index.placeOrder).click();
         cy.get(index.orderName).type(name);
         cy.get(index.orderCountry).type(country);
         cy.get(index.orderCity).type(city);
         cy.get(index.orderCreditCard).type(card);
         cy.get(index.orderMonth).type(month);
         cy.get(index.orderYear).type(year);
         cy.get(index.purchaseButton).click();
        
         cy.wait(1000);
         cy.get(index.confirmPurchase).click();
         
         
     })
        
  
})