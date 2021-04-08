#!/bin/bash
# git checkout lesson-2
# git add .
# git commit -m 'autocommit'
# for i in {3..15}
# do
#     git checkout lesson-$i
#     git checkout lesson-2 ./my-project/package.json ./my-project/package-lock.json ./my-project/app.json ./configure.sh ./README.md
#     git commit -m 'changed configs'
# done
#
#from git checkout lesson-30
# git add .
# git commit -m 'autocommit'
for i in {31..35}
do
    git checkout lesson-$i
    git checkout lesson-30 ./gamezone/App.js ./gamezone/routes/homeStack.js ./gamezone/package.json ./gamezone/package-lock.json ./configure.sh
    git commit -m 'changed configs'
done
