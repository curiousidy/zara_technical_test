'use client'
import Image from "next/image";
import styles from "../modules/home/section_six.module.css";
import img01 from "@/public/home_images/section_six/img01.png";
import img02 from "@/public/home_images/section_six/img02.png";
import img03 from "@/public/home_images/section_six/img03.png";
import img04 from "@/public/home_images/section_six/img04.png";
import img05 from "@/public/home_images/section_six/img05.png";
import { useGsapDraggableSlider } from '../hooks/useGsapDraggableSlider.js';


const SectionSix = () => {
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
            <p className={styles.p}>
                <span >When Zara Origins launched its first two collection for the winter and summer seasons,
                    the constantly evoluing project was defined by thes statement. After two editions allowing
                    for experimentation within the collection, the approach for the third editon has evolved
                    naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.
                </span>
                <span>
                    When Zara Origins launched its first two collection for the winter and summer seasons,
                    the constantly evoluing project was defined by thes statement. After two editions allowing
                    for experimentation within the collection, the approach for the third editon has evolved
                    naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.When Zara
                    Origins launched its first two collection for the winter and summer seasons, the constantly
                    evoluing project was defined by thes statement. After two editions allowing for experimentation
                    within.
                </span>

            </p>
        </section>
    )
}

export default SectionSix