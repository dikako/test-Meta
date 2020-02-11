Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/trending/8/teknologi';
let title = 'Berita Teknologi IT dan Sains Terbaru Hari Ini - RCTI+';
let desc = 'Kumpulan berita, artikel dan tips terhangat seputar teknologi, sains, gadget dan elektronik nasional dan internasional terkini di Indonesia';
let keyword = 'berita teknologi, berita gadget hari ini, berita teknologi terbaru';

it('Meta Teknologi', () => { 
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

