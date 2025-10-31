#!/bin/bash

set -xe

rm -fr index.css js

sassc index.scss > index.css
tsc -p tsconfig.json
