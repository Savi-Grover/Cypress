const jsonData = require('../fixtures/DataDrivenTesting2.json')


describe('Data Driven Test Suite2',()=>{

    jsonData.forEach((testData) => {

        it('Data Driven Test2',()=>{

            cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
    
            cy.get('textarea[id="APjFqb"]').clear();
    
            cy.get('textarea[id="APjFqb"]').type(testData.skill1);
    
            cy.get('button[class="HZVG1b Tg7LZd"]').click();
            cy.wait(3000);
        })
        
    });

})