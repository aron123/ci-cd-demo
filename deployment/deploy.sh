#!/bin/bash

openssl aes-256-cbc -K $encrypted_4cabe539b470_key -iv $encrypted_4cabe539b470_iv -in ./deployment/deploy_key.enc -out ./deployment/deploy_key -d

echo "Uploading controller/"
echo "Uploading service/"
echo "Uploading static/"
echo "Uploading index.js"
echo "Uploading package.json"
echo "Uploading package-lock.json"

# ssh: npm install

# ssh: pm2 restart calculator 
