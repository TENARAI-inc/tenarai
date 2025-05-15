context('top', () => {
  describe('render (no login)', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('render header', () => {
      cy.get('header').within(() => {
        cy.contains('Tenarai Sample Web');
        cy.contains('a', 'トップ');
        cy.contains('a', 'ログイン');
      });
    });
    it('render item list', () => {
      cy.contains('h1', 'Tenarai Sample Web');
      cy.contains('Welcome to the Tenarai Sample Web!');
      cy.get('.ItemList > ul > li').should('have.length', 100);
    });
    it('render お知らせ', () => {
      cy.contains('h2', 'お知らせ');
    });
    it('render footer', () => {
      cy.contains('a', 'プライバシーポリシー');
      cy.contains('a', 'お問い合わせ');
    });
  });
  describe.skip('render (with login)', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('.ItemList > ul > li').should('have.length.gt', 0);
      cy.get('header').contains('a', 'ログイン').click();
      cy.contains('dialog', 'ログイン').within(() => {
        cy.get('input[type="password"]').type('123');
        cy.contains('button', 'ログイン').click();
      });
      cy.contains('dialog', 'ログイン').should('not.exist');
    });
    it('render header', () => {
      cy.contains('a', 'トップ');
      cy.contains('a', 'ジョン・ドゥ');
      cy.contains('a', 'カート');
      cy.contains('a', 'ログイン').should('not.exist');
      cy.contains('a', 'ログアウト');
    });
  });
});
