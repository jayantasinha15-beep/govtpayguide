"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      setEmail(user.email ?? "");
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.replace("/admin/login");
    router.refresh();
  };

  if (loading) {
    return (
      <main>
        <div
          className="container"
          style={{ padding: "80px 20px" }}
        >
          Loading admin...
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Admin</span>

          <h1>GovtPayGuide Admin</h1>

          <p>
            Manage articles, drafts, categories and publishing
            from one place.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <div className="admin-topbar">
          <span>
            Signed in as <strong>{email}</strong>
          </span>

          <button
            type="button"
            onClick={handleLogout}
            className="admin-logout-button"
          >
            Logout
          </button>
        </div>

        <section className="admin-dashboard-grid">
          <Link
            href="/admin/new-article"
            className="admin-dashboard-card"
          >
            <span className="admin-card-icon">✍️</span>

            <h2>New Article</h2>

            <p>
              Create a new Government salary, DA, pension or
              Pay Commission article.
            </p>

            <span className="admin-card-link">
              Create Article →
            </span>
          </Link>

          <Link
            href="/admin/articles"
            className="admin-dashboard-card"
          >
            <span className="admin-card-icon">📰</span>

            <h2>All Articles</h2>

            <p>
              View published articles and manage existing
              content.
            </p>

            <span className="admin-card-link">
              View Articles →
            </span>
          </Link>

          <Link
            href="/admin/drafts"
            className="admin-dashboard-card"
          >
            <span className="admin-card-icon">📝</span>

            <h2>Drafts</h2>

            <p>
              Continue editing articles that have not been
              published yet.
            </p>

            <span className="admin-card-link">
              View Drafts →
            </span>
          </Link>
          <Link
  href="/admin/categories"
  className="admin-dashboard-card"
>
  <h3>Manage Categories</h3>

  <p>
    Add or remove article categories.
  </p>
</Link>
<Link
  href="/admin/subcategories"
  className="admin-dashboard-card"
>
  <span className="admin-card-icon">🗂️</span>

  <h2>Manage Subcategories</h2>

  <p>
    Add or remove subcategories under an existing article
    category.
  </p>

  <span className="admin-card-link">
    Manage Subcategories →
  </span>
</Link>
        </section>
      </div>
    </main>
  );
}