import { Component, type ErrorInfo, type ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import EmptyState from "../ui/EmptyState";
import { site } from "../../data/site";

interface State {
  failed: boolean;
}

/** Catches a crash inside a page and shows a calm message instead of a blank screen. */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[psylume] page crashed", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            icon={RefreshCw}
            headingLevel={1}
            title="Something went wrong on our side"
            actions={
              <>
                <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
                  Reload the page
                </button>
                <a href="/" className="btn btn--secondary">
                  Go to the home page
                </a>
              </>
            }
          >
            <p>
              Please reload and try again. If it keeps happening, email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
          </EmptyState>
        </div>
      </section>
    );
  }
}
