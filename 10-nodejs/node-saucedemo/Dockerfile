FROM node:14

# Build Tool
RUN apt update \
    && apt-get install -y g++ build-essential 

# bash install
RUN apt-get install -y bash wget

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
COPY saucedemo ./saucedemo
RUN cd saucedemo && npm install

# Docker Demon Port Mapping
EXPOSE 3000

# Node ENV
ENV NODE_ENV=production