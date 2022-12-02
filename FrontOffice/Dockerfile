# Declare the base image
FROM node:lts-alpine3.14
# Build step
WORKDIR /app

COPY package*.json /app/

# Install dependencies
RUN npm i
# Copy the source code to /app dir
COPY . /app/

FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf