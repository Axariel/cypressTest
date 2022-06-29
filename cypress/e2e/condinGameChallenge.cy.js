/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


describe('Opcion 1 automatizacion e2e',()=>{
    beforeEach(()=>{
         cy.visit('https://www.demoblaze.com/');
        
    })
    it('add two product to the car',()=>{
        
   
       cy.addCart();
      
     
       

      
      
        
    })
    it('completePurchase',()=>{
        
         cy.addCart();
         cy.completePurchase('Adrian Tillero','Dominican Republic','Santo Domingo','123456789a','gorila','cartoons');
        
    })
    
  
    

    
    
    
    
})