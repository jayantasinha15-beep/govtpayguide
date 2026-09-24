"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import { supabase } from "@/lib/supabase";

type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory_id: string | null;
  status: string;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  featured_image: string | null;
  featured: boolean;
  published: boolean;
  published_at: string | null;
  updated_at: string | null;
};

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
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function EditArticlePage() {
  const params = useParams();
  const router = useRouter();

  const articleId =
    params.id as string;

  const [
    checkingAuth,
    setCheckingAuth,
  ] = useState(true);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  const [
    categories,
    setCategories,
  ] = useState<Category[]>([]);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [category, setCategory] =
    useState("");

  const [subcategories, setSubcategories] =
    useState<Subcategory[]>([]);

  const [subcategoryId, setSubcategoryId] =
    useState("");

  const [loadingSubcategories, setLoadingSubcategories] =
    useState(false);

  const [status, setStatus] =
    useState("");

  const [content, setContent] =
    useState("");

  const [metaTitle, setMetaTitle] =
    useState("");

  const [
    metaDescription,
    setMetaDescription,
  ] = useState("");

  const [keywords, setKeywords] =
    useState("");

  const [
    featuredImage,
    setFeaturedImage,
  ] = useState("");

  const [featured, setFeatured] =
    useState(false);

  const [published, setPublished] =
    useState(false);
    const [
  originalPublishedAt,
  setOriginalPublishedAt,
] = useState<string | null>(null);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  /* =========================================
     AUTH + CATEGORIES + ARTICLE
  ========================================= */

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } =
        await supabase.auth.getUser();

      if (userError || !user) {
        router.replace(
          "/admin/login"
        );

        return;
      }

      setCheckingAuth(false);

      /* LOAD CATEGORIES */

      const {
        data: categoryData,
        error: categoryError,
      } =
        await supabase
          .from("categories")
          .select(`
            id,
            name,
            slug
          `)
          .order("name", {
            ascending: true,
          });

      if (categoryError) {
        console.error(
          "Category load error:",
          categoryError
        );

        setError(
          "Failed to load categories."
        );
      } else {
        setCategories(
          categoryData ?? []
        );
      }

      /* LOAD ARTICLE */

      const {
        data,
        error: fetchError,
      } =
        await supabase
          .from("articles")
          .select("*")
          .eq(
            "id",
            articleId
          )
          .single<Article>();

      if (
        fetchError ||
        !data
      ) {
        setError(
          fetchError?.message ||
            "Article not found."
        );

        setLoading(false);

        return;
      }

      setTitle(
        data.title
      );

      setSlug(
        data.slug
      );

      setDescription(
        data.description
      );

      setCategory(
        data.category
      );

      setSubcategoryId(
        data.subcategory_id ?? ""
      );

      setStatus(
        data.status
      );

      setContent(
        data.content
      );

      setMetaTitle(
        data.meta_title ?? ""
      );

      setMetaDescription(
        data.meta_description ?? ""
      );

      setKeywords(
        data.keywords ?? ""
      );

      setFeaturedImage(
        data.featured_image ?? ""
      );

      setFeatured(
        data.featured
      );

      setPublished(
        data.published
      );
      setOriginalPublishedAt(
  data.published_at ?? null
);

      setLoading(false);
    };

    loadPage();
  }, [articleId, router]);

  /* =========================================
     LOAD SUBCATEGORIES
  ========================================= */

  useEffect(() => {
    const loadSubcategories = async () => {
      setSubcategories([]);

      if (!category || categories.length === 0) {
        return;
      }

      const selectedCategory = categories.find(
        (item) => item.name === category
      );

      if (!selectedCategory) {
        return;
      }

      setLoadingSubcategories(true);

      const {
        data: subcategoryData,
        error: subcategoryError,
      } = await supabase
        .from("subcategories")
        .select(`
          id,
          category_id,
          name,
          slug
        `)
        .eq("category_id", selectedCategory.id)
        .order("name", {
          ascending: true,
        });

      setLoadingSubcategories(false);

      if (subcategoryError) {
        console.error(
          "Subcategory load error:",
          subcategoryError
        );

        setError(
          "Failed to load subcategories."
        );

        return;
      }

      setSubcategories(
        subcategoryData ?? []
      );
    };

    loadSubcategories();
  }, [category, categories]);

  /* =========================================
     UPDATE ARTICLE
  ========================================= */

  const handleUpdate = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!title.trim()) {
      setError(
        "Article title is required."
      );

      return;
    }

    if (
      !description.trim()
    ) {
      setError(
        "Article description is required."
      );

      return;
    }

    if (!category) {
      setError(
        "Please select a category."
      );

      return;
    }

    if (!content.trim()) {
      setError(
        "Article content is required."
      );

      return;
    }

    setSaving(true);

    const {
      error: updateError,
    } =
      await supabase
        .from("articles")
        .update({
          
          title:
            title.trim(),

          slug:
            makeSlug(
              slug || title
            ),

          description:
            description.trim(),

          category,

          subcategory_id:
            subcategoryId || null,

          status,

          content:
            content.trim(),

          meta_title:
            metaTitle.trim() ||
            title.trim(),

          meta_description:
            metaDescription.trim() ||
            description.trim(),

          keywords:
            keywords.trim() ||
            null,

          featured_image:
            featuredImage.trim() ||
            null,

          featured,

          published,

          published_at:
  published
    ? originalPublishedAt ??
      new Date().toISOString()
    : null,

updated_at:
  new Date().toISOString(),
        })
        .eq(
          "id",
          articleId
        );

    setSaving(false);

    if (updateError) {
      setError(
        updateError.message
      );

      return;
    }

    setMessage(
      published
        ? "Article published successfully."
        : "Article updated successfully."
    );
  };

  /* =========================================
     DELETE ARTICLE
  ========================================= */

  const handleDelete =
    async () => {
      const confirmed =
        window.confirm(
          "Are you sure you want to delete this article?"
        );

      if (!confirmed) {
        return;
      }

      setDeleting(true);
      setError("");

      const {
        error: deleteError,
      } =
        await supabase
          .from("articles")
          .delete()
          .eq(
            "id",
            articleId
          );

      setDeleting(false);

      if (deleteError) {
        setError(
          deleteError.message
        );

        return;
      }

      router.push(
        "/admin/drafts"
      );

      router.refresh();
    };

  /* =========================================
     LOADING
  ========================================= */

  if (
    checkingAuth ||
    loading
  ) {
    return (
      <main>
        <div
          className="container"
          style={{
            padding:
              "80px 20px",
            textAlign:
              "center",
          }}
        >
          Loading article...
        </div>
      </main>
    );
  }

  /* =========================================
     PAGE
  ========================================= */

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">
            Admin
          </span>

          <h1>
            Edit Article
          </h1>

          <p>
            Update, publish or delete this
            GovtPayGuide article.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <form
          className="admin-article-form"
          onSubmit={
            handleUpdate
          }
        >
          {/* ARTICLE DETAILS */}

          <section className="admin-form-card">
            <div className="admin-form-heading">
              <h2>
                Article Details
              </h2>

              <p>
                Edit the main article
                information.
              </p>
            </div>

            {/* TITLE */}

            <div className="admin-field">
              <label htmlFor="title">
                Article Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
              />
            </div>

            {/* SLUG */}

            <div className="admin-field">
              <label htmlFor="slug">
                URL Slug
              </label>

              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) =>
                  setSlug(
                    makeSlug(
                      e.target.value
                    )
                  )
                }
              />

              {slug && (
                <small>
                  URL: /updates/
                  {slug}
                </small>
              )}
            </div>

            {/* DESCRIPTION */}

            <div className="admin-field">
              <label htmlFor="description">
                Short Description
              </label>

              <textarea
                id="description"
                rows={4}
                value={
                  description
                }
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
              />
            </div>

            {/* CATEGORY + SUBCATEGORY */}

            <div className="admin-form-row">
              <div className="admin-field">
                <label htmlFor="category">
                  Category
                </label>

                <select
                  id="category"
                  value={
                    category
                  }
                  onChange={(e) => {
                    setCategory(
                      e.target.value
                    );

                    setSubcategoryId("");
                  }}
                >
                  {/*
                    If an old article has a
                    category that was deleted
                    from categories table,
                    keep it visible.
                  */}

                  {category &&
                    !categories.some(
                      (item) =>
                        item.name ===
                        category
                    ) && (
                      <option
                        value={
                          category
                        }
                      >
                        {category}
                        {" "}
                        (Old Category)
                      </option>
                    )}

                  {categories.map(
                    (item) => (
                      <option
                        key={
                          item.id
                        }
                        value={
                          item.name
                        }
                      >
                        {
                          item.name
                        }
                      </option>
                    )
                  )}

                  {categories.length ===
                    0 &&
                    !category && (
                      <option value="">
                        No categories found
                      </option>
                    )}
                </select>

                {categories.length ===
                  0 && (
                  <small>
                    Add categories from
                    /admin/categories.
                  </small>
                )}
              </div>

              <div className="admin-field">
                <label htmlFor="subcategory">
                  Subcategory{" "}

                  <span
                    style={{
                      color: "#64748b",
                      fontWeight: 500,
                    }}
                  >
                    (Optional)
                  </span>
                </label>

                <select
                  id="subcategory"
                  value={subcategoryId}
                  onChange={(e) =>
                    setSubcategoryId(
                      e.target.value
                    )
                  }
                  disabled={
                    loadingSubcategories ||
                    subcategories.length === 0
                  }
                >
                  <option value="">
                    {loadingSubcategories
                      ? "Loading subcategories..."
                      : subcategories.length > 0
                        ? "No Subcategory"
                        : "No subcategories available"}
                  </option>

                  {subcategories.map(
                    (item) => (
                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    )
                  )}
                </select>

                <small>
                  Optional. Select a subcategory only when
                  it applies to this article.
                </small>
              </div>
            </div>

            {/* ARTICLE TYPE */}

            <div className="admin-field">
                <label htmlFor="status">
                  Article Type
                </label>

                <select
                  id="status"
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value
                    )
                  }
                >
                  <option>
                    Official Update
                  </option>

                  <option>
                    DA Update
                  </option>

                  <option>
                    Analysis
                  </option>

                  <option>
                    Guide
                  </option>
                  <option>
                    Recruitment Notification
                  </option>

                  <option>
                    Recruitment News
                  </option>
                </select>
              </div>

            {/* CONTENT */}

            <div className="admin-field">
              <label htmlFor="content">
                Article Content
              </label>

              <textarea
                id="content"
                rows={18}
                value={content}
                onChange={(e) =>
                  setContent(
                    e.target.value
                  )
                }
              />

              <small>
                Formatting: ## Heading,
                ### Subheading, **bold**,
                - bullet list,
                1. numbered list
              </small>
            </div>
          </section>

          {/* SEO SETTINGS */}

          <section className="admin-form-card">
            <div className="admin-form-heading">
              <h2>
                SEO & Featured Settings
              </h2>
            </div>

            {/* SEO TITLE */}

            <div className="admin-field">
              <label htmlFor="metaTitle">
                SEO Title
              </label>

              <input
                id="metaTitle"
                type="text"
                value={
                  metaTitle
                }
                onChange={(e) =>
                  setMetaTitle(
                    e.target.value
                  )
                }
              />
            </div>

            {/* SEO DESCRIPTION */}

            <div className="admin-field">
              <label htmlFor="metaDescription">
                SEO Description
              </label>

              <textarea
                id="metaDescription"
                rows={3}
                value={
                  metaDescription
                }
                onChange={(e) =>
                  setMetaDescription(
                    e.target.value
                  )
                }
              />
            </div>

            {/* KEYWORDS */}

            <div className="admin-field">
              <label htmlFor="keywords">
                Keywords
              </label>

              <input
                id="keywords"
                type="text"
                value={
                  keywords
                }
                onChange={(e) =>
                  setKeywords(
                    e.target.value
                  )
                }
              />
            </div>

            {/* FEATURED IMAGE */}

            <div className="admin-field">
              <label htmlFor="featuredImage">
                Featured Image URL
              </label>

              <input
                id="featuredImage"
                type="text"
                value={
                  featuredImage
                }
                onChange={(e) =>
                  setFeaturedImage(
                    e.target.value
                  )
                }
              />

              {featuredImage && (
                <div className="admin-upload-preview-wrapper">
                  <div className="admin-image-preview">
                    <img
                      src={
                        featuredImage
                      }
                      alt="Featured image preview"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* CHECKBOXES */}

            <div className="admin-checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={
                    featured
                  }
                  onChange={(e) =>
                    setFeatured(
                      e.target
                        .checked
                    )
                  }
                />

                <span>
                  Feature on homepage
                </span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={
                    published
                  }
                  onChange={(e) =>
                    setPublished(
                      e.target
                        .checked
                    )
                  }
                />

                <span>
                  Publish article
                </span>
              </label>
            </div>
          </section>

          {/* ERROR */}

          {error && (
            <div className="admin-message admin-error">
              {error}
            </div>
          )}

          {/* SUCCESS */}

          {message && (
            <div className="admin-message admin-success">
              {message}
            </div>
          )}

          {/* ACTIONS */}

          <div className="admin-edit-actions">
            <button
              type="submit"
              className="admin-publish-button"
              disabled={
                saving
              }
            >
              {saving
                ? "Saving..."
                : published
                  ? "Update & Publish"
                  : "Update Draft"}
            </button>

            <button
              type="button"
              className="admin-delete-button"
              onClick={
                handleDelete
              }
              disabled={
                deleting
              }
            >
              {deleting
                ? "Deleting..."
                : "Delete Article"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
