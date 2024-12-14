import 'cypress-iframe'
import 'cypress-xpath'
describe('IFrame Suite', () => {

    it('IFrame Test', () => {
      
  
      cy.visit('./iframedemo.html')
      

     // cy.frameLoaded('[name="myframe"]'); //frame name
     //cy.get('#buttonframe').click();
     cy.frameLoaded('#buttonframe'); //frame id
     //cy.iframe('#buttonframe').click();
      //cy.iframe().contains('Downloads').click();  //click on download link on html page
     
    })
  
  })