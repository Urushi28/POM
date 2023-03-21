///<reference types="Cypress"/>

describe('This is my first test suite',
()=>{
    it('This is my first Test Case',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="Submit"]').click()
       // cy.get('.oxd-userdropdown-name').should('have.text','ankita22 Patel')
        //task for day
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
       cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
       // cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').should('have.length',4) //caining and assertions
         cy.contains('Logout').then((lastlink)=>{
             const linkname=lastlink.text()
            cy.log(linkname)
             cy.wrap(lastlink).click()
         })

       // cy.contains('Logout')

    });

  

});
