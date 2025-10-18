import Image from "next/image";
import styles_section_one from "./modules/home/section_one/section_one.module.css";
import styles_section_two from "./modules/home/section_two/section_two.module.css";
import styles_section_three from "./modules/home/section_three/section_three.module.css";
import styles_section_four from "./modules/home/section_four/section_four.module.css";
import styles_section_five from "./modules/home/section_five/section_five.module.css";

import styles_section_seven from "./modules/home/section_seven/section_seven.module.css";
import styles_section_eigth from "./modules/home/section_eigth/section_eigth.module.css";
import styles_section_nine from "./modules/home/section_nine/section_nine.module.css";


import intro from "@/public/home_images/section_one/section_one.png";
import section_two from "@/public/home_images/section_two/section_two.png";
import section_three from "@/public/home_images/section_three/section_three.png";
import img01 from "@/public/home_images/section_four/img01.png";
import img02 from "@/public/home_images/section_four/img02.png";
import img03 from "@/public/home_images/section_four/img03.png";
import img04 from "@/public/home_images/section_four/img04.png";
import img05 from "@/public/home_images/section_four/img05.png";
import column_left from "@/public/home_images/section_five/column_left.png";
import column_right from "@/public/home_images/section_five/column_right.png";


import section_seven_column_left from "@/public/home_images/section_seven/column_left.png";
import section_eigth_column_rigth from "@/public/home_images/section_eigth/section_eigth.png";
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

export default function Home() {
  return (
    <div>
      <main className={styles_section_one.maincontainer}>
        {/* section_one */}
        <section className={styles_section_one.container}>
          <div className={styles_section_one.left_column}>
            <div className={styles_section_one.text_row}>
              <p>ZARA ORIGINS</p>
              <p>
                <span>
                  Identity by MSM paris
                  Photography by Jaime HAKESWORTH
                </span>
                <span>
                  Short movie directed by BYNT
                  Script by David Scearce Produced by Canada
                </span>
              </p>
              <p>inspired by Vivaldi's four seansons</p>
            </div>
          </div>
          <div className={styles_section_one.image_wrapper}>
            <Image
              src={intro}
              alt="section_one"
              className={styles_section_one.image}
              priority
            />
          </div>
        </section>

        {/* section_two */}
        <section>
          <Image
            src={section_two}
            alt="section_two"
            className={styles_section_two.image}
            priority
          />
        </section>

        {/* section_thee */}
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

        {/* section_four */}
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

        {/* section_five */}
        <section className={styles_section_five.container}>
          <div className={styles_section_five.left_column}>
            <Image
              src={column_left}
              alt="section_two"
              priority
              className={styles_section_five.image}
            />
            <p className={styles_section_five.p}>
              When Zara Origins launched its first two collection for the winter and summer seasons,
              the constantly evoluing project was defined by thes statement. After two editions allowing
              for experimentation within the collection, the approach for the third editon has evolved naturally
              solidifying Zara Origins as a yearlong offering of wardrobe essentials that will be supplemented
              with limited edition seasonal piece.
            </p>
          </div>
          <Image
            src={column_right}
            alt="section_two"
            priority
            className={styles_section_five.image}
          />
        </section>

        {/* section_six */}

        {/* section_seven */}
        <section className={styles_section_seven.container}>
          <Image
            src={section_seven_column_left}
            alt="section_two"
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


        {/* section_eigth */}
        <section className={styles_section_eigth.container}>
          <Image
            src={section_eigth_column_rigth}
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

        {/* section_nine */}
        <section className={styles_section_nine.container}>
           <p>SHOP THE COLLECTION</p>
          <div>
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
      </main>
    </div>
  );
}
