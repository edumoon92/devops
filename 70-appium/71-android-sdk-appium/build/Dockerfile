# ====================================================================== #
# Android SDK Docker Image
# ====================================================================== #

# Base image
# ---------------------------------------------------------------------- #
FROM hcmoon92/devops:android-sdk-vnc-v0.9

RUN sdkmanager "platform-tools" "platforms;android-31" "build-tools;31.0.0"
RUN sdkmanager "platforms;android-13"