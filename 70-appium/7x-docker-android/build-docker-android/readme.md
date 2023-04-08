```
docker run -it --rm -v $(pwd):/app android-sdk /bin/bash
```
```
docker run -it --rm -v $(pwd):/app android-sdk-vnc /bin/bash
```
---

Upgrade Gradle: 
- `gradle/wrapper/gradle-wrapper.properties` file and update the distributionUrl property to the latest Gradle version. Then, run the ./gradlew wrapper command to update the Gradle wrapper.

Downgrade the Android Gradle plugin: If you cannot upgrade your Gradle version, you can try downgrading the version of the Android Gradle plugin that you are using to a version that is compatible with your current Gradle version. To do this, you can modify the build.gradle file and update the com.android.tools.build:gradle dependency to a compatible version.

```
FROM openjdk:8-jdk-slim

# Install dependencies
RUN apt-get update && \
    apt-get install -y wget unzip && \
    rm -rf /var/lib/apt/lists/*

# Install Android SDK
ENV ANDROID_SDK_ROOT /opt/android-sdk-linux
RUN mkdir -p ${ANDROID_SDK_ROOT} && \
    wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -O /tmp/android.zip && \
    unzip /tmp/android.zip -d ${ANDROID_SDK_ROOT} && \
    rm /tmp/android.zip && \
    yes | ${ANDROID_SDK_ROOT}/tools/bin/sdkmanager --licenses && \
    ${ANDROID_SDK_ROOT}/tools/bin/sdkmanager "platform-tools" "build-tools;28.0.3" "platforms;android-28"

# Set up environment variables
ENV PATH ${PATH}:${ANDROID_SDK_ROOT}/platform-tools

# Create project directory and copy files
RUN mkdir /app
COPY . /app

# Start the build process
WORKDIR /app
CMD ./gradlew build
```

```bash
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
```

This Dockerfile installs OpenJDK as the base image, installs the necessary dependencies (curl, tar, bash) to download and install the Android SDK, and installs the necessary Android SDK components for building Android applications.

Next, it copies the project directory into the container, sets the working directory to the project directory, and runs the assembleDebug Gradle task to build the app.

Build the Docker image by running the following command in the terminal from the project directory:

```
docker build -t android-sdk .
```
This command builds a Docker image named my-android-app using the Dockerfile in the project directory.

Run the Docker container by running the following command in the terminal:

```
docker run -it --rm -v $(pwd):/app android-app-sdk /bin/bash
```
This command starts a Docker container from the my-android-app image, opens a Bash terminal in the container, and maps the current directory to the /app directory in the container.

Once inside the container, navigate to the project directory using the following command:

```
cd /app
```
Finally, run the following command to build the app inside the container:
```
./gradlew assembleDebug
```
This command builds the app using the assembleDebug Gradle task.

After the build is complete, you can find the built APK file in the app/build/outputs/apk/debug/ directory
