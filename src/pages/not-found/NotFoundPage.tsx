import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import EmptyState from "../../components/ui/EmptyState";
import usePageMeta from "../../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: "This page doesn’t exist. Find a therapist, book a consultation or get in touch with Psylume.",
  });

  return (
    <section className="section">
      <div className="container">
        <EmptyState
          icon={Compass}
          headingLevel={1}
          title="We couldn’t find that page"
          actions={
            <>
              <Link to="/" className="btn btn--primary">
                Go to the home page
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Contact us
              </Link>
            </>
          }
        >
          <p>
            The link may be old, or the address may have a typo. Here are some places to start
            instead:
          </p>
          <ul className="link-list">
            <li>
              <Link to="/therapists">Find a therapist</Link>
            </li>
            <li>
              <Link to="/consultation">Book a consultation</Link>
            </li>
            <li>
              <Link to="/about">About Psylume</Link>
            </li>
          </ul>
        </EmptyState>
      </div>
    </section>
  );
}
