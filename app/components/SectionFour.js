import Image from "next/image";
import styles_section_four from "../modules/home/section_four.module.css";
import img01 from "@/public/home_images/section_four/img01.png";
import img02 from "@/public/home_images/section_four/img02.png";
import img03 from "@/public/home_images/section_four/img03.png";
import img04 from "@/public/home_images/section_four/img04.png";
import img05 from "@/public/home_images/section_four/img05.png";
const SectionFour = () => {
  return (
     <section className={styles_section_four.container}>
          <ul className={styles_section_four.ul}>
            <li className={styles_section_four.li}>
              <Image
                src={img01}
                alt="section_two"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img02}
                alt="section_two"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img03}
                alt="section_two"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img04}
                alt="section_two"
                priority
                className={styles_section_four.image}
              />
            </li>
            <li>
              <Image
                src={img05}
                alt="section_two"
                priority
                className={styles_section_four.image}
              />
            </li>
          </ul>
        </section>
  )
}

export default SectionFour