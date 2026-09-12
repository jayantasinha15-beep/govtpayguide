"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export default function AdminArticlesPage() {
  const router = useRouter();

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    checkUserAndLoadArticles();
  }, []);

  async function checkUserAndLoadArticles() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    await loadArticles();
  }

  async function loadArticles() {
    const { data, error } = await supabase
      .from("articles")
      .select(`
        id,
        title,
        slug,
        category,
        status,
        published,
        published_at,
        created_at,
        updated_at
      `)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "Failed to load articles:",
        error
      );

      setArticles([]);
      setLoading(false);
      return;
    }

    setArticles(data ?? []);
    setLoading(false);
  }

  async function handleDelete(
    id: string,
    title: string
  ) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(
        "Failed to delete article:",
        error
      );

      alert("Failed to delete article.");
      setDeletingId(null);
      return;
    }

    setArticles((current) =>
      current.filter(
        (article) => article.id !== id
      )
    );

    setDeletingId(null);
  }

  if (loading) {
    return (
      <main className="admin-page">
        <div className="container">
          <div className="admin-loading">
            Loading articles...
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <div className="container">
        <div className="admin-page-header">
          <div>
            <span className="page-badge">
              Admin Panel
            </span>

            <h1>
              All Articles
            </h1>

            <p>
              Manage published articles and drafts
              from one place.
            </p>
          </div>

          <Link
            href="/admin/new-article"
            className="admin-primary-button"
          >
            + New Article
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="admin-list-empty">
            <h2>No articles found</h2>

            <p>
              Create your first article from the
              admin panel.
            </p>

            <Link
              href="/admin/new-article"
              className="admin-primary-button"
            >
              Create Article
            </Link>
          </div>
        ) : (
          <div className="admin-articles-list">
            {articles.map((article) => {
              const dateValue =
                article.published_at ||
                article.created_at;

              const formattedDate =
                dateValue
                  ? new Date(
                      dateValue
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )
                  : "";

              return (
                <article
                  className="admin-article-card"
                  key={article.id}
                >
                  <div className="admin-article-main">
                    <div className="admin-article-meta">
                      <span className="admin-category-badge">
                        {article.category}
                      </span>

                      <span
                        className={
                          article.published
                            ? "admin-status-badge published"
                            : "admin-status-badge draft"
                        }
                      >
                        {article.published
                          ? "Published"
                          : "Draft"}
                      </span>

                      <span className="admin-article-status">
                        {article.status}
                      </span>
                    </div>

                    <h2>
                      {article.title}
                    </h2>

                    <div className="admin-article-slug">
                      /updates/{article.slug}
                    </div>

                    {formattedDate && (
                      <div className="admin-article-date">
                        {article.published
                          ? "Published"
                          : "Created"}{" "}
                        {formattedDate}
                      </div>
                    )}
                  </div>

                  <div className="admin-article-actions">
                    {article.published && (
                      <Link
                        href={`/updates/${article.slug}`}
                        target="_blank"
                        className="admin-action-button"
                      >
                        View
                      </Link>
                    )}

                    <Link
                      href={`/admin/articles/${article.id}/edit`}
                      className="admin-action-button edit"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="admin-action-button delete"
                      disabled={
                        deletingId === article.id
                      }
                      onClick={() =>
                        handleDelete(
                          article.id,
                          article.title
                        )
                      }
                    >
                      {deletingId === article.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}