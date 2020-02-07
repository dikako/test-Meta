Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/trending/6/kesehatan';
let title = 'Berita Terkini Dunia Kesehatan dari Sumber Terpercaya - RCTI+\n';
let desc = 'Kumpulan berita, artikel dan tips kesehatan terpercaya, mulai dari diet, olahraga, parenting, penyakit, obat hingga seks\n';
let keyword = 'berita kesehatan, artikel kesehatan, tips kesehatan';

it('Meta Kesehatan', () => { 
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

