FROM hcmoon92/devops:ubuntu-desktop-lxde-vnc-node16-code-git-mocha-java8-v0.8

WORKDIR /home/henry/app

COPY package*.json ./
RUN npm install

COPY work .

CMD ["npx", "nightwatch"]