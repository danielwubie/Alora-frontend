// src/component/scroll.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
   

   
    const root = document.getElementById("root");
    if (root && root.scrollHeight > root.clientHeight) {
      root.scrollTop = 0;
     
      return;
    }

  
    const html = document.documentElement;
    if (html.scrollHeight > window.innerHeight) {
      html.scrollTop = 0;
      
      return;
    }

    
    const body = document.body;
    if (body.scrollHeight > window.innerHeight) {
      body.scrollTop = 0;
 
      return;
    }

    
    window.scrollTo(0, 0);
   

  }, [pathname, hash]);

  return null;
}