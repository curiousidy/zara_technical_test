import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHeroEffect = (options = {}) => {
  const {
    textDistance = -100,
    textDuration = 1.2,
    imageDuration = 1.4,
    startTrigger = "top 80%"
  } = options;

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current, {
          x: textDistance,
          opacity: 0,
          duration: textDuration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: startTrigger,
            toggleActions: "play none none none"
          }
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: "inset(0 100% 0 0)",
          duration: imageDuration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: startTrigger,
            toggleActions: "play none none none"
          }
        });
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [textDistance, textDuration, imageDuration, startTrigger]);

  return { textRef, imageRef };
};