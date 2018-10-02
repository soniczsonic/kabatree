#!/usr/bin/env node
const execSync = require('child_process').execSync;
const readline = require('readline');

console.log('tell me new worktree name')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', worktree => {
  const pwd = `${execSync("pwd")}`
  const path = pwd.split('/')
  const directory = path[path.length - 1].replace(/\r?\n/g,"")
  console.log(`creating ${worktree} branch`)

  cmd = `git worktree add -b ${worktree} ../${worktree} master; rsync -av --exclude='.git' ../${directory}/ ../${worktree}`
  execSync(cmd)

  rl.close();
});