#!/bin/bash
#
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
rm -rf dist
mkdir dist

cp CNAME dist/
cp index.html dist/
mkdir -p dist/public
cp -r img dist/
cp -r src dist/
cp -r css dist/
cp public/fuelism.* dist/public/


# Add changes to git.
git add -A
git add -f dist/public

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
git subtree push --prefix=dist git@github.com:alfredkam/fuelism.github.io.git master
