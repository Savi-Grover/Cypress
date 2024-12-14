require('cypress-xpath') 

describe('LAUNCHING APPLICATION', () => {
    it('LAUNCH URL', () => {
        cy.visit('https://www.saucedemo.com/')
        
    })
})


describe('CHECK BASIC FUNCTIONS', () => {
    
    it('LOGIN', () => {
        cy.log('checking shopping feature')
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        

        //use xpath to add to cart
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button').click();

        //cart icon
        cy.xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[3]/a').click();

        //checkout
        cy.xpath('//button[@id="checkout"]').click();

        //

    })
})