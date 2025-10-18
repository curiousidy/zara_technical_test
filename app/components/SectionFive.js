import Image from "next/image";
import styles_section_five from "../modules/home/section_five.module.css";
import column_left from "@/public/home_images/section_five/column_left.png";
import column_right from "@/public/home_images/section_five/column_right.png";
const SectionFive = () => {
    return (
        <section className={styles_section_five.container}>
            <div className={styles_section_five.left_column}>
                <Image
                    src={column_left}
                    alt="section_two"
                    priority
                    className={styles_section_five.car_image}
                />
                <p className={styles_section_five.p}>
                    When Zara Origins launched its first two collection for the winter and summer seasons,
                    the constantly evoluing project was defined by thes statement. After two editions allowing
                    for experimentation within the collection, the approach for the third editon has evolved naturally
                    solidifying Zara Origins as a yearlong offering of wardrobe essentials that will be supplemented
                    with limited edition seasonal piece.
                </p>
            </div>
            <div>
            <Image
                src={column_right}
                alt="section_two"
                priority
                className={styles_section_five.man_image}
            />

            </div>
        </section>
    )
}

export default SectionFive