import React from "react";
import PrivacyHero from "/public/privecy.webp";

export default function TermsConditions() {
  return (
    <div className="bg-white text-[#101010] font-sans">
      {/* Background Image with Text */}
      <div
        className="relative w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${PrivacyHero})` }}
      >
        <h1 className="relative text-white text-3xl sm:text-7xl font-bold z-10">
          TERMS & CONDITIONS
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Introduction</h2>
          <p className="text-[16px] text-[#576067]">
            These terms and conditions govern the use of the Firefly Templates. This Agreement is entered into between the provider and the user.
          </p>
        </section>

        <section className="!mt-4">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Acceptance of Terms</h2>
          <p className="text-[16px] text-[#576067]">
            By accessing or using the Firefly Templates, the user agrees to be bound by this Agreement. Users explicitly accept these terms and conditions before accessing or using the templates.
          </p>
        </section>

        <section className="!mt-4">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">License</h2>
          <p className="text-[16px] text-[#576067]">
            The provider grants the user a non-exclusive, non-transferable license to use the templates for internal business purposes only. Users may not sublicense, distribute, or transfer the templates to any third party without prior written consent from the provider.
          </p>
        </section>

        <section className="!mt-4">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Payment Terms</h2>
          <p className="text-[16px] text-[#576067]">
            The pricing, billing, and payment methods for accessing the templates are outlined in the pricing plan chosen by the user. Additional fees, taxes, or charges may apply and will be communicated accordingly.
          </p>
        </section>

        <section className="!mt-4">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Your Rights</h2>
          <p className="text-[16px] text-[#576067]">
            You have the right to access, update, or delete your personal information held by us. If you would like to exercise these rights or have any questions about our Privacy Policy, please contact us using the information provided below.
          </p>
        </section>

        <section className="!mt-4">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Disclaimer of Warranties</h2>
          <p className="text-[16px] text-[#576067]">
            We strive to provide accurate and up-to-date information on our website, but make no representations or warranties of any kind—express or implied—regarding the completeness, accuracy, reliability, or availability of the website or its contents. Use is at your own risk. We disclaim any implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Changes to Terms and Conditions</h2>
          <p className="text-[16px] text-[#576067]">
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes take effect immediately upon posting. Continued use of the website signifies your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Contact Us</h2>
          <p className="text-[16px] text-[#576067]">
            If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us at:
          </p>
          <ul className="mt-4 space-y-4 text-sm text-[#576067]">
            <li>
              <strong className="text-[#879FF9] font-bold text-lg">Email:</strong> hello@pentalacy.com
            </li>
            <li>
              <strong className="text-[#879FF9] font-bold text-lg">Number:</strong> +123 456 7890, +123 456 7890
            </li>
            <li>
              <strong className="text-[#879FF9] font-bold text-lg">Address:</strong> Chicago HQ to Macomb, MI 48042
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
