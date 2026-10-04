rm -rf ./demo-publish
mkdir ./demo-publish
cp ./Demo/Index.html ./demo-publish
npx esbuild ./Demo/demo.ts --bundle --format=iife --target=es2017 --minify --outfile=./demo-publish/demo.js
