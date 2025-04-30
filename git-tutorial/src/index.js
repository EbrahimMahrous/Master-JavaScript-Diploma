

console.log('index.js')
console.log('version12')





// lesson 1
// Git Setup
// ls = list the files and folders in the current folder.

// $HOME folder

// cd = change directory (directory = folder)
// cd ~/Desktop/git-tutorial



// lesson 2
// Creating a Version ==> version = commit
// git init
// git status
// git add .
// git status
// git commit -m 'version1'
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
// git log

// I created file change.js
// git add .
// git commit -m 'version 1' --amend
// git log


// lesson 3
// Visualizing Git + Git Fundamentals
// He said that git status equal to icon you used in amazon project.
// git add .     equal to   +
// Staging Area (changes here will go in the next version).
// Working Area (changes here will not go in next version).
// git reset .   equal to   -
// git checkout -- . 


// lesson 4
// Completing the version History
// git add .
// git commit -m 'version 2'
// git add .
// git commit -m 'version 3'
// git log



// lesson 5
// viewing previous versions of the code.
// commit hash ==> 55ab81f3dcdb0d76465459b4a6978d814f52d3b  ==> such as Id 
// git checkout 55ab81f3dcdb0d76465459b4a6978d814f52d3b2
// git log
// git log --all
// git checkout 55ab81f3dcdb0d76465459b4a6978d814f52d3b2
// git log --all


// lesson 6
// Restoring code to a previous version.
// git add .
// git commit -m 'version 1 updated'
// git log
// q
// git log --all --graph
// git checkout master
// git log --all --graph
// Note: git log dose not show unnamed branches.
// git checkout dc9a85bb6263e264828b936a0db124d22161dd55 .
// git log --all --graph
// git status
// git commit -m 'version 1 restored'
// git log --all --graph

// Summary
// 1. Create a Version ==> git init git status git add. git commit -m 'message'
// 2. View previous version ==> git log --all --graph git checkout <commit_hash> git checkout <branch_name>
// 3. Restore to previous version ==> git checkout <hash|branch> <file|folder> git commit -m 'message'

// lesson 7
// We're Done + Extra Features
// alias
// git status ==> git s
// git config --global alias.s 'status'
// git config --global alias.cm 'commit -m'
// git cm
// git config --global alias.co 'checkout'
// i made file called secrets.txt and .gitignore
// git add .
// git commit -m 'Add git ignore'

// cd ~/Desktop/git-tutorial-2
// git log
// q
// rm -rf .git
// git log


// Part 2
// lesson 8
// online backup
// 2-Way Sync
// Updates on computer => google drive
// Updates on google drive => computer

// lesson 9
// Intro to githup
// git repository = folder that is being tracked by git
// githup = specifically designed for git repositories

// githup or bitbucket or gitLab ===> three do the same thing.
// Feature 1 of 3: Creating an online backup.

// local repository ===> local refers to things our computer.
// remote repository ===> refers to things that are online.

// cd ~/Desktop/git-tutorial 
// git remote add origin https://github.com/EbrahimMahrous/git-tutorial.git
// git remote
// git remote -v  ==> Verbose = give me more details
// git remote remove origin
// git remote -v

// git remote add origin https://github.com/EbrahimMahrous/git-tutorial.git
// git remote -v

// Upload to githup = push
// Download from Githup = pull.

// git config --global credential username 'IbrahimMahrous'
// git log --all --graph
// q

// git push ==> We push 1 branch of commits at a time.
// git push origin master

// if you get an error, keep watching, we'll troubleshoot.

// Troubleshooting if git push didn't work.
// 1. Ensure you're using HTTPS url
// 2. Ensure you run git config
// 3. Put your username in the remote url
// 4. Use a personal access token ==> Save your access token in a safe place, delete it when not needed.
// 5. Set Up SSH Keys.


// lesson 10
// Githup Features
// Sync changes from Computer => GitHup.
// root = the outer folder of our repository.

// git log --al --graph
// q

// git add .
// git commit -m 'version 11'
// git log --al --graph
// q

// git push origin master 

// git log --al --graph
// q

// git push origin master 
// git push origin master --set-up stream
// git push

// git status
// git push origin master

// git push only pushes commits

// git add .
// git push origin master

// git commit --amend 'version 12'
// git push origin master

// git push origin master -f   
// -f ==> force push

// git log --all ---graph

// Feature 3 of 3:
// Sync changes from GitHup => Computer

// cd ~/Desktop
// git clone https://github.com/EbrahimMahrous/git-tutorial.git new-git-tutorial
// cd ~/Desktop/new-git-tutorial

// In new file you created do that here
// git status
// git add .
// git commit -m 'version 13'
// git push origin master
// git log --all ---graph

// git fetch
// git log --all ---graph

// git pull origin master
// git log --all ---graph
// q

// git pull origin master --set-upstrem ==>  won't work for older version of git
// git pull


// Summary Here
// 1. Create an online backup   git remote add origin <url>  git push origin <branch>
// 2. sync computer => Githup   git push origin <branch>     git push origin <branch> -f
// 3. Sync GitHup => computer   git pull origin <branch>


// GitHup Practice Scenarios





