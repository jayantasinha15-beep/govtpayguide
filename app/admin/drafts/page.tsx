"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  published: boolean;
  created_at: string;
};

export default function DraftsPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(true);
  const [drafts, setDrafts] = useState<Article[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDrafts = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace("/admin/login");
        return;
      }

      setCheckingAuth(false);

      const { data, error: fetchError } = await supabase
        .from("articles")
        .select(
          `
          id,
          title,
          slug,
          description,
          category,
          status,
          published,
          created_at
          `
        )
        .eq("published", false)
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      setDrafts(data ?? []);
      setLoading(false);
    };

    loadDrafts();
  }, [router]);

  if (checkingAuth) {
    return (
      <main>
        <div
          className="container"
          style={{
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          Checking admin access...
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Admin</span>

          <h1>Draft Articles</h1>

          <p>
            View unpublished GovtPayGuide articles and continue editing them.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <div className="admin-list-topbar">
          <div>
            <span className="section-label">Drafts</span>
            <h2>Unpublished Articles</h2>
          </div>

          <Link
            href="/admin/new-article"
            className="admin-new-article-button"
          >
            + New Article
          </Link>
        </div>

        {error && (
          <div className="admin-message admin-error">
            {error}
          </div>
        )}

        {loading ? (
          <div className="admin-list-empty">
            Loading drafts...
          </div>
        ) : drafts.length === 0 ? (
          <div className="admin-list-empty">
            <h3>No drafts found</h3>
            <p>
              You do not have any unpublished articles yet.
            </p>

            <Link href="/admin/new-article">
              Create your first article →
            </Link>
          </div>
        ) : (
          <div className="admin-article-list">
            {drafts.map((article) => (
              <article
                className="admin-article-item"
                key={article.id}
              >
                <div className="admin-article-item-main">
                  <div className="admin-article-meta">
                    <span>
                      {article.category}
                    </span>

                    <span>
                      {article.status}
                    </span>

                    <span className="admin-draft-badge">
                      Draft
                    </span>
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <small>
                    /updates/{article.slug}
                  </small>
                </div>

                <div className="admin-article-actions">
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="admin-edit-button"
                  >
                    Edit
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}