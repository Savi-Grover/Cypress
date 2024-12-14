describe('Repeat',()=>{

    //keep the test block inside repeat command
    Cypress._.times(3, (k)=>{
        it('Test1',()=>{
            cy.visit('https://www.saucedemo.com/');
        
            //search text are and assert and log value of text field
            cy.get('[data-test="username"]').then((element)=>{
                cy.log("read textfield: "+element.text())
            })
            cy.get('[data-test="username"]').type("standard_user");
            cy.get('[data-test="password"]').type("secret_sauce");
            cy.get('[data-test="login-button"]').click();
        })
    })
   
    })