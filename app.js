const privacyEl = document.getElementById("privacyContent");
const termsEl = document.getElementById("termsContent");
const yearEl = document.getElementById("copyrightYear");
const logoEl = document.getElementById("brandLogo");
const logoFallbackEl = document.getElementById("brandLogoFallback");

const PRIVACY_POLICY = `Privacy Policy
Effective Date: March 28, 2026

My Indian Festivals ("we", "our", "us") operates the My Indian Festivals mobile application ("App"). This Privacy Policy explains how we collect, use, and protect your information.

1. Information We Collect
- Account Information: name, email address, mobile number, password, and profile details you provide during registration or login.
- App Usage Data: actions inside the app such as selected festivals, selected frames, and download activity.
- Device and Technical Data: device type, operating system, app version, crash logs, and diagnostics.
- Advertising Data: ad-related identifiers and interaction data used by ad providers.
- Saved Media Access: the App may request media or storage permission only to save generated images to your device gallery.

2. How We Use Information
- To create and manage your account.
- To provide app features such as image selection, frame preview, and image download.
- To improve app performance, reliability, and user experience.
- To show ads and measure ad performance.
- To provide support and respond to user requests.

3. Sharing of Information
We may share limited information with trusted third-party service providers that help run the App, such as:
- Cloud hosting and database providers
- Image and media delivery providers
- Advertising and analytics providers
We do not sell your personal information.

4. Data Retention: We retain your information as long as needed to provide the App and comply with legal obligations. You may request account deletion by contacting us.

5. Data Security: We use reasonable administrative and technical safeguards to protect your data. However, no method of transmission or storage is 100% secure.

6. Children's Privacy: The App is not intended for children under 13. We do not knowingly collect personal data from children under 13.

7. Your Rights: Depending on your region, you may have rights to access, correct, or delete your personal data. Contact us to make a request.

8. Third-Party Services: The App may contain links or integrations with third-party services (such as ad networks). Their privacy practices are governed by their own policies.

9. Changes to This Policy: We may update this Privacy Policy from time to time. Updated versions will be posted with a revised effective date.

10. Contact Us: If you have questions about this Privacy Policy, contact:
- Email: support@myindianfestivals.com
- Developer/Company: My Indian Festivals
- Country: India`;

const TERMS_AND_CONDITIONS = `Terms and Conditions
Effective Date: March 28, 2026

These Terms and Conditions ("Terms") govern your use of the My Indian Festivals app ("App"). By using the App, you agree to these Terms.

1. Acceptance of Terms: By downloading, accessing, or using the App, you agree to be bound by these Terms and our Privacy Policy.

2. Eligibility: You must be at least 13 years old to use the App. If you are under 18, you must use the App with parental or guardian permission.

3. User Account: You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate account information. You are responsible for all activity under your account.

4. Permitted Use: You may use the App for personal, non-commercial purposes to create and download festival greeting images.

5. Content and Intellectual Property: All app content (including designs, frames, images, branding, and software) is owned by or licensed to us and protected by law. You may not copy, redistribute, modify, reverse engineer, or commercially exploit App content without permission.

6. User Conduct: You agree not to:
- Use the App for unlawful, abusive, or fraudulent purposes.
- Interfere with app security or functionality.
- Attempt unauthorized access to systems or data.
- Upload or share harmful, infringing, or offensive content.

7. Ads and Third-Party Services: The App may display ads and use third-party services. We are not responsible for third-party content, policies, or practices.

8. Service Availability: We may update, suspend, or discontinue features at any time without prior notice.

9. Disclaimer: The App is provided on an "as is" and "as available" basis without warranties of any kind, to the extent permitted by law.

10. Limitation of Liability: To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages resulting from use of the App.

11. Termination: We may suspend or terminate access if you violate these Terms or misuse the App.

12. Governing Law: These Terms are governed by the laws of India. Any disputes shall be subject to the courts located in Ahmedabad only.

13. Changes to Terms: We may revise these Terms from time to time. Continued use of the App after updates means you accept the revised Terms.

14. Contact Us: For questions about these Terms, contact:
- Email: support@myindianfestivals.com
- Developer/Company: My Indian Festivals
- Country: India`;

function renderContent() {
  if (logoEl && logoFallbackEl) {
    logoEl.addEventListener("error", () => {
      logoEl.style.display = "none";
      logoFallbackEl.style.display = "flex";
    });
  }

  privacyEl.textContent = PRIVACY_POLICY;
  termsEl.textContent = TERMS_AND_CONDITIONS;
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderContent();
