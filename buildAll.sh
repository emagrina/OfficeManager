#!/bin/bash

echo "+------------------------------------------------------+"
echo "|                      Docker                          |"
echo "+------------------------------------------------------+"

docker-compose up
docker ps
docker images -a