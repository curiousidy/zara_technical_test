'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapCardEffect = (options = {}) => {
  const {
    scale = 0.8,
    opacity = 0,
    y = -100,
    scrub = 1.5
  } = options;

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        scale,
        opacity,
        y,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub,
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [scale, opacity, y, scrub]);

  return sectionRef;
};