context('mypage', () => {
  describe('normal', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login();
      cy.contains('a', 'ジョン・ドゥ').click();
    });
    describe('render', () => {
      it('render', () => {
        cy.contains('h1', 'マイページ');
        cy.contains('お知らせが届いています');
        cy.contains('未読 3 件');
        cy.contains('a', ' ポイント失効のお知らせです。');
        cy.contains('a', 'ゴールデンウィークの営業について');
        cy.contains('a', '年末年始の営業について');
        // 登録情報
        cy.contains('h2', '登録情報');
        cy.contains(/〒999-9999.*新潟県手習市大字88/);
        cy.contains('手習三郎');
        cy.contains('090-9999-9999');
        // 保有ポイント
        cy.contains('h2', '保有ポイント');
        cy.contains('44444 ポイント');
      });
    });
  });
});
