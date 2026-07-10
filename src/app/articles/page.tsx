import { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import "./articles.css";

export const metadata: Metadata = {
  title: "Articles & Insights — WOVREX Revenue Intelligence",
  description:
    "Insights for established HVAC owners on profit margins, unbilled hours, missed calls, and dispatch efficiency. Learn where revenue quietly slips away.",
  openGraph: {
    title: "Articles & Insights | WOVREX",
    description:
      "Insights for established HVAC owners on profit margins, unbilled hours, missed calls, and dispatch efficiency.",
    url: "https://wovrex.site/articles",
  },
  alternates: {
    canonical: "https://wovrex.site/articles",
  },
};

export default function ArticlesPage() {
  return (
    <div className="articles-page-wrapper">
      <section className="page-hero">
        <div className="eyebrow">Revenue Insights</div>
        <h1>
          Why busy doesn't always mean <span className="accent">profitable.</span>
        </h1>
        <p>
          Operational insights for established HVAC businesses. We document exactly where revenue quietly slips away between the phones, the dispatch board, and the technicians.
        </p>
      </section>

      <div className="articles-grid">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.id} className="article-card">
            <div className="article-meta">
              <span>{article.readTime}</span>
            </div>
            <h2>{article.title}</h2>
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-read-more">
              Read article <span>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
