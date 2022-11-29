dotenv () {
  set -a
  [ -f .env ] && . .env
  set +a
}

dotenv

# UPLOAD IMAGES TO DOCKER HUB

docker login -u $DOCKER_USER -p $DOCKER_PASSWORD

docker build ./FrontOffice -t $DOCKER_USER/ReactOffice:latest

docker build ./nginx -t $DOCKER_USER/NginxOffice:latest

docker push $DOCKER_USER/ReactOffice:latest

docker push $DOCKER_USER/NginxOffice:latest