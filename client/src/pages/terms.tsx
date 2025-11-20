import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-terms-heading">
          Terms and Conditions
        </h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 12, 2024</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Airavoto Gaming ("we," "our," or "us"). These Terms and Conditions govern your use of our gaming center management software and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of India, including but not limited to the Information Technology Act, 2000, and the Consumer Protection Act, 2019.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed">
              Airavoto Gaming provides a comprehensive Point of Sale (POS) system designed specifically for gaming centers, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Real-time gaming session management</li>
              <li>Booking and reservation systems</li>
              <li>Food and beverage inventory management</li>
              <li>Financial reporting and analytics</li>
              <li>Customer management tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Registration and Account</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access our services, you must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Not share your account with others or allow unauthorized access</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are provided on a subscription basis. Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable GST</li>
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>Payment can be made through UPI, net banking, credit/debit cards, or other approved methods</li>
              <li>Failure to pay on time may result in suspension or termination of services</li>
              <li>Refunds, if applicable, will be processed within 7-14 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Cancellation and Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              As per the Consumer Protection Act, 2019:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You may cancel your subscription at any time by contacting our support team</li>
              <li>Cancellations made within 7 days of initial purchase may be eligible for a full refund</li>
              <li>After 7 days, refunds will be prorated based on unused service time</li>
              <li>Setup fees and customization charges are non-refundable</li>
              <li>Refund requests must be submitted in writing to airvotogaming@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security and Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All data is encrypted during transmission and at rest</li>
              <li>Regular security audits and updates are performed</li>
              <li>Data is stored on secure servers with regular backups</li>
              <li>Access to data is restricted to authorized personnel only</li>
              <li>We comply with data localization requirements under Indian law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, and images, are owned by Airavoto Gaming and protected by Indian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You are granted a limited, non-exclusive, non-transferable license to use our services for your business purposes only. You may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Copy, modify, or distribute our software or content</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove or alter any copyright notices or proprietary markings</li>
              <li>Use our services to create competing products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by Indian law:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid by you in the last 12 months</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>You are responsible for maintaining backup copies of your data</li>
              <li>We are not liable for any third-party services or integrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your access to our services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>For violation of these Terms and Conditions</li>
              <li>For non-payment of subscription fees</li>
              <li>For fraudulent or illegal activities</li>
              <li>At our discretion with 30 days notice</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Upon termination, you will lose access to your account and all associated data. We may provide a data export option upon request before termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these terms shall be resolved through:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Good faith negotiations between the parties</li>
              <li>Mediation or arbitration as per the Arbitration and Conciliation Act, 1996</li>
              <li>The courts of [Your City/State], India shall have exclusive jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. We will notify you of any material changes via email or through our platform. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2 mt-4">
              <li><strong>Email:</strong> airvotogaming@gmail.com</li>
              <li><strong>Phone:</strong> +91 8657955764</li>
              <li><strong>WhatsApp:</strong> +91 8657955764</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of India, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Information Technology Act, 2000</li>
              <li>Consumer Protection Act, 2019</li>
              <li>Indian Contract Act, 1872</li>
              <li>Applicable GST regulations</li>
            </ul>
          </section>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
