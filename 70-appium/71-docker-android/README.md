
## Android Studio Install
```
apt-get install software-properties-common
add-apt-repository ppa:maarten-fonville/android-studio
apt install android-studio
```

## Docker Compose
```
docker-compose up 
```

---

How to run emulator
Check available emulator system images from remote SDK repository


```
sdkmanager --list --verbose
```

Make sure that the required SDK packages are installed, you can find out by above command. To install, use the command below. Whenever you see error complains about ANDROID_SDK_ROOT, such as PANIC: Cannot find AVD system path. Please define ANDROID_SDK_ROOT or PANIC: Broken AVD system path. Check your ANDROID_SDK_ROOT value, it means that you need to install following packages.

```
sdkmanager "platform-tools" "platforms;android-<api_level>" "emulator"
```
Download emulator system image(s) (on the host machine)

```
sdkmanager "system_image_1" "system_image_2"
# e.g.:
# system-images;android-24;android-tv;x86
# system-images;android-24;default;arm64-v8a
# system-images;android-24;default;armeabi-v7a
# system-images;android-24;default;x86
# system-images;android-24;default;x86_64
# system-images;android-24;google_apis;arm64-v8a
# system-images;android-24;google_apis;armeabi-v7a
# system-images;android-24;google_apis;x86
# system-images;android-24;google_apis;x86_64
# system-images;android-24;google_apis_playstore;x86
```
Run Docker container in privileged mode (not necessary for ARM emulator)

```
echo "no" | avdmanager create avd -n <name> -k <sdk_id>
# e.g.:
echo "no" | avdmanager create avd -n test -k "system-images;android-24;default;armeabi-v7a"
```
List existing Android Virtual Devices

```
avdmanager list avd

# ==================================================
Available Android Virtual Devices:
    Name: test
    Path: /root/.android/avd/test.avd
  Target: Default Android System Image
          Based on: Android 7.0 (Nougat) Tag/ABI: default/armeabi-v7a
# ==================================================

# or
emulator -list-avds
```

Launch emulator in background

```
emulator -avd <virtual_device_name> -no-audio -no-boot-anim -no-window -accel on -gpu off &

# if the container is not running in privileged mode, you should see below errors:
#=> emulator: ERROR: x86_64 emulation currently requires hardware acceleration!
#=> Please ensure KVM is properly installed and usable.
#=> CPU acceleration status: /dev/kvm is not found: VT disabled in BIOS or KVM kernel module not loaded
# or it's running on top of a VM
#=> CPU acceleration status: KVM requires a CPU that supports vmx or svm
```

Check the virtual device status

```
adb devices
# ==================================================
List of devices attached
emulator-5554	offline
# "offline" means it's still booting up
# ==================================================

# ==================================================
List of devices attached
emulator-5554	device
# "device" means it's ready to be used
# ==================================================
```
Now you can for instance run UI tests on the emulator (just remember, the performance is POOR):

```
<your_android_project>/gradlew connectedAndroidTest
```

---

Upgrade Gradle: 
- `gradle/wrapper/gradle-wrapper.properties` file and update the distributionUrl property to the latest Gradle version. Then, run the ./gradlew wrapper command to update the Gradle wrapper.

Downgrade the Android Gradle plugin: If you cannot upgrade your Gradle version, you can try downgrading the version of the Android Gradle plugin that you are using to a version that is compatible with your current Gradle version. To do this, you can modify the build.gradle file and update the com.android.tools.build:gradle dependency to a compatible version.

## build command
```
# Start the build process
WORKDIR /app

CMD ./gradlew build

# Build the app
RUN ./gradlew assembleDebug
```

```
cd /app
```
Finally, run the following command to build the app inside the container:
```
./gradlew assembleDebug
or
./gradlew build
```
- outputs
```
app/build/outputs/apk/debug/ directory
```

## References
- docker-android
https://github.com/budtmo/docker-android
- android sdk
https://github.com/thyrlian/AndroidSDK
