"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      const formattedDate = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(now);

      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };

    updateDateTime();

    const timer = window.setInterval(updateDateTime, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      {/* LIVE DATE, TIME AND DISCLAIMER */}

      <div className="header-info-bar">
        <div className="container header-info-inner">
          <div
            className="header-live-time"
            aria-label="Current Indian date and time"
          >
            <span
              className="live-indicator"
              aria-hidden="true"
            ></span>

            <span className="header-date">
              {currentDate || "Loading..."}
            </span>

            <span
              className="date-time-divider"
              aria-hidden="true"
            ></span>

            <span className="header-time">
              {currentTime || "--:--:--"}
            </span>

            <span className="time-zone">IST</span>
          </div>

          <div className="header-announcement">
            <span className="announcement-label">
              Important
            </span>

            <div
              className="header-notice"
              aria-label="Website disclaimer"
            >
              <div className="header-notice-track">
                <span>
                  <span>
                    Independent informational website • Always verify salary and job
                    information from official sources
</span>
                </span>

                <span aria-hidden="true">
                  <span>
                    Independent informational website • Always verify salary and job
                    information from official sources
                  </span>
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/disclaimer"
            className="top-disclaimer-link"
            onClick={closeMenu}
          >
            Disclaimer
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* MAIN HEADER */}

      <div className="container header-inner">
        <Link
          href="/"
          className="logo"
          onClick={closeMenu}
        >
          Govt<span>Pay</span>Guide
        </Link>

        <nav
          id="main-navigation"
          className={
            open ? "nav-menu nav-open" : "nav-menu"
          }
          aria-label="Main navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link
            href="/central-government"
            onClick={closeMenu}
          >
            Central Govt
          </Link>

          <Link
            href="/state-government"
            onClick={closeMenu}
          >
            States
          </Link>

          <Link href="/updates" onClick={closeMenu}>
            Updates
          </Link>

          <Link
            href="/calculators"
            onClick={closeMenu}
          >
            Calculators
          </Link>

          <Link href="/pension" onClick={closeMenu}>
            Pension
          </Link>

          <Link
            href="/government-jobs"
            onClick={closeMenu}
          >
            Government Jobs
          </Link>

          <Link href="/guides" onClick={closeMenu}>
            Guides
          </Link>

          <Link
            href="/search"
            className="nav-search"
            onClick={closeMenu}
            aria-label="Search GovtPayGuide"
          >
            <span
              className="nav-search-icon"
              aria-hidden="true"
            >
              ⌕
            </span>

            <span>Search</span>
          </Link>
        </nav>

        <button
          type="button"
          className={
            open
              ? "menu-button menu-button-open"
              : "menu-button"
          }
          onClick={() => setOpen((previous) => !previous)}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}