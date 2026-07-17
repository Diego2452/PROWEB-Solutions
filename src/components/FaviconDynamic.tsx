"use client";
import { useEffect } from "react";

export default function FaviconDynamic() {
  useEffect(() => {
    function applyFavicon() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // Dark mode → white logo visible on dark tab
      // Light mode → black logo visible on light tab
      const href = isDark ? "/LogoWhite.png" : "/LogoBlack.png";

      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][data-dynamic]');
      if (!link) {
        // Remove any existing favicon links that may conflict
        document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
          .forEach(el => el.remove());
        link = document.createElement("link");
        link.rel  = "icon";
        link.type = "image/png";
        link.setAttribute("data-dynamic", "true");
        document.head.appendChild(link);
      }
      link.href = href;
    }

    applyFavicon();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", applyFavicon);
    return () => mq.removeEventListener("change", applyFavicon);
  }, []);

  return null;
}
