Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/exclusive/photo';
let title = 'Kumpulan Foto Artis dan Poster Menarik Talent Indonesia - RCTI+';
let desc = 'Lihat kumpulan foto artis cantik dan ganteng dalam negeri dan luar negeri lengkap dengan posternya';
let keyword = 'foto artis, foto artis cantik, foto artis ganteng';

it('Meta Photo', () => { 
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

