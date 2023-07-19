/// <reference types="Cypress" />

class searchPage {

    getResultsContainer() {
        return cy.get("div.hs-search-results");
    }

    getResultsList() {
        return cy.get("ul.hs-search-results__listing");
    }

    checkResults() {
        this.getResultsContainer()
            .children()
            .should("have.length.greaterThan", 0)
    }

    validateResultItems(text) {
        let regex = new RegExp(text, "i");
        this.getResultsList().each((item) => {
            // cy.wrap(item).find("a").should("have.attr", "href", "https://www.stxnext.com/")
            cy.wrap(item)
                .find("a")
                .invoke("attr", "href")
                .should("match", /^https:\/\/www.stxnext.com\//i);
            cy.wrap(item)
                .find("h3")
                .should("have.class", "hs-search-results__title");
            cy.wrap(item)
                .find("p")
                .invoke("text")
                .should("match", regex);
        })
    }

}

export default new searchPage();