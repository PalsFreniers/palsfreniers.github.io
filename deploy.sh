#!/bin/bash

set -xe

rm -fr css js

sass scss:css
tsc -p tsconfig.json
git add .
git commit
git push
