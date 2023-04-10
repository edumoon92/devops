FROM hcmoon92/devops:ubuntu-desktop-lxde-vnc-node16-code-git-mocha-java8-v0.8

WORKDIR /home/henry/work

COPY package*.json ./
COPY nightwatch.conf.js ./

RUN npm install

CMD ["npx", "nightwatch"]