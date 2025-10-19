"use client";
import Image from "next/image";
import styles_section_two from "../modules/home/section_two.module.css";
import section_two from "@/public/home_images/section_two/section_two.png";
import { useGsapCardEffect } from "@/app/hooks/useGsapCardEffect.js";

const SectionTwo = () => {
  const sectionRef = useGsapCardEffect();
  return (
    <section ref={sectionRef} style={{ position: 'relative' }}>
      <Image
        src={section_two}
        alt="man in workshop"
        className={styles_section_two.image}
        priority
      />
    </section>
  );
};

export default SectionTwo;