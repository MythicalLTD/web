---
sidebar_position: 3
---
# Creating SSL Certificates

To begin, we will install certbot, a simple script that automatically renews our certificates and allows much easier creation of them. The command below is for Ubuntu distributions, but you can always check Certbot's [official site](https://certbot.eff.org/) for installation instructions. We have also included a command below to install certbot's Apache plugin so you won't have to stop your webserver.


```bash
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

### Run this on your server if you use oracle cloud
```bash
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -t nat -F
sudo iptables -t mangle -F
sudo iptables -F
sudo iptables -X
iptables-save > /etc/iptables/rules.v4
```

### Creating a Certificate
After installing the certbot, we need to generate a certificate. There are a couple of ways to do that, but the easiest is to use the web server-specific certbot plugin you just installed. For Wings-only machines that don't need a web server, use the standalone or DNS method of the certbot as you don't need a web server for it.

Then, in the command below, you should replace ``example.com`` with the domain you would like to generate a certificate for. When you have multiple domains you would like certificates for, simply add more ``-d anotherdomain.com`` flags to the command. You can also look into generating a wildcard certificate but that is not covered in this tutorial.

### HTTP challenge

HTTP challenge requires you to expose port 80 for the challenge verification.

```bash
# Nginx
certbot certonly --nginx -d example.com
# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.
certbot certonly --standalone -d example.com
```

### DNS challenge

DNS challenge requires you to create a new TXT DNS record to verify domain ownership, instead of having to expose port 80. The instructions are displayed when you run the certbot command below.

```bash
certbot -d example.com --manual --preferred-challenges dns certonly
```

### Auto Renewal

You'll also probably want to configure the automatic renewal of certificates to prevent unexpected certificate expirations. You can open crontab with ``sudo crontab -e`` and add the line from below to the bottom of it for attempting renewal every day at 23 (11 PM).

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```
