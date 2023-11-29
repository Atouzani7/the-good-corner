#Backend
FROM node:lts-alpine

RUN mkdir /app 
WORKDIR /app
COPY package.json ./ 
COPY tsconfig.json ./
COPY codegen.ts .
COPY src src
RUN npm i 

CMD npm start