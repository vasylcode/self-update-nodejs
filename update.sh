#!/bin/bash

# Check if packages are installed
if ! command -v curl &> /dev/null && ! command -v git &> /dev/null; then
    sudo apt install -y curl git
fi

# Store the current version of the app
current_version=$(node -e "console.log(require('./package.json').version)")
echo "Current version = $current_version"

# Fetch the latest version from your domain
latest_version=$(curl -s "http://localhost:3000/version")
echo "Latest version = $latest_version"

# Check if the latest version is newer than the current version
if [ "$latest_version" != "$current_version" ]; then
    # Update the app from Github
    echo "[$(date)] New version $latest_version is detected! Old version: $current_version. Updating..."
    git pull origin master
    npm install
    pm2 restart index.js

fi