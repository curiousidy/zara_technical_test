import Image from "next/image";
import styles_section_eigth from "../modules/home/section_eigth.module.css";
import section_eigth_right_column from "@/public/home_images/section_eigth/section_eigth.png";


const SectionEight = () => {
  return (
   <section className={styles_section_eigth.container}>
          <Image
            src={section_eigth_right_column}
            alt="section_two"
            priority
            className={styles_section_eigth.image}
          />
          <div className={styles_section_eigth.right_column}>
            <p>
              When Zara Origins launched its first two collection for the winter
              and summer seasons, the constantly evoluing project was defined by
              thes statement. After two editions allowing for experimentation within
              the collection, the approach for the third editon has evolved naturally
              solidifying Zara Origins as a.
            </p>
          </div>
        </section>
  )
}

export default SectionEight