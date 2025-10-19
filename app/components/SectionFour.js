'use client'
import Image from "next/image";
import styles from "../modules/home/section_four.module.css";
import img01 from "@/public/home_images/section_four/img01.png";
import img02 from "@/public/home_images/section_four/img02.png";
import img03 from "@/public/home_images/section_four/img03.png";
import img04 from "@/public/home_images/section_four/img04.png";
import img05 from "@/public/home_images/section_four/img05.png";
import { useGsapDraggableSlider } from '../hooks/useGsapDraggableSlider.js';

const SectionFour = () => {
 const { containerRef, sliderRef, guideRef } = useGsapDraggableSlider({
    edgeResistance: 0.75,
    duration: 0.8,
    ease: 'power2.out',
    slideSelector: 'li',
    initialDelay: 100
  });

  const images = [img01, img02, img03, img04, img05];

  return (
    <section>
      <div className={styles.carouselContainer} ref={containerRef}>
        <ul className={styles.ul} ref={sliderRef}>
          {images.map((img, index) => (
            <li key={index} className={styles.li}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                className={styles.image}
                priority={index < 3}
              />
            </li>
          ))}
        </ul>
        <div className={styles.guide} ref={guideRef}></div>
      </div>
    </section>
  );
};

export default SectionFour;