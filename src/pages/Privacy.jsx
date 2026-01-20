export default function Privacy() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy for Couplair</h1>
          <p className="mt-4 text-lg text-gray-500">Last Updated: January 4, 2026</p>
        </div>
        
        <div className="mt-12 prose prose-pink prose-lg text-gray-700 mx-auto">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Couplair</strong> ("we," "our," or "us"), operated by <strong>SoulMate Labs</strong>. We are committed to protecting your privacy and adhering to strict data minimization principles. This Privacy Policy explains how we handle your information when you use our mobile application (the "App").
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect only the minimum data necessary to function.
          </p>

          <h3>A. Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Credentials:</strong>
              <ul>
                <li><strong>Anonymous Users:</strong> We generate a random, anonymous User ID.</li>
                <li><strong>Registered Users:</strong> If you opt-in for account recovery, we collect your email and a securely hashed password.</li>
              </ul>
            </li>
            <li><strong>Profile & Status:</strong> Your nickname and real-time availability status ("Available"/"Unavailable") and duration.</li>
          </ul>

          <h3>B. Automatically Collected Data</h3>
          <ul>
            <li><strong>Server Logs:</strong> IP addresses, app version, and timestamps. We collect this strictly for security monitoring (e.g., detecting brute-force attacks) and are automatically rotated.</li>
            <li><strong>Telemetry:</strong> Anonymous data on feature usage (e.g., "Status Updated") to help us improve the App.</li>
          </ul>

          <h2>3. Sideloading and Unofficial Sources (Liability Shield)</h2>
          <p>
            <strong>Warning:</strong> The App may be available via direct download (APK/Sideloading).
          </p>
          <ul>
            <li><strong>Integrity:</strong> We cannot guarantee the safety of App files downloaded from third-party websites.</li>
            <li><strong>Liability:</strong> We are <strong>not liable</strong> for data breaches, malware, or privacy leaks resulting from the use of modified, cracked, or unofficial versions of the App. This Policy applies only to the official, signed APK provided by SoulMate Labs.</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use the collected data for the following specific purposes:</p>
          <ul>
            <li><strong>Core Service:</strong> To sync your availability status with your connected partner in real-time.</li>
            <li><strong>Account Security:</strong> To authenticate your login and manage your connection to your partner.</li>
            <li><strong>Platform Stability:</strong> To monitor server health, detect bots, and prevent DDoS attacks.</li>
            <li><strong>Communication:</strong> To send transactional emails (only if you registered an email) regarding password resets or security alerts.</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <ul>
            <li><strong>Contractual Necessity:</strong> Processing required to deliver the App's features (syncing status).</li>
            <li><strong>Legitimate Interest:</strong> Processing required to secure the infrastructure and improve the App.</li>
          </ul>

          <h2>6. Data Retention Policy</h2>
          <p>
            We do not retain your data indefinitely.
          </p>
          <ul>
            <li><strong>Active Accounts:</strong> Retained while the account is in good standing.</li>
            <li><strong>Deleted Accounts:</strong> If you use the "Delete Account" button, your data is wiped from the production database immediately.</li>
            <li><strong>Inactive Accounts:</strong> To minimize liability, accounts that have been inactive for <strong>12 months</strong> are permanently deleted.</li>
          </ul>

          <h2>7. Data Storage and Transfers</h2>
          <p>
            <strong>Hosting:</strong> Our backend is powered by <strong>Supabase</strong>.
          </p>
          <p>
            <strong>International Transfer:</strong> Your data may be processed on servers located outside your country of residence (including the US or EU). By using the App, you consent to this transfer, acknowledging that foreign jurisdictions may have different data access laws.
          </p>

          <h2>8. Disclosure to Law Enforcement</h2>
          <p>
            We strictly protect your data from third-party intrusion. We will <strong>not</strong> disclose user data to government agencies or law enforcement unless:
          </p>
          <ol>
            <li>We are compelled by a <strong>valid, binding court order</strong> or subpoena from a jurisdiction with authority over SoulMate Labs; AND</li>
            <li>We have verified the legitimacy of the request.</li>
          </ol>
          <p>
            Unless prohibited by law (e.g., a gag order), we will attempt to notify you before disclosing your data.
          </p>

          <h2>9. Sharing Your Information</h2>
          <p>We do <strong>not</strong> sell, rent, or trade your personal data.</p>
          <ul>
            <li><strong>With Partners:</strong> Your status is shared <em>only</em> with the specific user you linked with. Linking accounts does not grant your partner ownership of your data history.</li>
            <li><strong>Service Providers:</strong> We share data with trusted infrastructure providers (like Supabase) solely for the purpose of hosting the App. They are bound by confidentiality agreements.</li>
          </ul>

          <h2>10. Security Breaches</h2>
          <p>
            In the event of a confirmed data breach compromising your personal information, we will notify you (if an email is linked) and the relevant regulatory authorities as required by applicable law.
          </p>

          <h2>11. Age Requirement (Strict 18+)</h2>
          <p>
            Couplair is intended solely for users <strong>18 years or older</strong>. We do not knowingly collect data from minors. If we discover an account belongs to a minor, it will be deleted immediately.
          </p>

          <h2>12. California & US State Privacy Rights</h2>
          <p>For users in the United States:</p>
          <ul>
            <li><strong>No Sale:</strong> We have not sold personal information in the preceding 12 months.</li>
            <li><strong>Do Not Track (CalOPPA):</strong> We do not currently respond to browser "Do Not Track" signals.</li>
            <li><strong>Right to Know:</strong> You may request details about the specific pieces of personal information we have collected about you.</li>
            <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>

          <h2>13. Your Data Rights</h2>
          <p>Regardless of your location, you have the right to:</p>
          <ul>
            <li><strong>Access & Export:</strong> Request a copy of your data.</li>
            <li><strong>Correction:</strong> Update your profile within the App.</li>
            <li><strong>Deletion:</strong> Permanently delete your account via App settings.</li>
          </ul>

          <h2>14. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> soulmatelabs+couplair@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}