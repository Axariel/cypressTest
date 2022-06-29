/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


describe('test - api',()=>{
    
    it('test get 200',()=>{
        
       /* cy.request('POST', 'api.demoblaze.com/signup', {
         type: 'POST',
        username : "axariel",
        password: "axarielee",
        contentType: "application/json"
         })
        
        */
          
         cy.request('GET','https://dummy.restapiexample.com/api/v1/employees').then((response)=>{
             
          expect(response).to.have.property('status',200); 
             
         })
 
    })
    
    it('test post 200',()=>{
        
        const item = {"name":"test","salary":"123","age":"23"};
        cy.request('POST','https://dummy.restapiexample.com/api/v1/create',item);
        
        
    })
    
      it('validando el blaze caso usuario ya existente',()=>{
        
        const item = {"username":"axariel","password":"axarielee222222"};
        cy.request('POST','api.demoblaze.com/signup',item).its('body').should('contains',{errorMessage: "This user already exist."});
        
       

        
        
    })
    
      it('validando el blaze caso usuario nuevo',()=>{
        
        const item = {"username":"axariel323","password":"axariele"};
        cy.request('POST','api.demoblaze.com/signup',item).then((response)=>{
             
          expect(response).to.have.property('status',200); 
          expect(response).to.have.property('body' ,'');
                  })
       
        
    })
    
       it('validando el blaze caso login usuario correcto',()=>{
        
        const item = {"username":"axariel33","password":"axariele"};
        cy.request('POST','api.demoblaze.com/login',item).then((response)=>{
             
          expect(response).to.have.property('status',200); 
        
         
                  })
       
        
    })
    
    it('validando el blaze caso login usuario incorrecto',()=>{
        
        const item = {"username":"axariel33","password":"axarieles"};
        cy.request('POST','api.demoblaze.com/login',item).its('body').should('contains',{errorMessage: "Wrong password."});      
                
       
             
          //expect(response).to.have.property('status',200); 
        
         
              
       
        
    })
    
    
})