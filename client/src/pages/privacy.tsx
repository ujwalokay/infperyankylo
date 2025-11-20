import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-privacy-heading">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 12, 2024</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Airavoto Gaming ("we," "our," or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the Information Technology Act, 2000, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable Indian data protection laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our services, you consent to the collection and use of your information as described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We collect the following personal information when you register or use our services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and business name</li>
              <li>Email address and phone number</li>
              <li>Business address and GST number (if applicable)</li>
              <li>Payment information (processed securely through third-party payment gateways)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Business Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              When using our gaming center management system, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Gaming session records and bookings</li>
              <li>Customer information (as entered by you)</li>
              <li>Inventory and sales data</li>
              <li>Financial reports and transaction history</li>
              <li>Staff and employee information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Technical Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Usage data and analytics</li>
              <li>Log files and error reports</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process payments and generate invoices</li>
              <li>To communicate with you about your account and services</li>
              <li>To provide customer support and technical assistance</li>
              <li>To improve our services and develop new features</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To send promotional emails (with your consent, which you can withdraw anytime)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Data Storage Location</h3>
            <p className="text-muted-foreground leading-relaxed">
              In compliance with Indian data localization requirements:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All sensitive personal data is stored on servers located within India</li>
              <li>Backups are maintained within Indian jurisdiction</li>
              <li>We may use cloud services that comply with Indian regulations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Security Measures</h3>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security practices and procedures including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Encryption of data in transit using SSL/TLS protocols</li>
              <li>Encryption of data at rest using industry-standard algorithms</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information to third parties. We may share your information with:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Service Providers</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Payment processors (for handling transactions)</li>
              <li>Cloud hosting providers (for data storage)</li>
              <li>Email service providers (for communications)</li>
              <li>Analytics providers (for improving our services)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All service providers are contractually bound to protect your data and use it only for specified purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose your information when required by law, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>In response to court orders or government requests</li>
              <li>To comply with tax and GST regulations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>To enforce our Terms and Conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Under Indian data protection laws, you have the following rights:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Access and Correction</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate or incomplete data</li>
              <li>Right to update your account information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Data Deletion</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can request deletion of your personal data, subject to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Legal obligations requiring data retention</li>
              <li>Pending transactions or disputes</li>
              <li>Audit and compliance requirements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Opt-Out</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Unsubscribe from marketing emails using the link in emails</li>
              <li>Disable cookies through browser settings</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.4 Data Portability</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can request a copy of your data in a structured, machine-readable format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide our services to you</li>
              <li>Comply with legal and regulatory obligations (minimum 7 years for financial records)</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records as required by law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              After the retention period, we will securely delete or anonymize your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Maintain your session and preferences</li>
              <li>Analyze usage patterns and improve our services</li>
              <li>Personalize your experience</li>
              <li>Provide security features</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Data Breach Notification</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the event of a data breach that may compromise your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We will notify affected users within 72 hours of discovery</li>
              <li>We will inform relevant regulatory authorities as required</li>
              <li>We will take immediate steps to contain and remediate the breach</li>
              <li>We will provide guidance on protective measures you can take</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              If we transfer data outside India (for limited purposes such as technical support), we ensure:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Adequate safeguards are in place</li>
              <li>Data protection standards equivalent to Indian laws are maintained</li>
              <li>Explicit consent is obtained where required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Sending an email to your registered email address</li>
              <li>Posting a notice on our website</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Grievance Officer</h2>
            <p className="text-muted-foreground leading-relaxed">
              In accordance with the Information Technology Act, 2000, and rules made thereunder, we have appointed a Grievance Officer to address your concerns regarding data protection and privacy.
            </p>
            <div className="mt-4 p-6 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground"><strong>Name:</strong> [Grievance Officer Name]</p>
              <p className="text-muted-foreground mt-2"><strong>Email:</strong> airvotogaming@gmail.com</p>
              <p className="text-muted-foreground mt-2"><strong>Phone:</strong> +91 8657955764</p>
              <p className="text-muted-foreground mt-2"><strong>Response Time:</strong> Within 30 days of receiving a complaint</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2 mt-4">
              <li><strong>Email:</strong> airvotogaming@gmail.com</li>
              <li><strong>Phone:</strong> +91 8657955764</li>
              <li><strong>WhatsApp:</strong> +91 8657955764</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy. You consent to the collection, use, storage, and disclosure of your information as described herein.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may withdraw your consent at any time by contacting us, subject to legal and contractual restrictions and reasonable notice.
            </p>
          </section>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
