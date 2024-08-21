---
sidebar_position: 2
---

# Ubuntu Installation

The commands below are simply an example of how you might install these dependencies. Please consult with your operating system's package manager to determine the correct packages to install.
```bash
# Update the server
apt update && apt upgrade -y
# Add "add-apt-repository" command
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
# Add additional repositories for PHP, Redis, and MariaDB
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
# MariaDB repo setup script can be skipped on Ubuntu 22.04
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
# Update repositories list
apt update
# Add universe repository if you are on Ubuntu 18.04
apt-add-repository universe
# Install Dependencies
apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip zip git redis-server dos2unix
```

# Continue 
Now that you finished with everything that you had to install let's go to the next step 
- [Next](/docs/MythicalDash/install.md#installing-composer)