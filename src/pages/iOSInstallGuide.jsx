import React, { useState } from 'react';
import { Phase2, Phase3, Phase4, Phase5 } from '../components/iOSInstallPhases';

export default function IOSInstallGuide() {
  const [selectedOS, setSelectedOS] = useState(null);

  const handleOSSelect = (os) => {
    setSelectedOS(os);
    // Smooth scroll to instructions if needed, or just let it render
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div 
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How to Install the App <span className="text-primary">(Beta)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Since this app is currently in beta, you will need to "sideload" it using a safe tool called AltStore. 
            This requires a computer and your iPhone charging cable.
          </p>
        </div>

        {/* OS Selector */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-secondary/20">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Phase 1: Computer Setup</h2>
          <p className="text-center text-gray-600 mb-8">Choose your computer operating system to see the correct instructions:</p>
          
          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleOSSelect('windows')}
              className={`flex flex-col items-center justify-center p-6 w-40 h-40 rounded-xl border-2 transition-all duration-300 ${
                selectedOS === 'windows' 
                  ? 'border-primary bg-primary/5 shadow-md scale-105' 
                  : 'border-gray-200 hover:border-secondary hover:shadow-md'
              }`}
            >
              <span className="text-4xl mb-3">🖥️</span>
              <span className={`font-bold ${selectedOS === 'windows' ? 'text-primary' : 'text-gray-700'}`}>Windows</span>
            </button>
            
            <button
              onClick={() => handleOSSelect('macos')}
              className={`flex flex-col items-center justify-center p-6 w-40 h-40 rounded-xl border-2 transition-all duration-300 ${
                selectedOS === 'macos' 
                  ? 'border-primary bg-primary/5 shadow-md scale-105' 
                  : 'border-gray-200 hover:border-secondary hover:shadow-md'
              }`}
            >
              <span className="text-4xl mb-3">🍎</span>
              <span className={`font-bold ${selectedOS === 'macos' ? 'text-primary' : 'text-gray-700'}`}>macOS</span>
            </button>
          </div>
        </div>

        {/* Dynamic Instructions */}
        {selectedOS && (
          <div
            key={selectedOS}
            className="space-y-12"
          >
            {/* Phase 1 Detail */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-bold text-primary">Setup for {selectedOS === 'windows' ? 'Windows' : 'macOS'}</h3>
                {selectedOS === 'windows' && <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Step 1 of 5</span>}
                {selectedOS === 'macos' && <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Step 1 of 5</span>}
              </div>

              {/* Windows Instructions */}
              {selectedOS === 'windows' && (
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="font-bold text-red-700">Important:</p>
                    <p className="text-red-600">You cannot use the version of iTunes or iCloud from the Microsoft Store. You must use the direct "classic" versions.</p>
                    <p className="text-red-600 mt-2">Please <strong>uninstall</strong> any versions of iTunes or iCloud you currently have installed before proceeding.</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">1. Download Required Files</h4>
                    <p className="text-sm text-gray-500 italic">
                      Disclaimer: The direct links below are provided for your convenience and were extracted directly from the official AltStore website.
                    </p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <a 
                        href="https://www.apple.com/itunes/download/win64" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-bold text-primary">Download iTunes</span>
                        <span className="text-sm text-gray-500">Windows (64-bit)</span>
                      </a>
                      
                      <a 
                        href="http://updates-http.cdn-apple.com/2020/windows/001-39935-20200911-1A70AA56-F448-11EA-8CC0-99D41950005E/iCloudSetup.exe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-bold text-primary">Download iCloud</span>
                        <span className="text-sm text-gray-500">Direct Apple Link</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">2. Install AltServer</h4>
                    <p className="text-gray-600">First, restart your computer after installing iTunes and iCloud.</p>
                    
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                      <p className="mb-4 text-gray-700">Get AltServer from the official website (Recommended):</p>
                      <a 
                        href="https://altstore.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg"
                      >
                        Visit altstore.io
                      </a>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Or use direct download (if site is down):</p>
                        <a 
                          href="https://cdn.altstore.io/file/altstore/altinstaller.zip"
                          className="text-primary hover:underline font-medium"
                        >
                          Download AltServer for Windows
                        </a>
                      </div>
                    </div>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                        <li>Extract the downloaded folder and run <strong>Setup.exe</strong>.</li>
                        <li>Launch <strong>AltServer</strong> from your Start menu (Right-click and <strong>Run as Administrator</strong> if possible).</li>
                        <li><em>Note: It will appear as a small diamond icon in your bottom-right system tray.</em></li>
                    </ul>

                     <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-bold text-gray-700 mb-2">Need a visual guide?</h5>
                        <a 
                            href="https://www.youtube.com/watch?v=IXymBZTl8lQ" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-2"
                        >
                            <span>📺 Watch AltStore Installation Guide on YouTube</span>
                        </a>
                     </div>
                  </div>
                </div>
              )}

              {/* Mac Instructions */}
              {selectedOS === 'macos' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">1. Download & Install AltServer</h4>
                    
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                      <p className="mb-4 text-gray-700">Get AltServer from the official website (Recommended):</p>
                      <a 
                        href="https://altstore.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg"
                      >
                        Visit altstore.io
                      </a>
                       <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Or use direct download:</p>
                        <a 
                          href="https://cdn.altstore.io/file/altstore/altserver.zip"
                          className="text-primary hover:underline font-medium"
                        >
                          Download AltServer for macOS
                        </a>
                      </div>
                    </div>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                        <li>Unzip the file and move <strong>AltServer</strong> to your <strong>Applications</strong> folder.</li>
                        <li>Launch <strong>AltServer</strong>. It will appear as a diamond icon in the top menu bar.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">2. Install Mail Plug-in</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Click the AltServer icon &gt; <strong>Install Mail Plug-in</strong>.</li>
                        <li>Open the <strong>Mail</strong> app on your Mac.</li>
                        <li>Go to <strong>Mail &gt; Settings</strong> (or Preferences) &gt; <strong>General</strong> &gt; <strong>Manage Plug-ins</strong>.</li>
                        <li>Check the box for <strong>AltPlugin.mailbundle</strong> and click <strong>Apply</strong>.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Common Phases */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <Phase2 os={selectedOS} />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <Phase3 />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <Phase4 />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <Phase5 />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}