import { useEffect } from "react";
import { site } from "../data/site";

interface PageMeta {
  /** Page name shown before the brand in the browser tab. Omit on the home page. */
  title?: string;
  /** One or two sentences for search results and link previews (about 150 characters). */
  description: string;
}

const HOME_TITLE = `${site.name} · Psychotherapy online and in person`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

/** Sets the tab title, meta description and share-preview tags for a page. */
export default function usePageMeta({ title, description }: PageMeta): void {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${site.name}` : HOME_TITLE;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", window.location.href);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
  }, [title, description]);
}
