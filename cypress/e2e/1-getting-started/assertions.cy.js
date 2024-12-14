describe('Cypress Assertion Suite',()=>{

    it('Cypress Assertion Test', ()=>{

        cy.visit('https://www.google.com/search?q=cypress.io')

        cy.get('#APjFqb').then((element)=>{
            expect(element.text()).to.equal("cypress.io");
        })

        cy.get('#APjFqb').should("have.text","cypress.io")

        cy.get('#APjFqb').should("contain","cypress.io")

        cy.get('#APjFqb').should("be.visible")

        cy.get('#APjFqb').should("have.html","cypress.io")
   
        cy.get('#APjFqb').should("have.html","cypress.io")
        .and("have.attr","value")

        cy.get('#APjFqb').should("have.html","cypress.io")
        .and("have.attr","value").and("include","cypress.io")

        cy.get('#APjFqb').then((element)=>{
            expect(element.text()).to.have.length(10);
        })
    })

})