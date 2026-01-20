# iOS Installation Context & Instructions

## Current Status
The iOS version of Couplair is currently experimental and not available on the public Apple App Store. It is distributed for testing purposes within a local network environment using AltStore.

## Distribution Method: AltStore Server
To install and run the app on an iOS device, the following setup is currently required:

### Prerequisites
1.  **PC/Mac with AltServer Installed:** The host computer must be running AltServer.
2.  **iTunes & iCloud (Windows only):** Non-Microsoft Store versions of iTunes and iCloud must be installed.
3.  **Local Network Connection:** The iOS device and the computer running AltServer must be on the same Wi-Fi network to refresh the app signature (every 7 days).
4.  **Developer Mode:** The iOS device must have Developer Mode enabled.

### Installation Process (Draft Instructions)
1.  **Install AltStore:** Use AltServer on the computer to install the AltStore app onto the target iPhone/iPad.
2.  **Trust Developer Certificate:** On the iPhone, go to Settings > General > VPN & Device Management and trust the developer certificate associated with the Apple ID used.
3.  **Sideload Couplair:**
    *   Download the Couplair `.ipa` file (need to host this somewhere eventually).
    *   Open AltStore on the device.
    *   Tap the "+" icon and select the `.ipa` file.
    *   Keep AltServer running on the PC to complete the signing process.

### Limitations / " Why isn't it on the App Store? "
*   **Experimental Nature:** The app is in early proof-of-concept stage.
*   **Apple Restrictions:** Sideloading is the only way to distribute free unrestricted betas without TestFlight review delays or the $99/year Developer Program fee (initially).
*   **Expiration:** Apps signed with a free Apple ID expire every 7 days and must be refreshed via AltServer on the same Wi-Fi.

## Future Plans
*   Eventually move to TestFlight for easier beta testing.
*   Official App Store release once the app is stable and meets all guidelines.
