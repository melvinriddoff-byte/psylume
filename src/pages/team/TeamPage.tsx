import { UsersRound } from "lucide-react";
import PageIntro from "../../components/sections/PageIntro";
import EmptyState from "../../components/ui/EmptyState";
import usePageMeta from "../../hooks/usePageMeta";
import { team } from "../../data/team";
import LeadershipSection from "./sections/LeadershipSection";
import CareTeamSection from "./sections/CareTeamSection";
import JoinUsSection from "./sections/JoinUsSection";
import "./team.css";

export default function TeamPage() {
  usePageMeta({
    title: "Our team",
    description:
      "Meet the clinicians and coordinators behind Psylume, a small team making therapy easier to start and kinder once you do.",
  });
  const leadership = team.filter((m) => m.group === "leadership");
  const care = team.filter((m) => m.group === "care");

  return (
    <>
      <PageIntro
        title="The people behind Psylume"
        lead="A small team of clinicians and coordinators who want therapy to be easier to start, and kinder once you do."
      />
      {team.length === 0 ? (
        <section className="section section--tight">
          <div className="container">
            <EmptyState icon={UsersRound} title="Team profiles are on their way">
              <p>We are putting together introductions to everyone at Psylume. Check back soon.</p>
            </EmptyState>
          </div>
        </section>
      ) : null}
      {leadership.length > 0 ? <LeadershipSection members={leadership} /> : null}
      {care.length > 0 ? <CareTeamSection members={care} /> : null}
      <JoinUsSection />
    </>
  );
}
