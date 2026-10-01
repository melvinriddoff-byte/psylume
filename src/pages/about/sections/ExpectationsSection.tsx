import { Globe, HandHeart, Languages, Lock, MessagesSquare, Users } from "lucide-react";
import ValueGrid from "../../../components/sections/ValueGrid";

const principles = [
  { label: "Confidential", Icon: Lock, text: "What you share stays between you and your therapist." },
  { label: "Matched to you", Icon: Users, text: "We suggest a therapist whose approach, languages and schedule suit you." },
  { label: "Online or in person", Icon: Globe, text: "Meet by video call or at our clinic, whichever feels easier." },
  { label: "Your language", Icon: Languages, text: "Talk in the language you think and feel in." },
  { label: "At your pace", Icon: MessagesSquare, text: "You decide what to talk about and how fast to go." },
  { label: "No judgement", Icon: HandHeart, text: "You don’t need a diagnosis or a crisis to start." },
] as const;

export default function ExpectationsSection() {
  return (
    <section className="section" aria-labelledby="principles-title">
      <div className="container">
        <div className="section__head">
          <h2 id="principles-title" className="display-2">
            What you can expect
          </h2>
        </div>
        <ValueGrid items={principles} />
      </div>
    </section>
  );
}
