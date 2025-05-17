context('item-detail', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('render', () => {
    it('render (no login)', () => {
      cy.goToDetail(34);
      cy.contains('h1', 'アイテム34');
      cy.contains('￥59');
      cy.contains('アイテム34の説明');
      cy.contains('button', 'カートに追加').should('not.exist');
    });
    it('render (with login)', () => {
      cy.login();
      cy.goToDetail(55);
      cy.contains('h1', 'アイテム55');
      cy.contains('￥159');
      cy.contains('アイテム55の説明');
      cy.contains('button', 'カートに追加');
    });
  });
});
