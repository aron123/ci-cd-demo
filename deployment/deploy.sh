#!/bin/bash

openssl aes-256-cbc -K $encrypted_4cabe539b470_key -iv $encrypted_4cabe539b470_iv -in ./deployment/deploy_key.enc -out ./deployment/deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 ./deployment/deploy_key
echo -e "Host $SERVER_IP\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deployment/deploy_key

echo "Uploading controller/"
echo "Uploading service/"
echo "Uploading static/"
echo "Uploading index.js"
echo "Uploading package.json"
echo "Uploading package-lock.json"

# ssh: npm install

ssh -i "./deployment/deploy_key" $SERVER_USER@$SERVER_IP pm2 restart calculator
