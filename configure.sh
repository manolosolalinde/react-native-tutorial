#!/bin/bash
git checkout lesson-2
git add .
git commit -m 'autocommit'
for i in {3..35}
do
    git checkout lesson-$i
    git checkout lesson-2 ./my-project/package.json ./my-project/package-lock.json ./my-project/app.json ./configure.sh ./README.md
    git commit -m 'changed configs'
done
