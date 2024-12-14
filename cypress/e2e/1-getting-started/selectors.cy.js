/// <reference types="Cypress"/>
describe('Cypress Selectors Suite',()=>{

    it('Cypress Selector Test',()=>{

      //  cy.visit('https://www.youtube.com/cypress.io');

      cy.visit('https://www.saucedemo.com/');
    
        //search text are and assert and log value of text field
        cy.get('[data-test="username"]').then((element)=>{
            cy.log("read textfield: "+element.text())
        })

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="inventory-sidebar-link"]').click();

       
        //first element
       cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').first().click();

       //last element
       cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').last().click();

       //index element
       //cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').eq(1).click();

        //starts-with
       // cy.get('button[type^="sub"]').click();

       //ends-with
      // cy.get('button[type$="mit"]').click()

       //contains - CSS
       //cy.get('button[type*="ubmi"]').click()

       //class
      //cy.get('[class="LC20lb MBeuO DKV0Md"]').eq(1).click();

        //contains - Cypress
       //cy.contains('JavaScript by Testers Talk').click();
       
      //  cy.get('tp-yt-paper-tab > div').eq(2).click();

    })

})