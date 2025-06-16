### Git チートシート

git の手順は add -> commit -> push

```bash
# 対象ファイルの変更を git のインデックスに追加する
git add {ファイルパス}

# 変更のあるファイルすべてを git のインデックスに追加する
git add -A

# ディレクトリ以下の変更をまとめてgit のインデックスに追加する
git add {ディレクトリ}

# コメント入力画面になり、入力完了すればコミット完了
git commit

# コメントを引数でわたすことで入力画面をスキップしてコミット完了
git commit -m "コメント"

# コミットに成功していれば自分が直前に登録したコミットのログがトップにでてくる
git log

# 現在のbranchが間違いなく自分のbranchなのを確認する
git branch

# 現在のbranchから自分のコミットをリモート（GitHub）にpushする
git push origin HEAD

# コンフリクトを無視して自分のbranchを強制pushする
git push origin HEAD -f

# push後のログにエラーがでていないか確認するとよい
# pushしたと思ってGitHubに行っても変更がなくて、よく見るとpushに失敗していることはよくある
```
