import { useSearchParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import PageIntro from "../../components/sections/PageIntro";
import EmptyState from "../../components/ui/EmptyState";
import usePageMeta from "../../hooks/usePageMeta";
import { blogs } from "../../data/blogs";
import BlogCard from "./components/BlogCard";
import "./blogs.css";

const newestFirst = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
const categories = [...new Set(newestFirst.map((b) => b.category))];

export default function BlogsPage() {
  usePageMeta({
    title: "Blogs",
    description:
      "Gentle, practical reading on anxiety, relationships, burnout, grief and starting therapy, from the Psylume care team.",
  });
  const [params, setParams] = useSearchParams();
  const raw = params.get("category");
  const category = raw && categories.includes(raw) ? raw : "all";
  const posts = category === "all" ? newestFirst : newestFirst.filter((b) => b.category === category);

  const choose = (next: string) => {
    const p = new URLSearchParams(params);
    if (next === "all") p.delete("category");
    else p.set("category", next);
    setParams(p, { replace: true });
  };

  return (
    <>
      <PageIntro
        title="Blogs"
        lead="Gentle, practical reading on the things people bring to therapy, from the Psylume care team."
      />

      <section className="section section--tight" aria-label="Articles">
        <div className="container">
          {newestFirst.length === 0 ? (
            <EmptyState icon={BookOpen} title="Our first articles are on their way">
              <p>We are writing our first pieces. Check back soon.</p>
            </EmptyState>
          ) : (
            <>
              <div role="group" aria-label="Filter by topic" className="chips blog-filters">
                <button type="button" className="chip" aria-pressed={category === "all"} onClick={() => choose("all")}>
                  All
                </button>
                {categories.map((c) => (
                  <button key={c} type="button" className="chip" aria-pressed={category === c} onClick={() => choose(c)}>
                    {c}
                  </button>
                ))}
              </div>

              <ul className="blog-grid">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}
