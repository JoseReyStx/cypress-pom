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
        this.getResultsList().each((item) => {
            // here is an error. - item.find(...).should is not a function
            item.find("a").should("have.attr", "href", "https://www.stxnext.com/")
                .and((element) => {
                    element.find("h3").should("have.class", "hs-search-results__title");
                });
            item.find("p").should("have.string", text)
        })
    }

}

export default new searchPage();