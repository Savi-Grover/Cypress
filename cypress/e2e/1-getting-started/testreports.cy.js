
describe('CHECK BASIC FUNCTIONS', () => {
    it('LOGIN', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.log('checking shopping feature')
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        
    })
})