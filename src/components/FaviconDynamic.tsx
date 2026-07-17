"use client";
import { useEffect } from "react";

export default function FaviconDynamic() {
  useEffect(() => {
    function applyFavicon() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const href   = isDark ? "/LogoWhite.png" : "/LogoBlack.png";

      // Nunca borrar links existentes — solo crear/actualizar el nuestro
      let link = document.getElementById("favicon-pweb") as HTMLLinkElement | null;
      if (!link) {
        link      = document.createElement("link");
        link.id   = "favicon-pweb";
        link.rel  = "icon";
        link.type = "image/png";
        document.head.appendChild(link); // al final = toma precedencia
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