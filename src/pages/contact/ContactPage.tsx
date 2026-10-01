import PageIntro from "../../components/sections/PageIntro";
import usePageMeta from "../../hooks/usePageMeta";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import "./contact.css";

export default function ContactPage() {
  usePageMeta({
    title: "Contact us",
    description:
      "Questions about Psylume, bookings or working with us? Send a message, email or call, and a member of the team will reply.",
  });

  return (
    <>
      <PageIntro
        title="Get in touch"
        lead="Questions about how Psylume works, bookings, or working with us? Write or call and a member of the team will reply."
      />

      <section className="section section--tight">
        <div className="container contact">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
    </>
  );
}
