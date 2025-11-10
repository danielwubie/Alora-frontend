// src/component/scroll.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    console.log("Attempting scroll to top for:", pathname);

    // METHOD 1: Try #root
    const root = document.getElementById("root");
    if (root && root.scrollHeight > root.clientHeight) {
      root.scrollTop = 0;
      console.log("Scrolled #root");
      return;
    }

    // METHOD 2: Try <html>
    const html = document.documentElement;
    if (html.scrollHeight > window.innerHeight) {
      html.scrollTop = 0;
      console.log("Scrolled <html>");
      return;
    }

    // METHOD 3: Try <body>
    const body = document.body;
    if (body.scrollHeight > window.innerHeight) {
      body.scrollTop = 0;
      console.log("Scrolled <body>");
      return;
    }

    // METHOD 4: Force window
    window.scrollTo(0, 0);
    console.log("Forced window.scrollTo(0,0)");

  }, [pathname, hash]);

  return null;
}