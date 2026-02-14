export default function Privacy() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            SoulMate Labs - Master Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Last Updated: February 13, 2026
          </p>
        </div>

        <div className="mt-12 prose prose-pink prose-lg text-gray-700 mx-auto">
          <h3>1. Introduction and Scope</h3>
          <p>
            This Privacy Policy applies to all users of SoulMate Labs
            Services. By using our Apps, you consent to the data practices
            described herein. We act as the <strong>Data Controller</strong> for
            the information collected through our Services.
          </p>

          <h3>2. Information Collection by Service</h3>
          <p>
            We collect only the minimum data required for each specific App's
            functionality.
          </p>

          <h4>A. SoulSight (Journaling):</h4>
          <ul>
            <li>
              <strong>Local Processing:</strong> SoulSight is designed to process
              journal entries locally on your device. We do not store the text
              of your journals on our servers.
            </li>
            <li>
              <strong>Technical Metadata:</strong> To maintain service quality
              and security, we collect anonymous metadata (e.g., app crash logs,
              frequency of use, and session duration).
            </li>
            <li>
              <strong>Exceptions:</strong> If you opt-in to cloud backups or
              manually export data to <strong>SoulMate</strong>, that data is
              then processed according to the standards in Section 3 and 4.
            </li>
          </ul>

          <h4>B. Up4it & Couplair (Social & Communication):</h4>
          <ul>
            <li>
              <strong>Profile Data:</strong> Nicknames, availability status, and
              encrypted connection tokens between users.
            </li>
            <li>
              <strong>Interaction Data:</strong> Timestamps of status changes
              and interaction logs required to sync data between connected
              devices.
            </li>
          </ul>

          <h4>C. SoulMate (AI Matchmaking):</h4>
          <ul>
            <li>
              <strong>Profiling Data:</strong> If you manually export SoulSight
              data to SoulMate, we process that data using AI models to
              generate behavioral and compatibility profiles.
            </li>
            <li>
              <strong>Consent:</strong> This processing is based on your{" "}
              <strong>explicit, opt-in consent</strong> and is used solely for
              matchmaking purposes.
            </li>
          </ul>

          <h4>D. Universal Technical Data:</h4>
          <ul>
            <li>
              <strong>Identifiers:</strong> Randomly generated User IDs and, if
              registered, hashed email addresses.
            </li>
            <li>
              <strong>Metadata:</strong> IP addresses and device telemetry (app
              version, OS type) used strictly for security monitoring and DDoS
              prevention.
            </li>
          </ul>

          <h3>3. AI Processing and Training</h3>
          <h4>3.1 No Training on Personal Content:</h4>
          <p>
            SoulMate Labs <strong>does not</strong> use your private journal
            entries (SoulSight) or your private communications (Couplair) to
            train our machine learning models or any third-party AI models.
          </p>

          <h4>3.2 AI Execution Environment:</h4>
          <ul>
            <li>
              <strong>Local-First Processing:</strong> Matchmaking and profiling
              in SoulMate are designed to execute via local Large Language
              Models (LLMs) on your device.
            </li>
            <li>
              <strong>Cloud Fallback:</strong> We reserve the right to route
              data to trusted third-party AI sub-processors via secure API for
              high-compute compatibility vectorization. In all such instances,
              data is transmitted in an anonymized or pseudonymized state and
              is not retained by the provider for their own training purposes.
              The choice of processing environment (local vs. cloud) is a
              technical optimization and does not alter our privacy standards.
            </li>
          </ul>

          <h3>4. Special Categories of Sensitive Data</h3>
          <p>
            Our Apps involve the processing of "Sensitive Data" (e.g., mental
            health reflections, relationship status).
          </p>
          <ul>
            <li>We do not use this data for advertising or marketing.</li>
            <li>
              Processing is strictly limited to providing the core AI features
              you have explicitly requested.
            </li>
            <li>
              In SoulMate, this data is used to create an anonymized
              "compatibility vector" rather than storing raw text logs on our
              central servers whenever possible.
            </li>
          </ul>

          <h3>5. Sideloading and Third-Party Integrity</h3>
          <p>
            SoulMate Labs only guarantees the privacy protections of this
            policy for official, signed versions of our Apps. If you sideload
            an APK or use a modified version:
          </p>
          <ul>
            <li>
              We cannot guarantee that third-party code has not been injected
              to scrape your data.
            </li>
            <li>
              <strong>SoulMate Labs is not liable</strong> for privacy leaks
              resulting from the use of unofficial software.
            </li>
          </ul>

          <h3>6. Data Retention and Deletion</h3>
          <ul>
            <li>
              <strong>Active Accounts:</strong> Retained for the duration of your
              use.
            </li>
            <li>
              <strong>User-Initiated Deletion:</strong> If you use the "Delete
              Account" feature, we trigger an immediate wipe of your data from
              production databases.
            </li>
            <li>
              <strong>Inactivity Wipe:</strong> To limit long-term liability,
              accounts that show no{" "}
              <strong>successful authenticated server interaction</strong> for{" "}
              <strong>12 consecutive months</strong> are automatically
              purged.
            </li>
            <li>
              <strong>Local Data:</strong> Data stored locally (SoulSight) must
              be deleted by you; we cannot remotely wipe data that has never
              reached our servers.
            </li>
          </ul>

          <h3>7. Data Storage and International Transfers</h3>
          <p>
            We utilize trusted infrastructure providers (such as{" "}
            <strong>Supabase</strong>). Your data may be stored on servers in
            the <strong>United States, EU, or other jurisdictions</strong>. By
            using the Services, you acknowledge that data protection laws vary
            by jurisdiction, and you consent to the transfer of your
            information to these locations.
          </p>

          <h3>8. Disclosure to Law Enforcement</h3>
          <p>
            We do not sell your data. We only disclose data to law enforcement
            if:
          </p>
          <ol>
            <li>
              Compelled by a{" "}
              <strong>valid, binding court order</strong> from a jurisdiction
              with authority over SoulMate Labs (Lima, Peru, or relevant
              international treaties).
            </li>
            <li>The request is verified for legal legitimacy.</li>
          </ol>
          <p>
            Unless prohibited by law, we will attempt to notify you of any such
            request.
          </p>

          <h3>9. Your Privacy Rights (GDPR / CCPA / International)</h3>
          <p>
            Regardless of your location, SoulMate Labs provides the following
            rights:
          </p>
          <ul>
            <li>
              <strong>Right to Access/Export:</strong> You can request a copy
              of the data we hold.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can delete your account at
              any time.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> For AI profiling in
              SoulMate, you may withdraw consent at any time, which will
              result in the deletion of your compatibility profile.
            </li>
          </ul>

          <h3>10. Security Measures</h3>
          <p>
            We implement industry-standard encryption (AES-256 at rest and TLS
            in transit). You are responsible for maintaining the physical
            security of your device, especially for local-processing Apps like
            SoulSight.
          </p>

          <h3>11. Contact Us</h3>
          <p>
            <strong>Data Controller:</strong> SoulMate Labs
          </p>
          <p>
            <strong>Privacy Email:</strong> soulmatelabs+legal@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}