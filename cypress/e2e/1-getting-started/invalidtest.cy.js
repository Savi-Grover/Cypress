describe('LAUNCHING APPLICATION', () => {
    it('LAUNCH URL', () => {
        cy.visit('https://www.saucedemo.com/')
        
    })
})

describe('CHECK BASIC FUNCTIONS', () => {
    it('LOGIN', () => {
        cy.get('[data-test="username1"]' ,{timeout: 3000}).type("standard_user");  //local timeout priotises over default global timeout
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        
    })
})