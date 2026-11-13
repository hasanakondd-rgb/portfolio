import { useEffect, useState } from "react";

// Returns the id of the section currently in view while scrolling.
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });

      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (reachedBottom) current = sectionIds[sectionIds.length - 1];

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
