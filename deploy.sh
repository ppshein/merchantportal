#!/bin/bash

BASE_DIR=/var/www
APPLICATION_DIRECTORY=$BASE_DIR/merchantportal

echo "Configuration"
export NODE_ENV=master

echo "install all dependencies"
sudo npm install

echo "Stop server : pm2 stop"
cd "$APPLICATION_DIRECTORY"
sudo pm2 stop

echo "Updating"
cd "$APPLICATION_DIRECTORY"
sudo git fetch
sudo git reset --hard HEAD
sudo git checkout master
sudo git pull origin master

echo "Delete .DS_Store"
sudo find . -name ".DS_Store" -delete

echo "start server : pm2 start $APPLICATION_DIRECTORY/app.js"
cd "$APPLICATION_DIRECTORY"
sudo pm2 start $APPLICATION_DIRECTORY/app.js