import React from 'react';

export const AndroidPhase1 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 1: Download the APK</h3>
    <p className="text-gray-700">
      You need to download the installation file (APK) directly to your Android device.
    </p>
    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
       <p className="mb-4 text-gray-700">Download the latest version:</p>
       <a
         href="#" /* PLACEHOLDER: REPLACE WITH ACTUAL GOOGLE DRIVE LINK */
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg"
         onClick={(e) => {
            if (e.currentTarget.getAttribute('href') === '#') {
                e.preventDefault();
                alert("Download link coming soon!");
            }
         }}
       >
         Download Couplair APK
       </a>
       <p className="text-sm text-gray-500 mt-4">
         (Link currently hosted on Google Drive)
       </p>
    </div>
  </div>
);

export const AndroidPhase2 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 2: Allow Installation</h3>
    <p className="text-gray-700">
      Since this app is not yet on the Play Store, your phone will ask for permission to install it.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-gray-700">
      <li>Tap the notification for the completed download, or find the file in your <strong>Downloads</strong> folder/app.</li>
      <li>Tap to open the <strong>.apk</strong> file.</li>
      <li>
        You will likely see a popup saying your phone is not allowed to install unknown apps from this source.
        <div className="ml-6 p-3 bg-secondary/10 rounded-md mt-2">
            Tap <strong>Settings</strong> on the popup &gt; Toggle <strong>Allow from this source</strong> to <strong>ON</strong>.
        </div>
      </li>
      <li>Tap <strong>Back</strong> to return to the installation screen.</li>
    </ol>
  </div>
);

export const AndroidPhase3 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 3: Install & Launch</h3>
    <ol className="list-decimal list-inside space-y-2 text-gray-700">
      <li>Tap <strong>Install</strong> at the bottom of the screen.</li>
      <li>Wait for the installation to finish.</li>
      <li>Tap <strong>Open</strong> to start Couplair!</li>
    </ol>
     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
        <h4 className="font-bold text-yellow-800">Note regarding Google Play Protect</h4>
        <p className="text-sm text-yellow-700 mt-1">
            You might see a warning from Google Play Protect saying "Unrecognized app developer". This is normal for beta apps not on the Play Store. You can tap <strong>More details</strong> &gt; <strong>Install anyway</strong>.
        </p>
    </div>
  </div>
);
