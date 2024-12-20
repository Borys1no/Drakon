import React, { useEffect } from "react";
import "./Animation.css";

const Animation = ({ children, className }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${className}`);

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        const isElementVisible =
          rect.top < window.innerHeight && rect.bottom >= 0;

        if (isElementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className]);

  return <div className={className}>{children}</div>;
};

export default Animation;
