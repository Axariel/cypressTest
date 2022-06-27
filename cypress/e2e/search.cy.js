/* 
 * =>
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
describe("Search Elements",()=>{
    beforeEach(()=>{
        
        cy.visit('http://automationpractice.com/index.php');
        
    })
    
    
    it('Search for elemente with mutiple result',()=>{
      
        cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
            
            cy.search('dress');
            cy.get(index.title).should('contain','dress');
                      
        })
     })
    it('Seach for elemente with no result',() =>{
       
        cy.fixture('index').then((index)=>{
         cy.search('Gorila');
          cy.get(index.alerta).should('contain','No results were found for your search');
            
        })
        
    })
    
    
})