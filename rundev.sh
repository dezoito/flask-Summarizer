#!/bin/sh
clear

# builds and runs dev environment using Docker Compose
docker-compose -f dev.yml build && docker-compose -f dev.yml up

