import Image from "next/image";
import styles_section_two from "../modules/home/section_two.module.css";
import section_two from "@/public/home_images/section_two/section_two.png";

const SectionTwo = () => {
  return (
          <section>
          <Image
            src={section_two}
            alt="section_two"
            className={styles_section_two.image}
            priority
          />
        </section>

  )
}

export default SectionTwo