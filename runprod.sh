#!/bin/sh
clear

# builds and runs production environment using Docker Compose
docker-compose build && docker-compose up
