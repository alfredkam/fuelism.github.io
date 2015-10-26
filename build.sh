#!/bin/bash
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
