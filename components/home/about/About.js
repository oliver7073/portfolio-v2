import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Oliver, if you haven&apos;t already gathered that by
              now. I&apos;m a ncoming senior Computer Science student passionate
              about technology and financial industries. Currently pursuing my 
              undergraduate degree in Computer Science at the University of 
              Minnesota-Twin Cities.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Outside of work, I manage a sneaker business with $300k+ sales and created
            several applications that helped increase sales and improve efficiency in my
            business along with helping 10K+ clients greatly increase their chances of
            acquiring high-demand products.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I&apos;m always looking forward to solving challenging problems and creating
            products that will lead to success for the company and its users!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
