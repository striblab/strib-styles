#!/bin/bash
bundle check || bundle install
npm rebuild node-sass
npm install
gulp develop
