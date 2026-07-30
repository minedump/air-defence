// useSmoothScroll.ts
import { useCallback } from "react";

export const useSmoothScroll = (headerHeight: number = 64) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [headerHeight]);

  return { scrollToSection };
};
