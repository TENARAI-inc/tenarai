context('header', () => {
  describe('no login', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.noLoading();
    });
    describe('render', () => {
      it('render header', () => {
        cy.get('header').within(() => {
          cy.contains('Tenarai Sample Web');
          cy.contains('a', 'トップ');
          cy.contains('a', 'ログイン');
        });
      });
    });
    describe('action', () => {
      it('トップ', () => {
        cy.goToDetail();
        cy.contains('a', 'トップ').click();
        cy.location('pathname').should('eq', '/');
      });
    });
  });
  describe('with login', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login();
    });
    describe('render', () => {
      it('render header', () => {
        cy.contains('a', 'トップ');
        cy.contains('a', 'ジョン・ドゥ').within(() => {
          cy.contains('span', '3');
        });
        cy.contains('a', 'カート').within(() => {
          cy.contains('span', '0');
        });
        cy.contains('a', 'ログイン').should('not.exist');
        cy.contains('a', 'ログアウト');
      });
    });
    // describe('action', () => {
    //   it('go to detail', () => {
    //     cy.goToDetail();
    //   });
    //   it('go to user page', () => {
    //     cy.contains('a', 'ジョン・ドゥ').click();
    //     cy.contains('h1', 'マイページ');
    //   });
    //   it('go to user page', () => {
    //     cy.contains('a', 'カート').click();
    //     cy.contains('h2', 'カート 0点');
    //     cy.contains('button', 'お支払いへ進む');
    //   });
    //   it('logout', () => {
    //     cy.contains('a', 'ログアウト').click();
    //   });
    // });
  });
});
