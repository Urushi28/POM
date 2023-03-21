class Homepage_PO {

    visitHomepage() {

        cy.visit(Cypress.env("OrangeHRM_HomePage"));
        cy.wait(6000);
    }


    Login() {

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="Submit"]').click()



    }
}

export default Homepage_PO;