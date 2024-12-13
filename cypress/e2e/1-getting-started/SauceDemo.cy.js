/// <referenced types="cypress"/>

describe('LAUNCHING APPLICATION', () => {
    it('LAUNCH URL', () => {
        cy.visit('https://www.saucedemo.com/')
        
    })
})

describe('CHECK BASIC FUNCTIONS', () => {
    it('LOGIN', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        
    })

    it('ADD_TO_CART', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        
    })

    it('CHECKOUT', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    })

    it('VERIFY URL', () => {
    cy.url("https://www.saucedemo.com/checkout-step-one.html");
    cy.get('[data-test="firstName"]').type("SG");
    cy.get('[data-test="lastName"]').type("SG");
    cy.get('[data-test="postalCode"]').type("15426");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    })

    //verify text
    it('VERIFY THANKYOU TEXT', () => {
    cy.get('[data-test="complete-header"]').should('exist');
    cy.title().should('eq',"Swag Labs");
    })
})