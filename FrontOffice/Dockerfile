# RUN apt-get update && apt-get install -y nginx:1.22.1 && npm install --silent --no-cache

FROM node:16.17.1-buster-slim as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH="/app/node_modules/.bin:${PATH}"

RUN apt-get update && npm install --silent --no-cache

# install app dependencies
COPY package*.json ./

# add app
COPY . ./ 

# Build app
RUN npm run build


# production environment
FROM nginx:1.22.1

RUN apt-get update && apt-get install -y nginx:1.22.1 --silent --no-cache

COPY --from=builder /app/dist /usr/share/nginx/html  

# Gzip
# COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]