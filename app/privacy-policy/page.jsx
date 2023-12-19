import styles from "./privacy-policy.module.css";

export default async function PrivacyPolicy() {
  return (
    <main className={styles.container}>
        {`Privacy Policy for [Your App Name]

Effective Date: [Date]

1. **Introduction**

    Welcome to [Your App Name] ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Next.js app.

2. **Information We Collect**

    - **Personal Information:**
        - When you use our app and opt for Facebook authentication, we may collect the following personal information:
            - Email
            - Public profile information

3. **How We Use Your Information**

    We use the collected information for the following purposes:
    - To create and manage user accounts.
    - To authenticate users through Facebook.
    - To communicate with users.
    - To enhance and improve our app.

4. **Data Security**

    We take appropriate measures to protect your information from unauthorized access or disclosure.

5. **Third-Party Access**

    We do not share your personal information with third parties, except as required for the functionality of our app. For example, Facebook authentication.

6. **Data Retention**

    We retain your personal information for as long as necessary for the purposes outlined in this Privacy Policy. You may request the deletion of your account and associated data.

7. **User Rights**

    You have the right to:
    - Access your personal information.
    - Update or correct your information.
    - Delete your account and data.

8. **Contact Us**

    If you have questions or concerns about our Privacy Policy or practices, please contact us at [Your Contact Information].

9. **Changes to This Privacy Policy**

    We reserve the right to modify this Privacy Policy at any time. Changes will be effective upon posting the updated policy on our app.

10. **Legal Compliance**

    Our app complies with applicable privacy laws and regulations.

By using our app, you agree to the terms of this Privacy Policy.

[Your App Name]
[Your Contact Information]
[Your Website URL]
`}
    </main>
  );
}
