---
sidebar_position: 6
---
# Update MythicalDash

This documentation covers the process for updating within the 3.x series of releases. This means updating from — for example — 3.0.0 to 3.1.0
## Take a backup
So first we are goign to take a backup of the dash and the database structure using: 
```bash
cd /var/www/mythicaldash
mariadb-dump -p mythicaldash > mythicaldash_backup.sql
cd /var/www
zip -r clientbackup.zip mythicaldash/
```
## Download the Update
The first step in the update process is to download the new client files from GitHub. The command below will download the release archive for the most recent version of MythicalDash.
```bash
cd /var/www/mythicaldash
curl -Lo MythicalDash.zip https://github.com/mythicalltd/mythicaldash/releases/latest/download/MythicalDash.zip
unzip -o MythicalDash.zip -d /var/www/mythicaldash
dos2unix arch.bash
sudo bash arch.bash
rm /var/www/mythicaldash/public/FIRST_USER # Remove this
```
## Update Dependencies
After you've downloaded all of the new files you will need to upgrade the core components of the dash. To do this, simply run the commands below and follow any prompts.
```bash
composer install --no-dev --optimize-autoloader
```

## Database Updates
You'll also need to update your database schema for the newest version of MythicalDash.
```bash
./MythicalDash -migrate
``` 

## Set Permissions
The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this is www-data but can vary from system to system — sometimes being nginx, caddy, apache, or even nobody.
```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/mythicaldash/*
```
## Done
You are done, and now you should be running the latest version of MythicalDash.
