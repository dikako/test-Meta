Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

let url = '/programs/465/si-doel-anak-sekolahan/episode/4173/si-doel-anak-sekolahan-s1-ep-1';
it('Meta Program About', () => {
    cy.visit(url);
});

it('Validate Meta Title', () => {
    cy.get('head meta[name="title"]').invoke('attr', 'content')
        .then($titleText => {
            const textTitle = $titleText;
            let isMatch = textTitle.search(/[a-zA-Z0-9] - RCTI\+/i);
            expect(isMatch).to.not.equal(-1);
        })
});

it('Validate Meta Description', () => {
    cy.get('head meta[name="description"]').invoke('attr', 'content')
        .then($descText => {
            //cy.log($descText);
            const textDesc = $descText;
            let isMatch = textDesc.search(/Nonton [a-zA-Z0-9] Online - Season [0-9] - Episode [0-9] - RCTI\+/i);

            expect(isMatch).to.not.equal(-1);
        });
});

      // if (isMatch != -1) {
            //     cy.log('True');
            // } else {
            //     cy.log('False');
            // }
// it('Validate Meta Keyword', () => {
//     cy.get('head meta[name="keywords"]')
//     .should('have.attr', 'content', keyword)
// })

    // cy.get('head meta[name="description"]')
    //     .should('have.attr', 'content', descRegexp);



