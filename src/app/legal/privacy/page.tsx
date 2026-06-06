
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h1 className="text-5xl font-bold font-headline">Privacy Policy</h1>
          <p className="text-white/60 italic">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-primary max-w-none space-y-12 text-primary/80">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-headline">1. Introduction</h2>
              <p>
                Arkā Solar Systems Private Limited ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our solar energy services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-headline">2. Information Collection</h2>
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a quote or site survey.</li>
                <li>Use our solar calculator.</li>
                <li>Contact us for customer support.</li>
                <li>Subscribe to our newsletter.</li>
              </ul>
              <p>This information may include your name, phone number, email address, physical address, and electricity consumption data.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-headline">3. Use of Information</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide personalized solar recommendations and quotes.</li>
                <li>Process government subsidy applications on your behalf.</li>
                <li>Improve our website's functionality and user experience.</li>
                <li>Send relevant updates regarding your installation or new schemes.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-headline">4. Data Security</h2>
              <p>
                We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-headline">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact our data protection officer at <span className="font-bold">privacy@arkasolar.in</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
