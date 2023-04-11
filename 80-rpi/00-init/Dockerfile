# Use an official Ubuntu as a parent image
FROM ubuntu:18.04

# Update the package repository
RUN apt-get update && apt-get upgrade -y

# Install QEMU to allow emulation of ARM on x86
RUN apt-get install -y qemu-user-static

# Download the Raspberry Pi image for x86
RUN mkdir /qemu
WORKDIR /qemu
RUN wget https://github.com/retropie/retropie-setup/releases/download/4.6.1/retropie-x86_64-4.6.1.img.gz
RUN gunzip retropie-x86_64-4.6.1.img.gz

# Copy the QEMU binaries into the container
COPY qemu-arm-static /usr/bin/qemu-arm-static

# Set the entrypoint to run QEMU with the Raspberry Pi image
ENTRYPOINT ["/usr/bin/qemu-arm-static", "-cpu", "arm1176", "-m", "256", "-M", "versatilepb", "-no-reboot", "-serial", "stdio", "-append", "root=/dev/sda2", "/qemu/retropie-x86_64-4.6.1.img"]