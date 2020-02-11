Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/exclusive/behind-the-scenes';
let title = 'Cuplikan Behind the Scenes Eksklusif Hanya di RCTI+ - RCTI+';
let desc = 'Nonton behind the scenes, cuplikan lucu program dan acara TV RCTI, MNC, GTV, iNews Online Indonesia';
let keyword = 'behind the scene rcti, behind the scene mnc, behind the scene inews, behind the scene gtv, behind the scene';

it('Meta BTS', () => { 
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

