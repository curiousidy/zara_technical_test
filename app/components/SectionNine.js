'use client'
import Image from "next/image";
import styles_section_nine from "../modules/home/section_nine.module.css";
import section_nine_img01 from "@/public/home_images/section_nine/grid01.png";
import section_nine_img02 from "@/public/home_images/section_nine/grid02.png";
import section_nine_img03 from "@/public/home_images/section_nine/grid03.png";
import section_nine_img04 from "@/public/home_images/section_nine/grid04.png";
import section_nine_img05 from "@/public/home_images/section_nine/grid05.png";
import section_nine_img06 from "@/public/home_images/section_nine/grid06.png";
import section_nine_img07 from "@/public/home_images/section_nine/grid07.png";
import section_nine_img08 from "@/public/home_images/section_nine/grid08.png";
import section_nine_img09 from "@/public/home_images/section_nine/grid09.png";
import section_nine_img10 from "@/public/home_images/section_nine/grid10.png";
import section_nine_img11 from "@/public/home_images/section_nine/grid11.png";
import section_nine_img12 from "@/public/home_images/section_nine/grid12.png";
import section_nine_img13 from "@/public/home_images/section_nine/grid13.png";
import section_nine_img14 from "@/public/home_images/section_nine/grid14.png";
import section_nine_img15 from "@/public/home_images/section_nine/grid15.png";
import section_nine_img16 from "@/public/home_images/section_nine/grid16.png";
import section_nine_img17 from "@/public/home_images/section_nine/grid17.png";
import section_nine_img18 from "@/public/home_images/section_nine/grid18.png";
import section_nine_img19 from "@/public/home_images/section_nine/grid19.png";
import section_nine_img20 from "@/public/home_images/section_nine/grid20.png";
import section_nine_img21 from "@/public/home_images/section_nine/grid21.png";
import section_nine_img22 from "@/public/home_images/section_nine/grid22.png";
import section_nine_img23 from "@/public/home_images/section_nine/grid23.png";
import section_nine_img24 from "@/public/home_images/section_nine/grid24.png";
import section_nine_img25 from "@/public/home_images/section_nine/grid25.png";
import { useGsapGridEffect } from "../hooks/useGsapGridEffect.js";

const SectionNine = () => {
  const { titleRef, gridRef } = useGsapGridEffect();
  return (
      <section className={styles_section_nine.container}>
      <p ref={titleRef}>SHOP THE COLLECTION</p>
      <div ref={gridRef}>
        <Image
          src={section_nine_img01}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img02}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img03}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img04}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img05}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img06}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img07}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img08}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img09}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img10}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img11}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img12}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img13}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img14}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img15}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img16}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img17}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img18}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img19}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img20}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img21}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img22}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img23}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img24}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
        <Image
          src={section_nine_img25}
          alt="section_two"
          priority
          className={styles_section_nine.image}
        />
      </div>
    </section>
  )
}

export default SectionNine