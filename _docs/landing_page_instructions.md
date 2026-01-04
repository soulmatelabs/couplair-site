# Couplair Landing Page Development Instructions

**Objective:** Create a high-quality, conversion-focused landing page for the Couplair mobile app that maintains perfect visual and brand consistency with the Flutter application.

---

## 1. Brand Identity & Design System
Use these exact specifications derived from the app's `AppTheme`:

*   **Primary Color:** `#EC135B` (Vibrant Pink) - Use for CTAs, Headers, and Primary Accents.
*   **Secondary Color:** `#D4C4E3` (Lavender) - Use for backgrounds, cards, and secondary accents.
*   **Status Available:** `#4CAF50` (Green)
*   **Status Unavailable:** `#F44336` (Red)
*   **Typography:** Modern Sans-Serif (e.g., 'Inter', 'Roboto', or 'Product Sans').
*   **Corner Radii:** `12px` to `16px` for buttons and cards (matching Material 3 `AppDimens`).
*   **Visual Style:** Clean, minimal, with soft shadows and subtle gradients.

---

## 2. Page Structure (`index.html`)

### Hero Section
*   **Background:** Soft gradient from `#EC135B` to `#D4C4E3` (opacity adjusted for readability).
*   **Headline:** "Connect. Sync. Simply Be."
*   **Sub-headline:** "The simplest way to share your availability with your partner. Reduce friction, eliminate 'Are you free?' texts, and stay in sync effortlessly."
*   **Primary CTA:** "Get the App" (Link to App Store/Play Store placeholders).

### The Problem / Solution
*   **The Problem:** Miscommunication and the mental load of checking if a partner is busy.
*   **The Solution:** A persistent, real-time "Available/Busy" light for your relationship.

### Core Features (Grid Layout)
1.  **Real-Time Status Sharing:** One-tap updates to let your partner know you're focused or free.
2.  **Smart Durations:** Set a status for a specific time (e.g., "Unavailable for 2 hours"). It clears itself automatically.
3.  **Private & Secure:** Connect using a unique 6-digit code. No social media integration required.
4.  **Instant Notifications:** Get a gentle nudge when your partner becomes available.

### How It Works (Steps)
1.  **Download & Sign Up:** Start fresh or join anonymously.
2.  **Pair Up:** Exchange your 6-digit code with your partner.
3.  **Stay Synced:** Toggle your status and see theirs instantly.

---

## 3. Legal Pages
*   **`privacy.html`**: Explain that data (Status and Connection) is stored securely in Supabase and never sold. State clearly that we do NOT track background location.
*   **`terms.html`**: Standard mobile app terms regarding service availability and user conduct.

---

## 4. Technical Implementation Notes
*   **Framework:** Use React or Vanilla HTML/CSS/JS with a modern CSS framework like Tailwind or Bootstrap (Material Design variant preferred).
*   **Responsive Design:** Mobile-first is mandatory as users will likely visit from their phones.
*   **Assets:** Use the logo from `assets/images/logo.png`. Use "phone frame" mockups to showcase the status toggle UI.
*   **SEO:** Include Meta tags for "Couplair", "Relationship Sync", "Partner Status App", and "Couples Communication".

---

## 5. Development Workflow (For the next session)
1. Initialize the project in the `couplair-site` directory.
2. Create the base HTML structure.
3. Apply the CSS Design System.
4. Implement the Hero and Feature sections.
5. Generate the Terms and Privacy pages as clean HTML templates.
