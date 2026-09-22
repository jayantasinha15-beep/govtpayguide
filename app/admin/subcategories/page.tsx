"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type Subcategory = {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  created_at: string;
};

function createSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminSubcategoriesPage() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");

    const [
      {
        data: { user },
      },
      categoriesResult,
      subcategoriesResult,
    ] = await Promise.all([
      supabase.auth.getUser(),

      supabase
        .from("categories")
        .select("id, name, slug")
        .order("name", { ascending: true }),

      supabase
        .from("subcategories")
        .select("id, category_id, name, slug, created_at")
        .order("created_at", { ascending: false }),
    ]);

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    if (categoriesResult.error) {
      setErrorMessage(categoriesResult.error.message);
      setLoading(false);
      return;
    }

    if (subcategoriesResult.error) {
      setErrorMessage(subcategoriesResult.error.message);
      setLoading(false);
      return;
    }

    setCategories(categoriesResult.data ?? []);
    setSubcategories(subcategoriesResult.data ?? []);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const cleanName = name.trim();
    const slug = createSlug(cleanName);

    if (!categoryId) {
      setErrorMessage("Please select a parent category.");
      return;
    }

    if (!cleanName) {
      setErrorMessage("Please enter a subcategory name.");
      return;
    }

    if (!slug) {
      setErrorMessage("Please enter a valid subcategory name.");
      return;
    }

    setSaving(true);

    const { data, error } = await supabase
      .from("subcategories")
      .insert({
        category_id: categoryId,
        name: cleanName,
        slug,
      })
      .select("id, category_id, name, slug, created_at")
      .single();

    setSaving(false);

    if (error) {
      if (error.code === "23505") {
        setErrorMessage(
          "This subcategory already exists under the selected category."
        );
      } else {
        setErrorMessage(error.message);
      }

      return;
    }

    if (data) {
      setSubcategories((current) => [data, ...current]);
    }

    setName("");
    setSuccessMessage("Subcategory added successfully.");
  };

  const handleDelete = async (subcategory: Subcategory) => {
    const shouldDelete = window.confirm(
      `Delete the subcategory "${subcategory.name}"? Existing articles will not be deleted.`
    );

    if (!shouldDelete) return;

    setDeletingId(subcategory.id);
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase
      .from("subcategories")
      .delete()
      .eq("id", subcategory.id);

    setDeletingId("");

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSubcategories((current) =>
      current.filter((item) => item.id !== subcategory.id)
    );

    setSuccessMessage("Subcategory deleted successfully.");
  };

  const getCategoryName = (id: string) => {
    return (
      categories.find((category) => category.id === id)?.name ??
      "Unknown Category"
    );
  };

  if (loading) {
    return (
      <main>
        <div
          className="container"
          style={{ padding: "80px 20px" }}
        >
          Loading subcategories...
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Admin</span>

          <h1>Manage Subcategories</h1>

          <p>
            Create optional subcategories under your existing article
            categories.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <div className="admin-topbar">
          <Link href="/admin" className="admin-card-link">
            ← Back to Admin
          </Link>

          <Link href="/admin/categories" className="admin-card-link">
            Manage Categories →
          </Link>
        </div>

        <div className="admin-category-layout">
          <section className="admin-form-card">
            <h2>Add Subcategory</h2>

            <p>
              Select a parent category and enter the new subcategory
              name.
            </p>

            <form
              className="admin-category-form"
              onSubmit={handleSubmit}
            >
              <div className="admin-form-group">
                <label htmlFor="parent-category">
                  Parent Category
                </label>

                <select
                  id="parent-category"
                  value={categoryId}
                  onChange={(event) =>
                    setCategoryId(event.target.value)
                  }
                  disabled={saving}
                  required
                >
                  <option value="">Select Category</option>

                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label htmlFor="subcategory-name">
                  Subcategory Name
                </label>

                <input
                  id="subcategory-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Example: SBI"
                  disabled={saving}
                  maxLength={80}
                  required
                />
              </div>

              {name.trim() && (
                <p className="admin-slug-preview">
                  Slug:{" "}
                  <strong>
                    {createSlug(name) || "invalid-slug"}
                  </strong>
                </p>
              )}

              {errorMessage && (
                <div className="admin-message admin-message-error">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="admin-message admin-message-success">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                className="admin-submit-button"
                disabled={saving || !categories.length}
              >
                {saving ? "Adding..." : "Add Subcategory"}
              </button>
            </form>
          </section>

          <section className="admin-list-card">
            <div className="admin-list-heading">
              <div>
                <span className="section-label">
                  Subcategories
                </span>

                <h2>Existing Subcategories</h2>
              </div>

              <span>
                {subcategories.length}{" "}
                {subcategories.length === 1
                  ? "subcategory"
                  : "subcategories"}
              </span>
            </div>

            {subcategories.length > 0 ? (
              <div className="admin-category-list">
                {subcategories.map((subcategory) => (
                  <div
                    className="admin-category-item"
                    key={subcategory.id}
                  >
                    <div>
                      <strong>{subcategory.name}</strong>

                      <p>
                        Category:{" "}
                        {getCategoryName(
                          subcategory.category_id
                        )}
                      </p>

                      <span>/{subcategory.slug}</span>
                    </div>

                    <button
                      type="button"
                      className="admin-delete-button"
                      onClick={() =>
                        handleDelete(subcategory)
                      }
                      disabled={
                        deletingId === subcategory.id
                      }
                    >
                      {deletingId === subcategory.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="search-empty-state">
                <h3>No subcategories added</h3>

                <p>
                  Select a parent category and create your first
                  subcategory.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}