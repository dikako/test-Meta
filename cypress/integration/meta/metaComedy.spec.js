Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/explores/search?id=6';
let title = 'Nonton Video dan Acara Komedi Paling Lucu dan Terbaru - RCTI+';
let desc = 'Nonton video komedi paling lucu dari seluruh tayangan dan program RCTI, MNC TV, GTV, dan iNews. Selengkapnya hanya ada di RCTI+';
let keyword = 'acara komedi, video komedi';

it('Meta Comedy', () => { 
    // https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-that-an-uncaught-error-was-thrown-from-a-cross-origin-script
    cy.visit(url);
});

it('Validate Meta Title', () => {
    cy.get('head meta[name="title"]')
        .should('have.attr', 'content', title);
});

it('Validate Meta Description', () => {
    cy.get('head meta[name="description"]')
        .should('have.attr', 'content', desc);
});

it('Validate Meta Keyword', () => {
    cy.get('head meta[name="keywords"]')
    .should('have.attr', 'content', keyword)
})

