import { Brain, HandHeart, Heart, Leaf, Sparkle, Sun } from "lucide-react";
import ValueGrid from "../../../components/sections/ValueGrid";

const values = [
  { label: "Therapy", Icon: Brain, text: "Structured, confidential conversations with a trained professional." },
  { label: "Growth", Icon: Leaf, text: "Small steps that add up to real change." },
  { label: "Wellbeing", Icon: Sun, text: "Care for the whole of you, not only the hardest days." },
  { label: "Self care", Icon: Heart, text: "Rest and boundaries are part of the work." },
  { label: "Hope", Icon: Sparkle, text: "A reason to believe things can shift." },
  { label: "Support", Icon: HandHeart, text: "Someone in your corner, online or in the room." },
] as const;

export default function ValuesSection() {
  return (
    <section className="section" aria-labelledby="values-title">
      <div className="container">
        <div className="section__head">
          <h2 id="values-title" className="display-2">
            What we hold on to
          </h2>
        </div>
        <ValueGrid items={values} />
      </div>
    </section>
  );
}
