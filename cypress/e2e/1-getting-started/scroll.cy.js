describe('Scroll Up Down Suite', () => {

    it('Scroll Test', () => {
  
      cy.visit('https://www.youtube.com/watch?v=ACUMZ3OkExQ&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB&index=1')

      cy.wait(5000);
        //scrollIntoView
      cy.contains('JavaScript Full Course Overview')
        .scrollIntoView().should('be.visible').click();

       // https://example.cypress.io/commands/actions
        cy.visit('https://example.cypress.io/commands/actions')
        cy.wait(5000);
      cy.get('#scroll-horizontal button').should('not.be.visible')

        // scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
        cy.get('#scroll-horizontal button')
        .should('be.visible')

        cy.get('#scroll-vertical button')
        .should('not.be.visible')

        // Cypress handles the scroll direction needed
        cy.get('#scroll-vertical button').scrollIntoView()
        cy.get('#scroll-vertical button')
        .should('be.visible')

        cy.get('#scroll-both button')
        .should('not.be.visible')

        // Cypress knows to scroll to the right and down
        cy.get('#scroll-both button').scrollIntoView()
        cy.get('#scroll-both button')
        .should('be.visible')

        //ScrollTo
        // if you chain .scrollTo() off of cy, we will
        // scroll the entire window
        cy.scrollTo('bottom')

        cy.get('#scrollable-horizontal').scrollTo('right')

        // or you can scroll to a specific coordinate:
        // (x axis, y axis) in pixels
        cy.get('#scrollable-vertical').scrollTo(250, 250)

        // or you can scroll to a specific percentage
        // of the (width, height) of the element
        cy.get('#scrollable-both').scrollTo('75%', '25%')

        // control the easing of the scroll (default is 'swing')
        cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

        // control the duration of the scroll (in ms)
        cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
   
    })
  
  })
