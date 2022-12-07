#!/bin/bash

echo "--------------------[ Docker ]------------------------"

docker-compose up
docker ps
docker images -a