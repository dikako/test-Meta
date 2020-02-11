Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/';
let title = 'RCTI+ - Live Streaming Program 4 TV Terpopuler Ganteng';
let desc = 'Live Streaming Program RCTI, MNCTV, GTV & iNews. Menyajikan konten eksklusif yang tidak tayang di TV & Informasi Trending Terupdate. Nonton Gak Monoton di RCTI+.';
let keyword = 'rctiplus, rcti plus, rcti+';

it('Meta Homepage', () => { 
    // https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-that-an-uncaught-error-was-thrown-from-a-cross-origin-script
    cy.visit(url);
});

it('Validate Meta Title', () => {
    // cy.get('head meta[name=title]')
    //     .should('have.attr', 'content', title);
    let titleElement = cy.get('head meta[name=title]').invoke('attr', 'content')
    .then($getTitle => {
        const titleText = $getTitle;
        expect(title).to.equal(titleText);
    })
});

it('Validate Meta Description', () => {
    cy.get('head meta[name="description"]')
        .should('have.attr', 'content', desc);
});

it('Validate Meta Keyword', () => {
    cy.get('head meta[name="keywords"]')
    .should('have.attr', 'content', keyword);
})

