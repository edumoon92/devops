FROM node:14

# Build Tool
RUN apt update \
    && apt install -y g++ build-essential 

# bash install
RUN apt install -y bash wget

# Language
ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8

# Set the timezone in docker
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata

# Create Directory for the Container
WORKDIR /app

# Only copy the package.json file to work directory
COPY saucedemo/package*.json ./
RUN npm install

# wait-for-it.sh
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
# COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# Docker Demon Port Mapping
EXPOSE 3000

# Node ENV
ENV NODE_ENV=production