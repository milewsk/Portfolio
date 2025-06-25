import ContactBar from "@/components/contact/ContactBar";
import ContactMessage from "@/components/contact/ContactMessage";

const Contact = () => {
  return <div className="flex flex-col lg:h-screen lg:w-screen" >
    <ContactMessage />
    <ContactBar />
  </div>;
};

export default Contact;
