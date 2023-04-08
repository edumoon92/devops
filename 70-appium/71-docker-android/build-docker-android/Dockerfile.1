FROM openjdk:11-jdk-slim

RUN apt-get update && \
    apt-get install -y curl unzip && \
    rm -rf /var/lib/apt/lists/*

RUN curl -o /tmp/android-sdk.zip https://dl.google.com/android/repository/commandlinetools-linux-latest.zip && \
    mkdir -p /opt/android-sdk/cmdline-tools && \
    unzip /tmp/android-sdk.zip -d /opt/android-sdk/cmdline-tools && \
    rm /tmp/android-sdk.zip

ENV ANDROID_HOME=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_HOME/cmdline-tools/tools:$ANDROID_HOME/cmdline-tools/tools/bin:$ANDROID_HOME/platform-tools

RUN yes | $ANDROID_HOME/cmdline-tools/tools/bin/sdkmanager --licenses && \
    $ANDROID_HOME/cmdline-tools/tools/bin/sdkmanager "platforms;android-31" "build-tools;31.0.0"

# Create project directory and copy files
RUN mkdir /app
COPY . /app

# Start the build process
WORKDIR /app
CMD ./gradlew build
