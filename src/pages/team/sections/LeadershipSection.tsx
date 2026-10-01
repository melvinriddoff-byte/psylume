import ArchPortrait from "../../../components/brand/ArchPortrait";
import type { TeamMember } from "../../../data/team";

export default function LeadershipSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="section section--tight" aria-labelledby="leadership-title">
      <div className="container">
        <h2 id="leadership-title" className="display-3">
          Leadership
        </h2>
        <ul className="leaders">
          {members.map((m) => (
            <li key={m.name} className="leader">
              <ArchPortrait initials={m.initials} tone={m.tone} />
              <div>
                <h3 className="leader__name">{m.name}</h3>
                <p className="leader__role">{m.role}</p>
                <p>{m.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
