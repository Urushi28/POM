class Logout_PO
{

    logout() {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    
          cy.contains('Logout').then((lastlink)=>{
              const linkname=lastlink.text()
             cy.log(linkname)
              cy.wrap(lastlink).click()
          })
        
    }
}

export default Logout_PO;