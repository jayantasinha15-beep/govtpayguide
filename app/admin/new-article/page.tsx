"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Category = {
  id: string;
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

export default function NewArticlePage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [status, setStatus] =
    useState("Official Update");

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

  const [
    imagePreview,
    setImagePreview,
  ] = useState("");

  const [
    imageUploading,
    setImageUploading,
  ] = useState(false);

  const [featured, setFeatured] =
    useState(false);

  const [published, setPublished] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  /* =========================================
     AUTH CHECK + LOAD CATEGORIES
  ========================================= */

  useEffect(() => {
    const checkAdminAndLoadCategories =
      async () => {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          router.replace(
            "/admin/login"
          );

          return;
        }

        const {
          data: categoryData,
          error: categoryError,
        } = await supabase
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
          const loadedCategories =
            categoryData ?? [];

          setCategories(
            loadedCategories
          );

          if (
            loadedCategories.length > 0
          ) {
            setCategory(
              loadedCategories[0].name
            );
          }
        }

        setCheckingAuth(false);
      };

    checkAdminAndLoadCategories();
  }, [router]);

  /* =========================================
     SLUG PREVIEW
  ========================================= */

  const previewSlug =
    useMemo(() => {
      return slug || makeSlug(title);
    }, [slug, title]);

  /* =========================================
     TITLE CHANGE
  ========================================= */

  const handleTitleChange = (
    value: string
  ) => {
    setTitle(value);

    if (!slug) {
      setSlug(
        makeSlug(value)
      );
    }
  };

  /* =========================================
     IMAGE UPLOAD
  ========================================= */

  async function handleImageUpload(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");
    setMessage("");

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {
      setError(
        "Please upload a JPG, PNG or WEBP image."
      );

      event.target.value = "";

      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setError(
        "Image size must be less than 5 MB."
      );

      event.target.value = "";

      return;
    }

    setImageUploading(true);

    const originalExtension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase();

    const safeExtension =
      originalExtension ||
      "jpg";

    const randomName =
      Math.random()
        .toString(36)
        .substring(2, 10);

    const fileName =
      `${Date.now()}-${randomName}.${safeExtension}`;

    const filePath =
      `featured/${fileName}`;

    const {
      error: uploadError,
    } =
      await supabase.storage
        .from(
          "article-images"
        )
        .upload(
          filePath,
          file,
          {
            cacheControl:
              "3600",
            upsert: false,
            contentType:
              file.type,
          }
        );

    if (uploadError) {
      console.error(
        "Image upload error:",
        uploadError
      );

      setError(
        uploadError.message
      );

      setImageUploading(false);

      event.target.value = "";

      return;
    }

    const {
      data: publicUrlData,
    } =
      supabase.storage
        .from(
          "article-images"
        )
        .getPublicUrl(
          filePath
        );

    const publicUrl =
      publicUrlData.publicUrl;

    setFeaturedImage(
      publicUrl
    );

    setImagePreview(
      publicUrl
    );

    setImageUploading(
      false
    );

    setMessage(
      "Featured image uploaded successfully."
    );
  }

  /* =========================================
     REMOVE IMAGE
  ========================================= */

  function handleRemoveImage() {
    setFeaturedImage("");
    setImagePreview("");
    setMessage("");
  }

  /* =========================================
     SUBMIT ARTICLE
  ========================================= */

  const handleSubmit =
    async (
      e: FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      setMessage("");
      setError("");

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

      if (!content.trim()) {
        setError(
          "Article content is required."
        );

        return;
      }

      if (!category) {
        setError(
          "Please select a category."
        );

        return;
      }

      if (imageUploading) {
        setError(
          "Please wait for the image upload to finish."
        );

        return;
      }

      const finalSlug =
        makeSlug(
          slug || title
        );

      setSaving(true);

      const {
        error: insertError,
      } =
        await supabase
          .from("articles")
          .insert({
            title:
              title.trim(),

            slug:
              finalSlug,

            description:
              description.trim(),

            category,

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
                ? new Date().toISOString()
                : null,
          });

      setSaving(false);

      if (insertError) {
        setError(
          insertError.message
        );

        return;
      }

      setMessage(
        published
          ? "Article published successfully."
          : "Article saved as draft successfully."
      );

      setTitle("");
      setSlug("");
      setDescription("");

      if (
        categories.length > 0
      ) {
        setCategory(
          categories[0].name
        );
      } else {
        setCategory("");
      }

      setStatus(
        "Official Update"
      );

      setContent("");
      setMetaTitle("");
      setMetaDescription("");
      setKeywords("");
      setFeaturedImage("");
      setImagePreview("");
      setFeatured(false);
      setPublished(false);
    };

  /* =========================================
     LOADING
  ========================================= */

  if (checkingAuth) {
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
          Checking admin access...
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
            Create New Article
          </h1>

          <p>
            Write and publish Government salary,
            DA, Pay Commission, pension and
            employee updates.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <form
          className="admin-article-form"
          onSubmit={
            handleSubmit
          }
        >
          {/* =====================================
              ARTICLE DETAILS
          ====================================== */}

          <section className="admin-form-card">
            <div className="admin-form-heading">
              <h2>
                Article Details
              </h2>

              <p>
                Add the main article information
                that readers will see.
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
                  handleTitleChange(
                    e.target.value
                  )
                }
                placeholder="Example: Tripura DA Latest Update..."
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
                placeholder="tripura-da-latest-update"
              />

              {previewSlug && (
                <small>
                  URL: /updates/
                  {previewSlug}
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
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                placeholder="Short summary for homepage, search and update cards..."
              />
            </div>

            {/* CATEGORY + STATUS */}

            <div className="admin-form-row">
              <div className="admin-field">
                <label htmlFor="category">
                  Category
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }
                  disabled={
                    categories.length === 0
                  }
                >
                  {categories.length === 0 ? (
                    <option value="">
                      No categories found
                    </option>
                  ) : (
                    categories.map(
                      (item) => (
                        <option
                          key={item.id}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      )
                    )
                  )}
                </select>

                {categories.length === 0 && (
                  <small>
                    Add categories from
                    /admin/categories first.
                  </small>
                )}
              </div>

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
                </select>
              </div>
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
                placeholder={`Example:

## Latest Update

Tripura Government employees are receiving **36% DA**.

## Key Details

- DA Rate: **36%**
- Effective Date: **1 October 2025**

1. Check Basic Pay
2. Apply DA percentage`}
              />

              <small>
                Formatting: ## Heading, ### Subheading,
                **bold**, - bullet list, 1. numbered list
              </small>
            </div>
          </section>

          {/* =====================================
              SEO & FEATURED
          ====================================== */}

          <section className="admin-form-card">
            <div className="admin-form-heading">
              <h2>
                SEO & Featured Settings
              </h2>

              <p>
                Add metadata, upload a featured
                image and choose whether the article
                should be featured.
              </p>
            </div>

            {/* SEO TITLE */}

            <div className="admin-field">
              <label htmlFor="metaTitle">
                SEO Title
              </label>

              <input
                id="metaTitle"
                type="text"
                value={metaTitle}
                onChange={(e) =>
                  setMetaTitle(
                    e.target.value
                  )
                }
                placeholder="Leave empty to use article title"
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
                placeholder="Leave empty to use short description"
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
                value={keywords}
                onChange={(e) =>
                  setKeywords(
                    e.target.value
                  )
                }
                placeholder="Tripura DA, government employees, salary update..."
              />
            </div>

            {/* =====================================
                FEATURED IMAGE UPLOAD
            ====================================== */}

            <div className="admin-field">
              <label htmlFor="featuredImageUpload">
                Featured Image
              </label>

              <input
                id="featuredImageUpload"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={
                  handleImageUpload
                }
                disabled={
                  imageUploading
                }
              />

              <small>
                JPG, PNG or WEBP. Maximum 5 MB.
              </small>

              {imageUploading && (
                <div className="admin-upload-status">
                  Uploading image...
                </div>
              )}

              {featuredImage && (
                <div className="admin-upload-preview-wrapper">
                  <div className="admin-image-preview">
                    <img
                      src={
                        imagePreview ||
                        featuredImage
                      }
                      alt="Featured image preview"
                    />
                  </div>

                  <div className="admin-field">
                    <label htmlFor="featuredImageUrl">
                      Image URL
                    </label>

                    <input
                      id="featuredImageUrl"
                      type="text"
                      value={
                        featuredImage
                      }
                      readOnly
                      className="admin-image-url"
                    />
                  </div>

                  <button
                    type="button"
                    className="admin-remove-image"
                    onClick={
                      handleRemoveImage
                    }
                  >
                    Remove Image
                  </button>
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
                  Publish article now
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

          {/* ACTION */}

          <div className="admin-form-actions">
            <button
              type="submit"
              className="admin-publish-button"
              disabled={
                saving ||
                imageUploading ||
                categories.length === 0
              }
            >
              {saving
                ? "Saving..."
                : imageUploading
                  ? "Uploading Image..."
                  : published
                    ? "Publish Article"
                    : "Save Draft"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}