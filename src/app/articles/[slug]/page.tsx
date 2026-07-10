import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import BookCTA from "@/components/BookCTA";
import "./article.css";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found | WOVREX",
    };
  }

  return {
    title: `${article.title} — WOVREX Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://wovrex.site/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
    },
    alternates: {
      canonical: `https://wovrex.site/articles/${article.slug}`,
    },
  };
}

// Generate static params so these pages are statically generated at build time
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-page-wrapper">
      <Link href="/articles" className="back-link">
        <span>&larr;</span> Back to Insights
      </Link>
      
      <header className="article-header">
        <h1>{article.title}</h1>
        <div className="article-header-meta">
          <span>{article.publishedAt}</span>
          <span>&bull;</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div className="article-body">
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <div className="article-placeholder">
            [Content for this article is currently being drafted]
          </div>
        )}
      </div>

      <div className="article-cta-box">
        <h3>Curious what we'd find in your data?</h3>
        <p>
          We pull what already exists in your dispatch and call logs, and write down exactly where revenue is leaking in plain English.
        </p>
        <BookCTA className="cta-button">Check the rest with us</BookCTA>
      </div>
    </article>
  );
}
