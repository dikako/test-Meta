Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

let url = '/programs/486/ali/clips';
it('Meta Program Clip', () => {
    cy.visit(url);
});

it('Validate Meta Title', () => {
    cy.get('head meta[name="title"]').invoke('attr', 'content')
        .then($titleText => {
            const textTitle = $titleText;
            let isMatch = textTitle.search(/Nonton [a-zA-Z0-9] Online Full Episode - RCTI\+/i);
            expect(isMatch).to.not.equal(-1);
        });
});

it('Validate Meta Description', () => {
    cy.get('head meta[name="description"]').invoke('attr', 'content')
        .then($descText => {
            //cy.log($descText);
            const textDesc = $descText;
            let isMatch = textDesc.search(/Kumpulan cuplikan video [a-zA-Z0-9] [a-zA-Z] online per episode lengkap hanya di RCTI\+/i);

            expect(isMatch).to.not.equal(-1);
        });
});