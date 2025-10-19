import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const useGsapDraggableSlider = (options = {}) => {
  const {
    edgeResistance = 0.75,
    inertia = true,
    throwProps = true,
    duration = 0.8,
    ease = 'power2.out',
    slideSelector = '.slide',
    initialDelay = 100
  } = options;

  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const guideRef = useRef(null);
  const draggableInstance = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const calculateBounds = () => {
      const container = containerRef.current;
      const slider = sliderRef.current;
      const guide = guideRef.current;

      if (!container || !slider || !guide) return;

      const slides = slider.querySelectorAll(slideSelector);
      if (slides.length === 0) return;

      const viewportWidth = container.offsetWidth;
      const sliderWidth = slider.scrollWidth;

      const maxDragX = -(sliderWidth - viewportWidth);

      const maxDragGuide = maxDragX / 2;

      gsap.set(slider, { x: 0 });
      gsap.set(guide, { width: sliderWidth, x: 0 });

      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }

      draggableInstance.current = Draggable.create(guide, {
        type: 'x',
        edgeResistance,
        bounds: { minX: maxDragGuide, maxX: 0 },
        inertia,
        throwProps,
        onDrag: function () {
          const newX = this.x * 2;
          const clampedX = Math.max(maxDragX, Math.min(0, newX));
          gsap.to(slider, {
            duration,
            x: clampedX,
            ease
          });
        },
        onThrowUpdate: function () {
          const newX = this.x * 2;
          const clampedX = Math.max(maxDragX, Math.min(0, newX));
          gsap.to(slider, {
            duration,
            x: clampedX,
            ease
          });
        }
      })[0];
    };

    const timer = setTimeout(calculateBounds, initialDelay);
    window.addEventListener('resize', calculateBounds);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateBounds);
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, [edgeResistance, inertia, throwProps, duration, ease, slideSelector, initialDelay]);

  return { containerRef, sliderRef, guideRef };
};