#!/bin/sh

# Stops all docker processes and containers
#  Deletes all images and volumes
echo -n "Are you sure (y/n)? "
read answer
if echo "$answer" | grep -iq "^y" ;then
    echo "Deleting ALL things Docker!"
    # Stop all containers
    docker stop $(docker ps -a -q)
    # Delete all containers
    docker rm $(docker ps -a -q)
    # Delete all images
    # docker rmi $(docker images -q)
    # Delete all docker volumes!!!
    docker volume rm $(docker volume ls)
else
    echo "Action Aborted! "
fi
