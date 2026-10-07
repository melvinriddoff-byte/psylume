import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CtaBand from "../../components/sections/CtaBand";
import CrisisNote from "../../components/ui/CrisisNote";
import usePageMeta from "../../hooks/usePageMeta";
import { blogs, findBlog, formatBlogDate } from "../../data/blogs";
import NotFoundPage from "../not-found/NotFoundPage";
import BlogCard from "./components/BlogCard";
import "./blogs.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = findBlog(slug);
  if (!post) return <NotFoundPage />;
  return <Article key={post.slug} slug={post.slug} />;
}

function Article({ slug }: { slug: string }) {
  const post = findBlog(slug)!;
  usePageMeta({ title: post.title, description: post.excerpt });

  const related = blogs
    .filter((b) => b.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category) || b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <>
      <article className="post">
        <header className="post__header">
          <div className="container post__narrow">
            <Link to="/blogs" className="post__back">
              <ArrowLeft aria-hidden="true" size={18} />
              All blogs
            </Link>
            <p className="post__category">{post.category}</p>
            <h1 className="post__title">{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <p className="post__meta">
              {post.author}
              <span aria-hidden="true"> · </span>
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              {post.readMinutes} min read
            </p>
          </div>
        </header>

        <div className="container post__narrow post__body">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}

          <p className="post__disclaimer">
            This article is general information, not a substitute for professional advice.
          </p>
          <CrisisNote />
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section section--tint" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title" className="display-3 related__title">
              Keep reading
            </h2>
            <ul className="blog-grid blog-grid--two">
              {related.map((b) => (
                <BlogCard key={b.slug} post={b} />
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand
        id="post-cta-title"
        title="Ready to talk it through?"
        lead="Tell us a little about what’s going on and we’ll match you with a therapist, online or in person."
      >
        <Link to="/consultation" className="btn btn--primary">
          Book a consultation
        </Link>
        <Link to="/therapists" className="btn btn--outline-light">
          Meet our therapists
        </Link>
      </CtaBand>
    </>
  );
}
