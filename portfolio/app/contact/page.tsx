import Section from "../components/Section";
import ContactCard from "../components/ContactCard";
import contacts from "../../data/contacts.json";

export default function Contact() {
  return (
    <Section title="Contact Me">
      <div className="flex flex-col gap-6">
        {contacts.map((contact, idx) => (
          <ContactCard
            key={idx}
            title={contact.title}
            link={contact.link}
            isExternal={contact.isExternal}
          />
        ))}
      </div>
    </Section>
  );
}
