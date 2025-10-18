import Image from "next/image";

import styles_section_three from "../modules/home/section_three.module.css";
import section_three from "@/public/home_images/section_three/section_three.png";

export const SectionThree = () => {
  return (
     <section className={styles_section_three.container}>
          <Image
            src={section_three}
            alt="section_two"
            priority
            className={styles_section_three.image}
          />
          <div className={styles_section_three.right_column}>
            <div className={styles_section_three.texts_container}>
              <p>ZARA ORIGINS</p>
              <p>#Permanent Collection</p>
              <p>
                Zara Origins is a project focused upon building a contemporary wardrobe.
              </p>
              <p>
                The aim is to conceive, create and offer garments which are newly-refined
              </p>
              <p>
                archetypes of their kind, fabricated in the finest materials, and manufactured
                with high standards of expertise and craft. It harnesses progressive desing to combine
                modern concepts with outstanding valve.
              </p>
            </div>
          </div>
        </section>
  )
}
