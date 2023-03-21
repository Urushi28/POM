///<reference types="Cypress"/>
import Homepage_PO from "../support/pageObjects/OrangeHRM/Homepage_PO";
import Link_PO from "../support/pageObjects/OrangeHRM/Link_PO";
import Logout_PO from "../support/pageObjects/OrangeHRM/Logout_PO";


describe('This is my first test suite', () => {

    const homepage_po = new Homepage_PO();
    const logout_po=new Logout_PO();
    const link_po = new Link_PO();


    beforeEach(function()   {
        homepage_po.visitHomepage();
        cy.wait(10000)
        homepage_po.Login();
        cy.wait(10000)
    })
    it('First TestCase', () => {

        //cy.SelectName('Admin');

         link_po.link_click('Admin');
         logout_po.logout();
        
    });
});