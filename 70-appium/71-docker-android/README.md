
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
