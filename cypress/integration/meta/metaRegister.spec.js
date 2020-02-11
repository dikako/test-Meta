Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/register';
let title = 'Halaman Sign Up / Pendaftaran Akun - RCTI+';
let desc = 'Pertanyaan yang paling sering diajukan terkait informasi penggunaan dan program tayangan di RCTI+ beserta jawabannyaTempat pendaftaran / register akun di RCTI+. Buruan register sekarang, gratis streaming online sepuasnya';
let keyword = 'register rctiplus, register rcti+, daftar rctiplus, rctiplus';

it('Meta Register', () => { 
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

