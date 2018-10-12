eazy git worktree solution.
You can open many branch at once.

~usage~

npx kabatree new_branch

= git worktree add -b new_branch ../new_branch master; rsync -a -I --exclude='.git' ../AwesomeProject/ ../new_branch

開発予定？
gitignoreされたファイルのみrsyncでコピーし、高速化
vscodeで開くオプションをつける。