before('Before', () =>{
    cy.log("Before All Hook")
})

after('After', () =>{
    cy.log("After All Hook")
})

beforeEach('Before Each', () =>{
    cy.log("BeforeEach Hook")

    //keeping common url visit - since it is used in all tests
    cy.visit('https://www.saucedemo.com/');
})

afterEach('After Each', () =>{
    cy.log("AfterEach Hook")
})


describe('Hooks Testing1',()=>{
it.only('Test1',()=>{

        
       // cy.visit('https://www.saucedemo.com/');
    
        //search text are and assert and log value of text field
        cy.get('[data-test="username"]').then((element)=>{
            cy.log("read textfield: "+element.text())
        })
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    })
})

describe('Hooks Testing2',()=>{
    it.only('Test2',()=>{
    
            
            //cy.visit('https://www.saucedemo.com/');
        
            //search text are and assert and log value of text field
            cy.get('[data-test="username"]').then((element)=>{
                cy.log("read textfield: "+element.text())
            })
            cy.get('[data-test="username"]').type("standard_user");
            cy.get('[data-test="password"]').type("secret_sauce");
            cy.get('[data-test="login-button"]').click();
        })
    })