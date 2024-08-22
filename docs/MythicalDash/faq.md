---
sidebar_position: 3
---
# FAQ 
On this page here are more infos about MythicalDash and some fixes for some issues!

| Question | Link |
| --- | --- |
| How do I migrate from another platform? | [Migration](#migration) |
| How can I rebuild the dash? | [Rebuild the dash](#rebuild-the-dash) |
| What should I do if I have registration issues? | [Registration Issues](#registration-issues) |
| How can I fix servers not creating? | [Servers do not create](#servers-do-not-create) |
| What are the available page IDs? | [Page IDs](#what-are-the-page-ids-i-can-use) |
| Is there any video on how to install? | [Video](https://www.youtube.com/watch?v=8lsBegNFBbE) |

## Migration
We do not support migration from another platform or like import users and servers from pterodactyl!

This is due to pterodactyl making the passwords to be encrypted!
There are work around this like making a script that will create the user and give its server but that will require YOU to have

## Rebuild the dash
DO NOT RUN THIS IF YOU DO NOT KNOW WHAT IT DOES!

THIS WILL REBUILD YOUR DATABASE AND DELETE EVERYTHING SO USERS DATA GO BYE BYE!
MAKE SURE YOU FIRST DELETE ALL PTERO USERS AND PTERO SERVERS BEFORE YOU RUN THIS COMMAND!

```bash
cd /var/www/mythicaldash
./MythicalDash -environment:rebuild
```

## Registration Issues
If you get an error like failed to connect to the panel, it can mean a lot of things, but here is a short brief up for everything:

- You have a 3rd party panel (Pelican/Jexactyl/Wisp)
- You are using a 3rd party ddos protection (CloudFlare) [This just means you have to learn to configure it] 
- You have a trailing slash at the end of the panel URL when you did set up the dash!
- Your api key has wrong permissions..
- Your api key is wrong!
- You did not follow the docs and you missed something
- You are using the same username / email as in pterodactyl panel (Please use something else for mythicaldash)
- Your connection is to slow to the panel
- You are using less than 1gb ram for MythicalDash or Pterodactyl
- Someone is DDoSing your pterodactyl panel

Remember if it was for the dash to not work other hosts would not work and this dash will not work:
- https://mythicaldash.mythicalsystems.xyz

So if you are sure that there is none of the listed method then you can proceed to ask us for help!


## Servers do not create

If the servers do not create here are some steps that you can take to fix!

1) Check if mythicaldash is in crontab: https://docs.mythicalsystems.xyz/docs/MythicalDash/install#crontab-configuration
2) Check the logs by just pressing (CTRL+D) on your keyboard! 
A popup should come, and you will have to enter this id: `106` and there just go to the latest page! And if the page is empty, that just means you did not do step one! Next you can ask support with the error from the cron so we can help you!


## What are the page ids i can use?
Where here is a list:

- `0`:  Logout `/auth/logout`
- `1`:  Dashboard `/dashboard`
- `2`:  Create a server `/server/create`
- `3`:  AFK `/earn/afk`
- `4`:  Redeem `/earn/redeem`
- `5`:  Linkvertise `/earn/linkvertise`
- `6`:  Store `/store`
- `7`:  Help Center `/help-center`
- `8`:  Tickets `/help-center/tickets`
- `9`:  Terms Of Service `/help-center/tos`
- `10`:  Privacy Policy `/help-center/pp`
- `11`:  Leaderboard `/leaderboard`
- `12`:  User List `/users/list`
- `13`:  Account `/user/list`
- `14`:  Connections `/user/connections`
- `15`:  Payments `/user/payments`

- `100`: Admin Overview - `/admin/overview`
- `101`: Admin Health - `/admin/health`
- `102`: Admin API - `/admin/api`
- `103`: Admin Users - `/admin/users`
- `104`: Admin Servers List - `/admin/servers/list`
- `105`: Admin Servers Queue List - `/admin/servers/queue/list`
- `106`: Admin Servers Queue Logs - `/admin/servers/queue/logs`
- `107`: Admin Redeem - `/admin/redeem`
- `108`: Admin Locations - `/admin/locations`
- `109`: Admin Eggs List - `/admin/eggs/list`
- `110`: Admin Eggs Config - `/admin/eggs/config`
- `111`: Admin Settings - `/admin/settings`
- `112`: Admin Tickets - `/admin/tickets`