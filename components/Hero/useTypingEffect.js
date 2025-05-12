import { useState, useEffect } from "react";
import { titlesDict } from "./localization";

export function useTypingEffect(language) {
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typing effect when language changes
  useEffect(() => {
    setTypedText("");
    setCharIndex(0);
    setTitleIndex(0);
    setIsDeleting(false);
  }, [language]);

  // Handle typing animation
  useEffect(() => {
    const titles = titlesDict[language] || titlesDict.tr;
    const currentTitle = titles[titleIndex];

    const type = () => {
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, language]);

  return typedText;
}
