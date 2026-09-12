"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminCategoriesPage() {
  const router = useRouter();

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [name, setName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    checkUserAndLoad();
  }, []);

  async function checkUserAndLoad() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      router.replace("/admin/login");
      return;
    }

    await loadCategories();
  }

  async function loadCategories() {
    setLoading(true);

    const { data, error } =
      await supabase
        .from("categories")
        .select(`
          id,
          name,
          slug,
          created_at
        `)
        .order("name", {
          ascending: true,
        });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setCategories(data ?? []);
    setLoading(false);
  }

  function handleNameChange(
    value: string
  ) {
    setName(value);
    setSlug(makeSlug(value));
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!name.trim()) {
      setError(
        "Category name is required."
      );
      return;
    }

    const finalSlug =
      makeSlug(slug || name);

    if (!finalSlug) {
      setError(
        "Valid category slug is required."
      );
      return;
    }

    setSaving(true);

    const { error: insertError } =
      await supabase
        .from("categories")
        .insert({
          name: name.trim(),
          slug: finalSlug,
        });

    setSaving(false);

    if (insertError) {
      setError(
        insertError.message
      );
      return;
    }

    setMessage(
      "Category added successfully."
    );

    setName("");
    setSlug("");

    await loadCategories();
  }

  async function handleDelete(
    category: Category
  ) {
    const confirmed =
      window.confirm(
        `Delete "${category.name}" category?`
      );

    if (!confirmed) {
      return;
    }

    setDeletingId(
      category.id
    );

    setMessage("");
    setError("");

    const { error: deleteError } =
      await supabase
        .from("categories")
        .delete()
        .eq(
          "id",
          category.id
        );

    if (deleteError) {
      setError(
        deleteError.message
      );
      setDeletingId(null);
      return;
    }

    setCategories(
      (current) =>
        current.filter(
          (item) =>
            item.id !==
            category.id
        )
    );

    setDeletingId(null);

    setMessage(
      "Category deleted successfully."
    );
  }

  if (loading) {
    return (
      <main className="admin-category-page">
        <div className="container">
          <div className="admin-category-loading">
            Loading categories...
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-category-page">
      <div className="container">
        <div className="admin-category-header">
          <div>
            <span className="page-badge">
              Admin
            </span>

            <h1>
              Manage Categories
            </h1>

            <p>
              Add article categories that
              will appear on the New Article
              page.
            </p>
          </div>
        </div>

        <div className="admin-category-layout">
          {/* ADD CATEGORY */}

          <section className="admin-category-card">
            <h2>
              Add New Category
            </h2>

            <form
              onSubmit={
                handleSubmit
              }
            >
              <div className="admin-field">
                <label htmlFor="categoryName">
                  Category Name
                </label>

                <input
                  id="categoryName"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    handleNameChange(
                      e.target.value
                    )
                  }
                  placeholder="Example: Tripura"
                />
              </div>

              <div className="admin-field">
                <label htmlFor="categorySlug">
                  Category Slug
                </label>

                <input
                  id="categorySlug"
                  type="text"
                  value={slug}
                  onChange={(e) =>
                    setSlug(
                      makeSlug(
                        e.target.value
                      )
                    )
                  }
                  placeholder="tripura"
                />

                {slug && (
                  <small>
                    Slug: {slug}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="admin-category-add-button"
                disabled={saving}
              >
                {saving
                  ? "Adding..."
                  : "Add Category"}
              </button>
            </form>

            {error && (
              <div className="admin-message admin-error">
                {error}
              </div>
            )}

            {message && (
              <div className="admin-message admin-success">
                {message}
              </div>
            )}
          </section>

          {/* CATEGORY LIST */}

          <section className="admin-category-card">
            <div className="admin-category-list-heading">
              <div>
                <h2>
                  Existing Categories
                </h2>

                <p>
                  {categories.length}{" "}
                  {categories.length === 1
                    ? "category"
                    : "categories"}
                </p>
              </div>
            </div>

            {categories.length === 0 ? (
              <div className="admin-category-empty">
                No categories found.
              </div>
            ) : (
              <div className="admin-category-list">
                {categories.map(
                  (category) => (
                    <div
                      key={
                        category.id
                      }
                      className="admin-category-item"
                    >
                      <div>
                        <strong>
                          {
                            category.name
                          }
                        </strong>

                        <span>
                          {
                            category.slug
                          }
                        </span>
                      </div>

                      <button
                        type="button"
                        className="admin-category-delete"
                        disabled={
                          deletingId ===
                          category.id
                        }
                        onClick={() =>
                          handleDelete(
                            category
                          )
                        }
                      >
                        {deletingId ===
                        category.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}