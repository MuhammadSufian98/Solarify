import React from "react";
import PrivacyHero from "/public/privecy.webp";

export default function PrivacyTerms() {
  return (
    <div className="bg-white text-[#101010] font-sans">
      {/* BackgroundImage Image with  Text */}
      <div
  className="relative w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${PrivacyHero})` }}
>
  
  <h1 className="relative text-white text-4xl sm:text-8xl font-bold z-10">
    PRIVACY & TERMS
  </h1>
</div>


      {/* Main Content */}
<div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
  <section >
    <h2 className="text-2xl font-bold mb-8 text-[#0C0C3C]">Information we collect</h2>
    <ol className="list-decimal space-y-4 pl-5 text-[16px] text-[#576067] mt-24">
      <li>This includes your name, email address, phone number, and other contact details provided voluntarily when you fill out forms or contact us.</li>
      <li>We may collect information about your browsing activity on our website, such as pages visited, links clicked, and time spent on each page.</li>
      <li>We use cookies and similar tracking technologies to enhance your browsing experience, analyze trends, and gather information about user behavior.</li>
    </ol>
  </section>

  <section className="!mt-4">
    <h2 className="text-2xl font-bold mb-8 text-[#0C0C3C]">How we use your information</h2>
    <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#576067]">
      <li>To provide and improve our services</li>
      <li>To respond to inquiries and communicate with you</li>
      <li>To personalize your experience on our website</li>
      <li>To analyze website usage and trends</li>
      <li>To comply with legal obligations</li>
    </ul>
  </section>

  <section className="!mt-4"> 
    <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Data security</h2>
    <p className="text-[16px] text-[#576067]">
      We take data security seriously and employ industry-standard measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
    </p>
  </section>

  <section className="!mt-4">
    <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Third-party links</h2>
    <p className="text-[16px] text-[#576067]">
      We take data security seriously and employ industry-standard measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
    </p>
  </section>

  <section className="!mt-4">
    <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Your rights</h2>
    <p className="text-[16px] text-[#576067]">
      You have the right to access, update, or delete your personal information held by us. If you would like to exercise these rights or have any questions about our Privacy Policy, please contact us using the information provided below.
    </p>
  </section>

  <section className="!mt-4">
    <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Disclaimer of Warranties</h2>
    <p className="text-[16px] text-[#576067]">
      We strive to provide accurate and up-to-date information on our website, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Your use of our website and services is at your own risk.
    </p>
  </section>

  <section className="!mt-4">
    <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Changes to terms and conditions</h2>
    <p className="text-[16px] text-[#576067]">
      We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on our website. Your continued use of our website after changes are made constitutes acceptance of the updated Terms and Conditions.
    </p>
  </section>

 <section className="!mt-4">
  <h2 className="text-2xl font-bold mb-4 text-[#0C0C3C]">Contact us</h2>
  <p className="text-[16px] text-[#576067]">
    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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
