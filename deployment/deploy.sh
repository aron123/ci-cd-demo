#!/bin/bash

# config ssh connection
openssl aes-256-cbc -K $encrypted_4cabe539b470_key -iv $encrypted_4cabe539b470_iv -in ./deployment/deploy_key.enc -out ./deployment/deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 ./deployment/deploy_key
echo -e "Host $SERVER_IP\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deployment/deploy_key

# copy files
rsync -r controller $SERVER_USER@$SERVER_IP:~/ci-cd-example/controller
rsync -r service $SERVER_USER@$SERVER_IP:~/ci-cd-example/service
rsync -r static $SERVER_USER@$SERVER_IP:~/ci-cd-example/static
rsync index.js $SERVER_USER@$SERVER_IP:~/ci-cd-example/
rsync package*.json $SERVER_USER@$SERVER_IP:~/ci-cd-example/

# start app
ssh -i ./deployment/deploy_key $SERVER_USER@$SERVER_IP cd ~/ci-cd-example/ && npm install
ssh -i ./deployment/deploy_key $SERVER_USER@$SERVER_IP pm2 restart calculator
