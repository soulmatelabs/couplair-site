export default function Privacy() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy for Couplair</h1>
          <p className="mt-4 text-lg text-gray-500">Last Updated: January 4, 2026</p>
        </div>
        <div className="mt-12 prose prose-pink prose-lg text-gray-500 mx-auto">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Couplair</strong> ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you use our mobile application (the "App").
          </p>
          <p>
            By using the App, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect only the minimum amount of data necessary to provide the App's core functionality: connecting partners and sharing status.
          </p>

          <h3>A. Information You Provide to Us</h3>
          <ul>
            <li>
              <strong>Account Information:</strong>
              <ul>
                <li><strong>Anonymous Users:</strong> When you first use the App, we create an anonymous identifier for you. No personal data (like name or email) is required at this stage.</li>
                <li><strong>Registered Users:</strong> If you choose to link your account, we collect your <strong>email address</strong> and <strong>password</strong> (encrypted).</li>
              </ul>
            </li>
            <li><strong>Profile Data:</strong> We collect the <strong>nickname</strong> you choose to display to your partner.</li>
            <li><strong>Status Data:</strong> We store your current status (e.g., "Available", "Unavailable") and the duration you set.</li>
          </ul>

          <h3>B. Automatically Collected Information</h3>
          <ul>
            <li><strong>Device Information:</strong> We may collect standard device information (e.g., operating system, device model) to help debug issues and improve app performance.</li>
            <li><strong>Usage Data:</strong> We may collect anonymous data on how you interact with the App (e.g., features used) to improve the user experience.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li><strong>Provide Core Services:</strong> To sync your status with your connected partner in real-time.</li>
            <li><strong>Account Management:</strong> To manage your account, authentication, and connection to your partner.</li>
            <li><strong>Improvement:</strong> To fix bugs, analyze usage trends, and improve the App's functionality.</li>
            <li><strong>Communication:</strong> To send you technical notices or security alerts (if you have provided an email).</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <ul>
            <li><strong>Backend Provider:</strong> Our backend infrastructure is powered by <strong>Supabase</strong>. Your data is stored securely on servers managed by Supabase.</li>
            <li><strong>Security Measures:</strong> We use industry-standard encryption for data in transit (HTTPS) and data at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</li>
          </ul>

          <h2>5. Sharing Your Information</h2>
          <p>We do <strong>not</strong> sell or rent your personal data to third parties.</p>
          <p>We may share your information only in the following limited circumstances:</p>
          <ul>
            <li><strong>With Your Partner:</strong> Your nickname and status are shared exclusively with the user you explicitly connect with using the unique 6-digit code.</li>
            <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers (like Supabase) who assist us in operating the App.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
          </ul>

          <h2>6. Account Deletion</h2>
          <p>You have the right to delete your account at any time.</p>
          <ul>
            <li><strong>In-App Deletion:</strong> You can delete your account directly within the App settings. This action permanently removes your profile, connection data, and authentication credentials from our servers.</li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>
            Couplair is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it immediately.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> soulmatelabs@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
