#!/bin/bash

BASE_DIR=/var/www
APPLICATION_DIRECTORY=$BASE_DIR/merchantprotal

echo "Configuration"
export NODE_ENV=master

echo "Stop server : forever stopall"
cd "$APPLICATION_DIRECTORY"
sudo forever stopall

echo "Updating"
cd "$APPLICATION_DIRECTORY"
sudo git fetch
sudo git reset --hard HEAD
sudo git checkout master
sudo git pull origin master

echo "Delete .DS_Store"
sudo find . -name ".DS_Store" -delete

echo "start server : forever start $APPLICATION_DIRECTORY/app.js"
cd "$APPLICATION_DIRECTORY"
sudo forever start $APPLICATION_DIRECTORY/app.js