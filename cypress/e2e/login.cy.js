/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

describe('login',()=>{
    beforeEach(()=>{
       cy.visit('http://automationpractice.com/index.php');
        
    })
    it('login incorrecto',()=>{
        
        cy.fixture('index').then((index)=>{
            
            
            cy.login('gorila','1234');
            cy.get(index.errorMenssage).should('contain','Invalid email address.');
            
        })
        
        
        
     
    })
    
    
})
