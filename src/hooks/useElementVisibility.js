import { useState, useEffect } from "react";

// returns true when the top of the element with the given id is at or
// below half the window height (similar to original scroll logic)
export function useElementVisibility(id) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setVisible(rect.top >= window.innerHeight / 2);
    };

    window.addEventListener("scroll", check);
    check();
    return () => window.removeEventListener("scroll", check);
  }, [id]);

  return visible;
}
