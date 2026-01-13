import React from 'react';

export const Phase2 = ({ os }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-primary">Phase 2: Install AltStore to Your Phone</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>Connect your iPhone to your computer via USB.</li>
        <li>Unlock your iPhone and tap <strong>"Trust"</strong> if prompted.</li>
        <li>
          On your Computer:
          <div className="ml-6 p-3 bg-secondary/10 rounded-md mt-2">
            {os === 'windows' ? (
              <p>Click the diamond icon in the system tray &gt; <strong>Install AltStore</strong> &gt; <strong>[Your Phone's Name]</strong>.</p>
            ) : (
              <p>Click the diamond icon in the menu bar &gt; <strong>Install AltStore</strong> &gt; <strong>[Your Phone's Name]</strong>.</p>
            )}
          </div>
        </li>
        <li>Enter your Apple ID and Password when prompted. <span className="text-sm text-gray-500 italic">(Note: This is sent only to Apple to create a free signing certificate).</span></li>
        <li>Wait a few seconds. An app called <strong>AltStore</strong> will appear on your iPhone home screen.</li>
      </ol>
    </div>
  );
};

export const Phase3 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 3: Trust & Developer Mode (On iPhone)</h3>
    <p className="text-gray-700">Before AltStore will open, you must enable permissions.</p>
    
    <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary/20">
            <h4 className="font-bold text-lg mb-2">1. Trust the App</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                <li>Go to <strong>Settings &gt; General &gt; VPN & Device Management</strong>.</li>
                <li>Tap your Apple ID email.</li>
                <li>Tap <strong>Trust [Your Email]</strong>.</li>
            </ol>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary/20">
            <h4 className="font-bold text-lg mb-2">2. Enable Developer Mode (iOS 16+)</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                <li>Go to <strong>Settings &gt; Privacy & Security</strong>.</li>
                <li>Scroll to the bottom and tap <strong>Developer Mode</strong>.</li>
                <li>Toggle it <strong>ON</strong>.</li>
                <li>Your phone will restart. After it turns on, unlock it and tap <strong>Turn On</strong> in the popup window.</li>
            </ol>
        </div>
    </div>
  </div>
);

export const Phase4 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 4: Install the App File</h3>
    <p className="text-gray-700">You are now ready to install the app using the .ipa file provided via Google Drive. <strong>Important:</strong> You must have the <strong>Google Drive app</strong> installed on your iPhone.</p>
    
    <div className="space-y-4">
        <div>
            <h4 className="font-bold text-lg text-gray-800">Download from Drive:</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-4">
                <li>Tap this link: <a href="https://drive.google.com/file/d/1ahkDOq0IgDUSovdtTzL8h77N7GicOFzX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary underline"><strong>couplair.ipa</strong></a>.</li>
                <li>If prompted, tap <strong>Open in Drive</strong> (or "Open App"). If it opens in Safari, tap <strong>Download</strong> or the "Open in..." button until you are viewing the file in the Drive app.</li>
                <li>Tap the three dots (<strong>...</strong>) next to the file name (or top right).</li>
                <li>Tap <strong>Open In</strong>.</li>
                <li>Scroll down and tap <strong>Save to Files</strong>.</li>
                <li>Select <strong>On My iPhone</strong> and tap <strong>Save</strong>.</li>
            </ol>
        </div>

        <div>
            <h4 className="font-bold text-lg text-gray-800">Install in AltStore:</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-4">
                <li>Open the <strong>AltStore</strong> app on your phone.</li>
                <li>Go to the <strong>My Apps</strong> tab.</li>
                <li>Tap the <strong>+</strong> icon (top left).</li>
                <li>Select the <strong>couplair.ipa</strong> file you just saved.</li>
                <li>If asked, sign in with your Apple ID again.</li>
                <li>Wait for the progress bar to finish. The app will appear in your list and on your home screen!</li>
            </ol>
        </div>
    </div>
  </div>
);

export const Phase5 = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-primary">Phase 5: Keeping the App Working</h3>
    
    <div className="space-y-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-bold text-lg text-yellow-800 mb-2">How Refreshing Works</h4>
            <p className="text-gray-700">The app (and AltStore itself) expires every <strong>7 days</strong>. You must "Refresh" them before they expire.</p>
        </div>

        <div>
            <h4 className="font-bold text-lg text-gray-800">Option A: Automatic Refresh over Wi-Fi (Recommended)</h4>
            <p className="text-sm text-gray-600 mb-2">For this to work, you must enable Wi-Fi sync once:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-4">
                <li>Connect your iPhone to your computer via USB.</li>
                <li>Open <strong>iTunes</strong> (Windows) or <strong>Finder</strong> (Mac).</li>
                <li>Click your iPhone icon. <i>(A tiny phone icon located in the corner between the sidebar that lists your device and top bar that contains File, Edit, Song, etc.)</i></li>
                <li>Scroll down to "Options" and check <strong>Sync with this iPhone over Wi-Fi</strong>.</li>
                <li>Click <strong>Apply</strong> or <strong>Sync</strong>.</li>
            </ol>
            <p className="text-sm text-gray-600 mt-2">Now, whenever your computer (with AltServer running) and iPhone are on the same Wi-Fi, AltStore will try to refresh automatically. You can also manually open AltStore and tap <strong>Refresh All</strong>.</p>
        </div>

        <div>
            <h4 className="font-bold text-lg text-gray-800">Option B: Refresh via USB (If Expired)</h4>
            <p className="text-sm text-gray-600 mb-2">If you forgot to refresh and the app won't open, follow these steps:</p>
            
            <h5 className="font-semibold text-gray-700 mt-2 ml-4">Situation 1: AltStore Still Opens</h5>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-8">
                <li>Connect your iPhone to the computer via USB.</li>
                <li>Make sure AltServer is running on the computer.</li>
                <li>Open <strong>AltStore</strong> on your phone.</li>
                <li>Tap <strong>Refresh All</strong>.</li>
            </ol>

            <h5 className="font-semibold text-gray-700 mt-2 ml-4">Situation 2: AltStore Itself Expired (Won't Open)</h5>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-8">
                <li>Connect your iPhone to the computer via USB.</li>
                <li>Repeat <strong>Phase 2</strong> (Install AltStore) from your computer.</li>
                <li>This will "revive" AltStore without losing your data.</li>
                <li>Once AltStore opens, go in and tap <strong>Refresh All</strong> to fix the Couplair app.</li>
            </ol>
        </div>
    </div>
  </div>
);
