# ====================================================================== #
# Android SDK Docker Image
# ====================================================================== #

# Base image
# ---------------------------------------------------------------------- #
FROM hcmoon92/devops:android-sdk-vnc-v0.9

RUN sdkmanager "platform-tools" "platforms;android-31" "build-tools;31.0.0"
RUN sdkmanager "platforms;android-13"

RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs
RUN npm install -g appium
