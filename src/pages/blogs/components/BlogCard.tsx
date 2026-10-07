import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Star from "../../../components/brand/Star";
import { formatBlogDate, type BlogPost } from "../../../data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <li className="blog-card">
      <Link to={`/blogs/${post.slug}`} className="blog-card__link">
        <div className={`blog-card__cover blog-card__cover--${post.tone}`} aria-hidden="true">
          <span className="blog-card__arch" />
          <span className="blog-card__arch blog-card__arch--small" />
          <Star className="blog-card__star" />
        </div>
        <div className="blog-card__body">
          <p className="blog-card__category">{post.category}</p>
          <h2 className="blog-card__title">{post.title}</h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <p className="blog-card__meta">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            {post.readMinutes} min read
          </p>
          <span className="blog-card__more">
            Read article
            <ArrowRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </li>
  );
}
