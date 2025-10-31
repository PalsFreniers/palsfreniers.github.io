#!/bin/bash

set -xe

rm -fr index.css js/*.js

sassc index.scss > index.css
tsc js/**/*.ts
tsc js/*.ts
