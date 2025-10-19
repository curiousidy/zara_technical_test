'use client'
import Image from "next/image";
import styles_section_seven from "../modules/home/section_seven.module.css";
import section_seven_column_left from "@/public/home_images/section_seven/column_left.png";
import { useGsapCardEffect } from "@/app/hooks/useGsapCardEffect.js";

const SectionSeven = () => {
  const sectionRef = useGsapCardEffect();
  return (
    <section ref={sectionRef} className={styles_section_seven.container}>
          <Image
            src={section_seven_column_left}
            alt="man on a motorbike"
            priority
            className={styles_section_seven.image}
          />
          <div className={styles_section_seven.right_column}>
            <div>
              <p>
                When Zara Origins launched its first two collection for the winter and summer seasons,
                the constantly evoluing project was defined by thes statement. After two editions allowing
                for experimentation within the collection, the approach for the third editon has evolved
                naturally solidifying Zara Origins as a.
              </p>
              <p>
                When Zara Origins launched its first two collection for the winter and summer seasons,
                the constantly evoluing project was defined by thes statement. After two editions allowing
                for experimentation within the collection, the approach for the third editon has evolved
                naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.When Zara Origins .
              </p>
            </div>
          </div>
        </section>
  )
}

export default SectionSeven