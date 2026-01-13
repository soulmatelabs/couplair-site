import React from 'react';
import { AndroidPhase1, AndroidPhase2, AndroidPhase3 } from '../components/AndroidInstallPhases';

export default function AndroidInstallGuide() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How to Install on Android <span className="text-primary">(Beta)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Install Couplair directly on your Android device in just a few taps.
          </p>
        </div>

        <div className="space-y-12">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <AndroidPhase1 />
           </div>
           
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <AndroidPhase2 />
           </div>
           
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20">
              <AndroidPhase3 />
           </div>
        </div>
      </div>
    </div>
  );
}
