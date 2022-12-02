# Start Docker image
cd ./FrontOffice
docker build -t front-office:1.0 .

docker run -p 80:3000 prueba