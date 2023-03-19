FROM node:14-alpine

WORKDIR /app

COPY hello-nodejs/ ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]