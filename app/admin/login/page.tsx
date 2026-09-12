"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    setLoading(false);

    if (loginError) {
      setError(loginError.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Admin</span>
          <h1>Admin Login</h1>
          <p>
            Sign in to manage GovtPayGuide articles and publishing.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <div className="admin-login-wrapper">
          <form
            className="admin-login-card"
            onSubmit={handleLogin}
          >
            <h2>Sign In</h2>

            <p>
              Use your GovtPayGuide administrator account.
            </p>

            <div className="admin-field">
              <label htmlFor="admin-email">Email</label>

              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="admin-field">
              <label htmlFor="admin-password">
                Password
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div className="admin-message admin-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="admin-publish-button admin-login-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}