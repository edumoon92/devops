FROM node:14

WORKDIR /home/henry/app

COPY package*.json ./
RUN npm install

COPY work .

CMD ["npx", "nightwatch"]