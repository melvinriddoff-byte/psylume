import { Link } from "react-router-dom";

export default function JoinUsSection() {
  return (
    <section className="section" aria-labelledby="join-title">
      <div className="container split">
        <h2 id="join-title" className="display-3">
          Want to work with us?
        </h2>
        <div className="prose">
          <p>
            We are always glad to hear from therapists and counsellors who share our way of
            working. Write to us and tell us about yourself.
          </p>
          <p>
            <Link to="/contact" className="btn btn--secondary">
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
