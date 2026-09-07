"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          Govt<span>Pay</span>Guide
        </Link>

        <nav className={open ? "nav-menu nav-open" : "nav-menu"}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/central-government" onClick={closeMenu}>
            Central Govt
          </Link>

          <Link href="/state-government" onClick={closeMenu}>
            States
          </Link>

          <Link href="/calculators" onClick={closeMenu}>
            Calculators
          </Link>
          <Link href="/pension" onClick={closeMenu}>
            Pension
            </Link>
          <Link href="/guides" onClick={closeMenu}>
            Guides
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}