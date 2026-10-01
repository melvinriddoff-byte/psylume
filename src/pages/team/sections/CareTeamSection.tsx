import ArchPortrait from "../../../components/brand/ArchPortrait";
import type { TeamMember } from "../../../data/team";

export default function CareTeamSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="section section--tint" aria-labelledby="care-title">
      <div className="container">
        <h2 id="care-title" className="display-3">
          Care and community
        </h2>
        <ul className="crew">
          {members.map((m) => (
            <li key={m.name} className="crew__member">
              <ArchPortrait initials={m.initials} tone={m.tone} />
              <h3 className="crew__name">{m.name}</h3>
              <p className="crew__role">{m.role}</p>
              <p>{m.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
