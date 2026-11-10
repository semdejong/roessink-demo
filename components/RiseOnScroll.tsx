"use client";

import { useEffect } from "react";

/** One-time fade for sections that start below the fold. In-view content stays visible. */
export default function RiseOnScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = [...document.querySelectorAll<HTMLElement>(".rise")];
    if (reduce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("rise-wait");
          entry.target.classList.add("rise-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    for (const node of nodes) {
      const top = node.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.92) continue;
      node.classList.add("rise-wait");
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
