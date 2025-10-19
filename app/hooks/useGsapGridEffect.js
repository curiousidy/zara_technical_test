import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const useGsapGridEffect = (options = {}) => {
  const {
    staggerAmount = 1.2,
    staggerFrom = "start",
    itemDistance = 60,
    itemDuration = 0.8,
    hoverScale = 1.05,
    titleDistance = 30,
    enableHover = true
  } = options;

  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: titleDistance,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }

      // Animación del grid con stagger
      if (gridRef.current) {
        const images = gridRef.current.querySelectorAll('img');
        
        gsap.from(images, {
          y: itemDistance,
          opacity: 0,
          duration: itemDuration,
          ease: "power3.out",
          stagger: {
            amount: staggerAmount,
            from: staggerFrom,
            ease: "power2.inOut"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });

        // Efecto hover
        if (enableHover) {
          images.forEach(img => {
            img.addEventListener('mouseenter', () => {
              gsap.to(img, {
                scale: hoverScale,
                duration: 0.4,
                ease: "power2.out"
              });
            });

            img.addEventListener('mouseleave', () => {
              gsap.to(img, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
              });
            });
          });
        }

        ScrollTrigger.refresh();
      }
    });

    return () => ctx.revert();
  }, [staggerAmount, staggerFrom, itemDistance, itemDuration, hoverScale, titleDistance, enableHover]);

  return { titleRef, gridRef };
};