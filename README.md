MUSICROOM PROJECT
=========================

## Description of the project :

A Spotify like music mobile application

## Team 
- Abdeljalil NACEUR **contact@naceur-abdeljalil.com**
- Adrien Dacher **adr.dacher@gmail.com**
- Sylvain Boeuf **sylvainboeuf@gmail.com**


## Technologies :
 - NodeJs/Express v12.11.4
 - MongoDb
 - Docker 17.12.1-ce
 - React-native

## Screenshots

## Git flow
There are two branches:
 - Master - origin
 - Staging - Folow Master
 - Develop - follow Staging

The *Master* branch is used for production. Only the features we know are perfectly working should be merged on *Master* 
The *Staging* branch is were the cross testing are made before merging the master branch.
The *Develop* branch is where new features are developped.

## Git Commit messages guidlines

Commit messages should conform to the following rules:  
	- Title in capital letters  
	- The title is separated from the body of the message by one empty line  
	- A line should not be longer than 80 characters  
	- The message must focus on the WHY and WHAT, not HOW.  
  
This template can be used for the commit messages:  

> COMMIT MESSAGE TITLE
> 
> Here, I explain WHAT I did (the improvements I made to the code, what I removed
> from it, etc...)
> I alos explain WHY I did it.
  

## Install the development environment

#### Prerequisite :
 - NodeJs >= v11
 - Docker 17.12.1-ce
 - Docker compose
 - Port 3000/5000 open/not occupied

Get the source:

```bash
git clone https://me-me@bitbucket.org/me-me/musicroom42.git
```

Edit your `/etc/hosts` file:

```
127.0.0.1   api.local.musicroom.io
127.0.0.1   app.local.musicroom.io
127.0.0.1   db.local.musicroom.io
```

## Build the project in dev

Within the root folder copy the environment variables

```bash
cp .env-template .env
```

Navigate to server

```bash
cd server
```

Copy the env variables for developement environment

```bash
cp .env-template .env
```

Within the server path create a new foldder (if it does not exist)

```bash
mkdir uploads
```

Install dependencies of the server
```
npm i
```

Now navigate to client folder
Copy the env variables for developement environment
```
cp .env-template .env
```

Install dependencies of the client
```
npm i
```

Go back to the root folder and
build the project from the root directory
```bash
docker-compose up --build
```

### Help

Stop and remove all containers

```bash
docker stop $(docker ps -a -q)
```

Connect to a container via bash (get the container name you want to connect to via command `docker ps`)
```bash
docker exec -ti containername bash
```

Execute a command directly in a container without connecting in bash (get the container name you want to connect to via command `docker ps`)

```bash
docker exec -i containername yourcommand
```

Delete all images 

```bash
docker rmi -f $(docker images -q)
```

Show images 

```bash
docker images
```

if you face this error message :
"Error: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by /usr/src/app/node_modules/bcrypt/lib/binding/bcrypt_lib.node)"

Cause : bcrypt is lib is not compatible.
Solution : To avoid this error do the following

```bash
# Connect to your container server
docker exec -ti <container-name> bash

# Delete node_modules
rm -rf node_modules

# Re-install the packages
npm install
```

## FAQ

Error on your Android device :
```
Invalid varaition
```
Solution empty the cache
```
expo r -c
```

Error :
ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network

Solution :
docker network rm $(docker network ls | grep "bridge" | awk '/ / { print $1 }')

If on starting the containners in production mode 
you face an error of refused connection to mongodb container then :

Solution : change the DB_HOST in server/.env to localhost
Restart the containers.

If the error persiste then fetch the IpAddress of the mongo container 

```bash
# Connect to your container server
docker inspect [container_name]  | grep IPAddress | tail -1 | cut -d '"' -f4
```
Replace this Ip addresse in your container and restart docker.