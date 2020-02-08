Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/tv/rcti';
let title = 'Live Streaming RCTI Hari Ini - TV Online Indonesia - RCTI+\n';
let desc = 'Nonton live streaming RCTI online hari ini tanpa buffering untuk semua program dan acara favorit yang tayang setiap hari. Dapatkan juga jadwal acara RCTI terbaru hanya di RCTI+\n';
let keyword = 'streaming rcti, live streaming rcti, rcti live, rcti streaming, rcti live streaming';

it('Meta RCTI', () => { 
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

