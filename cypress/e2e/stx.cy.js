/// <reference types="Cypress" />
import homePage from "../pages/STXNext/homePage";
import searchPage from "../pages/STXNext/searchPage";

/* 
Given that the user is on the homepage of the website
When the user enters a keyword in the search bar
And the user clicks the "Search" button
Then the user should see a list of search results related to the entered keyword
And the search results should include the title, description, and URL of each result
And the user should be able to click on a search result to access the corresponding page
*/

describe("Practicing Cypress", () => {
    beforeEach(() => {
        cy.visit("https://www.stxnext.com/");
    })

    it("Verify search functionality on the website", () => {
        homePage.rejectCookies(); //I can't reject cookies - intermitent issue: is being covered by another element
        homePage.searchSomething("cypress");
        cy.location("pathname").should("not.be", "/");
        searchPage.checkResults();
        searchPage.validateResultItems("cypress");
    });
});