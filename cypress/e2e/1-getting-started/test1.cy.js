describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)  //assertion
    })


    it('check url', () => {
        cy.visit('https://bookcart.azurewebsites.net/')
      })
  })