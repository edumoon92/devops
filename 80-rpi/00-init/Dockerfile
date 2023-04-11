# Use an official Ubuntu as a parent image
FROM ubuntu:18.04

# Update the package repository
RUN apt-get update && apt-get upgrade -y

# Install QEMU to allow emulation of ARM on x86
RUN apt-get install -y qemu-user-static

# Set the working directory
WORKDIR /app

# Copy the Raspberry Pi x86 image into the container
COPY retropie-x86_64-4.6.1.img.gz .

# Unzip the Raspberry Pi x86 image
RUN gunzip retropie-x86_64-4.6.1.img.gz

# Set the entrypoint to run QEMU with the Raspberry Pi image
ENTRYPOINT ["/usr/bin/qemu-arm-static", "-cpu", "arm1176", "-m", "256", "-M", "versatilepb", "-no-reboot", "-serial", "stdio", "-append", "root=/dev/sda2", "retropie-x86_64-4.6.1.img"]