import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactItem } from "@/components/Contact/index";
import { IContact } from "@/interfaces/IContact";

const ContactPage = () => {
  const contacts: IContact[] = [
    {
      name: "Encúentrame",
      library: "fa6",
      icon: "FaMapLocationDot",
      description: "Bogotá, Colombia",
    },
    {
      name: "Llámame",
      library: "lu",
      icon: "LuPhoneCall",
      description: "+57 3115413369",
    },
    {
      name: "Entrar en línea",
      library: "ai",
      icon: "AiOutlineMail",
      description: "julian1918@hotmail.es",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center text-white py-5 gap-3">
      <p className="text-primary-600 font-bold text-2xl md:text-3xl text-center">
        Contáctame
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full">
        {contacts.map((item) => (
          <ContactItem key={item.name} {...item} />
        ))}
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
