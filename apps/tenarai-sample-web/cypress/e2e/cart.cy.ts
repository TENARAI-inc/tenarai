context('cart', () => {
  describe('add item to cart', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login();
    });
    it('add and show cart', () => {
      cy.goToDetail(3);
      cy.contains('button', 'カートに追加').click();
      cy.contains('header a', 'カート').within(() => {
        cy.contains('span', '1');
      });

      cy.contains('header a', 'カート').click();
      cy.contains('h2', 'カート 1点');
      cy.get('.Cart__List > li').should('have.length', 1);

      cy.get('aside')
        .contains('li', 'アイテム3')
        .within(() => {
          cy.contains('￥300');
          cy.contains('アイテム3の説明');
        });
    });
    it('remove from cart', () => {
      cy.goToDetail(4);
      cy.contains('button', 'カートに追加').click();
      cy.contains('header a', 'カート').click();
      cy.get('aside')
        .contains('li', 'アイテム4')
        .within(() => {
          cy.contains('a', '削除').click();
          cy.contains('削除しますか？');
          cy.contains('button', 'キャンセル');
          cy.contains('button', '削除').click();
        });
      cy.get('.Cart__List > li').should('have.length', 0);

      cy.get('aside').click();
      cy.get('.Cart').should('not.have.class', '-open');
    });
  });
});
