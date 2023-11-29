#Fronend
# FROM node:lts-alpine
FROM node:16-alpine

RUN mkdir /app 
WORKDIR /app
COPY package.json ./ 
RUN npm i 
COPY tsconfig.json ./

COPY codegen.ts .
COPY src src
COPY next.config.js .
COPY tsconfig.json . 

CMD npm run dev