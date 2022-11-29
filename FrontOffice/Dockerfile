# STEP 1 BUILD OF REACT PROJECT
FROM node:12-alpine3.12 AS build

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm i

RUN npm i --production

EXPOSE 3000

CMD ["npm", "run", "dev"]
COPY . .
RUN npm run build