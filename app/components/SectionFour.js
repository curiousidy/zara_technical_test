'use client'
import Image from "next/image";
import styles_section_four from "../modules/home/section_four.module.css";
import img01 from "@/public/home_images/section_four/img01.png";
import img02 from "@/public/home_images/section_four/img02.png";
import img03 from "@/public/home_images/section_four/img03.png";
import img04 from "@/public/home_images/section_four/img04.png";
import img05 from "@/public/home_images/section_four/img05.png";
import { useGsapCardEffect } from "@/app/hooks/useGsapCardEffect.js";

const SectionFour = () => {
  const sectionRef = useGsapCardEffect();
  return (
     <section ref={sectionRef} className={styles_section_four.container}>
          <ul className={styles_section_four.ul}>
            <li className={styles_section_four.li}>
              <Image
                src={img01}
                alt="women"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img02}
                alt="man on a bicycle"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img03}
                alt="man meditating"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img04}
                alt="man in forest"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img05}
                alt="man in the street"
                priority
                className={styles_section_four.image}
              />
            </li>
          </ul>
        </section>
  )
}

export default SectionFour