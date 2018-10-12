#!/usr/bin/env node
const execSync = require('child_process').execSync
const program = require('commander')

program
  .version('1.1.2')
  .option('-V, --vscode', 'open the worktree by vscode')
  .parse(process.argv)


/*------   helper function   ------*/
const getDir = () => {
  const pwd = `${execSync("pwd")}`
  const path = pwd.split('/')
  const dir = path[path.length - 1].replace(/\r?\n/g,"")

  return dir
}


/*------   constant   ------*/
const worktree = process.argv[process.argv.length - 1]
const directory = getDir()
cmd = `git worktree add -b ${worktree} ../${worktree} master; rsync -a -I --exclude='.git' ../${directory}/ ../${worktree}`


/*------   main function   ------*/
console.log(/*step1*/`gunnmayyann: creating ${worktree} branch. It take 30 second`)
execSync(cmd)
console.log(/*step2*/'fin!')
if (program.vscode) execSync(`code ../${worktree}`)
