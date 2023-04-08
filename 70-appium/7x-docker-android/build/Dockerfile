# Base image
FROM openjdk:8-jdk-alpine

# Define environment variables
ENV ANDROID_HOME /opt/android-sdk-linux
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

# Install dependencies
RUN apk add --no-cache curl tar bash

# Download and install Android SDK
RUN cd /opt && \
    curl -o sdk-tools-linux.zip https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip && \
    unzip sdk-tools-linux.zip && \
    rm sdk-tools-linux.zip && \
    mkdir -p ${ANDROID_HOME}/licenses && \
    echo 8933bad161af4178b1185d1a37fbf41ea5269c55 > ${ANDROID_HOME}/licenses/android-sdk-license && \
    echo d56f5187479451eabf01fb78af6dfcb131a6481e >> ${ANDROID_HOME}/licenses/android-sdk-license && \
    echo 24333f8a63b6825ea9c5514f83c2829b004d1fee > ${ANDROID_HOME}/licenses/android-sdk-preview-license && \
    yes | ${ANDROID_HOME}/tools/bin/sdkmanager --licenses && \
    ${ANDROID_HOME}/tools/bin/sdkmanager --update && \
    ${ANDROID_HOME}/tools/bin/sdkmanager "build-tools;30.0.3" "platforms;android-30" "extras;android;m2repository" "extras;google;m2repository"

# Copy the project directory into the container
COPY . /app

# Set the working directory
WORKDIR /app

# Build the app
RUN ./gradlew assembleDebug
