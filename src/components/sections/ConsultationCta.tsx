import CtaBand from "./CtaBand";
import WhatsApp from "../icons/WhatsAppIcon";
import { site } from "../../data/site";

interface ConsultationCtaProps {
  id: string;
  title: string;
  lead: string;
}

/** Closing CTA band with the same buttons as the home page. */
export default function ConsultationCta({ id, title, lead }: ConsultationCtaProps) {
  return (
    <CtaBand id={id} title={title} lead={lead}>
      <a href={site.whatsapp.bookingUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
        <WhatsApp aria-hidden="true" size={20} />
        Book a consultation
        <span className="sr-only"> on WhatsApp</span>
      </a>
      <a href={site.phone.href} className="btn btn--outline-light">
        Call {site.phone.display}
      </a>
    </CtaBand>
  );
}
