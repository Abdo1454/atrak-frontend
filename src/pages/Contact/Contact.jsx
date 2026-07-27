import HeroSection from "../../components/contact/HeroSection";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import BusinessHours from "../../components/contact/BusinessHours";
import SocialLinks from "../../components/contact/SocialLinks";
import MapSection from "../../components/contact/MapSection";
// import FAQPreview from "../../components/contact/FAQPreview";

function Contact() {
  return (
    <main dir="rtl" className="bg-gray-50">
      <div className="container mx-auto space-y-24 px-4 py-12">
        <HeroSection />
        <ContactInfo />


        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <BusinessHours />
        </div>

        <SocialLinks />

        <MapSection />

        {/* <FAQPreview /> */}
      </div>
    </main>
  );
}

export default Contact;