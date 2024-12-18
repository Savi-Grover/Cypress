describe('test dropdown', ()=>{
    it('dropdown', ()=>{

        cy.visit('https://example.cypress.io/commands/actions')

        // at first, no option should be selected- DROPDOWN CAPTION 
        cy.get('.action-select').should('have.value', '--Select a fruit--')

        //select by index
        cy.get('.action-select').select(1)

        //visible text
        cy.get('.action-select').select('oranges')

        //select by value
        cy.get('.action-select').select('bananas')

        // Select option(s) with matching text content
        cy.get('.action-select').select('apples')
        // confirm the apples were selected
        // note that each value starts with "fr-" in our HTML
        cy.get('.action-select').should('have.value', 'fr-apples')

        cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
        cy.get('.action-select-multiple')
        // when getting multiple values, invoke "val" method first
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

        // Select option(s) with matching value
        cy.get('.action-select').select('fr-bananas')
        cy.get('.action-select')
        // can attach an assertion right away to the element
        .should('have.value', 'fr-bananas')

        cy.get('.action-select-multiple')
        .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
        cy.get('.action-select-multiple')
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

        // assert the selected values include oranges
        cy.get('.action-select-multiple')
        .invoke('val').should('include', 'fr-oranges')


    })
})