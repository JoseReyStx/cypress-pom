/// <reference types="Cypress" />

class homePage {

    cookiesRejectOption() {
        return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
        // return cy.get('[role="dialog"] > a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
    }

    openSearchBar() {
        return cy.get(".searchBar");
    }

    searchInput() {
        return cy.get("input.searchInput");
    }

    searchButton() {
        return cy.get(".searchButton > input");
    }

    rejectCookies() {
        this.cookiesRejectOption().click();
        // this.cookiesRejectOption().contains(/Allow all/i).click({ force: true });
    }

    searchSomething(text) {
        this.openSearchBar().click({ force: true });
        this.searchInput().type(text);
        this.searchButton().click();
    }

}

export default new homePage();