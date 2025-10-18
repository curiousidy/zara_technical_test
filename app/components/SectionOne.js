import Image from "next/image";
import styles_section_one from "../modules/home/section_one.module.css";
import intro from "@/public/home_images/section_one/section_one.png";

const SectionOne = () => {
    return (
        <section className={styles_section_one.container}>
            <div className={styles_section_one.left_column}>
                <div className={styles_section_one.text_row}>
                    <span>ZARA ORIGINS</span>
                    <span>
                        <span>
                            Identity by MSM paris
                            Photography by Jaime HAKESWORTH
                        </span>
                        <span>
                            Short movie directed by BYNT
                            Script by David Scearce Produced by Canada
                        </span>
                    </span>
                    <span>inspired by Vivaldi's four seansons</span>
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
    )
}

export default SectionOne