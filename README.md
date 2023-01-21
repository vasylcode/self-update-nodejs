# Self Update NodeJS App

Easy auto-update your NodeJS app, when a new version is released.

## How does this work?

You run an `update.sh` script with crontab on your machine (e.g., Linux VPS), which compares the version of your current installed app with the version on the Github repository. If they differ, the script automatically makes a git pull of the current repo.

## Usage

- Host `index.js` on your backend server. This code gets the repository version through the Github API.
- Put the `update.sh` in folder with your package.json file.
- Make a cron task for the `update.sh` script. Run `crontab -e` (for current user) or `nano /etc/crontab` (for all users):

  ```bash
  # run the script every hour
  0 * * * * bash /self-update-nodejs/update.sh
  ```

  see [crontab examples](https://crontab.guru/examples.html)
