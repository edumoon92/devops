FROM openjdk:11-jdk-slim

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
