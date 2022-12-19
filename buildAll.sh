#!/bin/bash

echo "--------------------[ Docker ]------------------------"

docker-compose up -d
# ERROR: strconv.Atoi: parsing "": invalid syntax
# SOLUTION: docker-compose down --remove-orphans
docker ps
# docker exec -it officemanager-dev-1 sh