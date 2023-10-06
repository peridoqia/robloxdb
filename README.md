# robloxdb
FOSS DataBase server via HTTPService GET requests for ROBLOX

## Limitations/Cons of this approach

Any and all scripts in a roblox game can be reverse-engineered, which means if you do use this then exploiters will have an easy way to download all of the data you have stored.
In addition, this approach will require that you host this server application manually, and if you experience any outages then it will be impossible to retrieve or send data.

Roblox's own DataStore partially fixes problem one by properly authenticating all read and write requests. And it fixes problem 2 since the outage responsibility is now Roblox's and not yours.

Those are the limitations of this approach, please only proceed if you accept these risks.

## How to setup

1. Install [nodejs](https://nodejs.org/en) and ensure that its available on the `PATH` (The installer should automatically do this for you)
2. Clone this repository and run `npm run`
3. Voila! You should by now know how to use robloxdb and also have a server setup.

It would be a wise idea to reverse-proxy this server application behind a reliable web server such as [nginx](https://nginx.org), [Caddy](https://caddyserver.com) or [Apache's httpd](https://httpd.apache.org), [read here on why this is a good idea](https://www.nginx.com/resources/glossary/reverse-proxy-server/)

It would also be a wise idea to setup SSL so that your requests to the server are encrypted. [certbot](https://certbot.eff.org/) is a great tool that automatically does this, and if you use the Caddy web server then it will be done automatically for you! 