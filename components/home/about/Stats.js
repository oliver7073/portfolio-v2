import styles from "./stats.module.scss";
import { AiFillCode, AiFillSketchCircle, AiFillTool } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">C++</span>
            <span className="chip">C</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">GraphQL</span>
            <span className="chip">OCaml</span>
            <span className="chip">x86 Assembly</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillTool size="2.4rem" color="var(--brand)" />
            <span>Developer Tools</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
            <span className="chip">Figma</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">IntelliJ</span>
            <span className="chip">Jira</span>
            <span className="chip">Maven</span>
            <span className="chip">Visual Studio Code</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSketchCircle size="2.4rem" color="var(--brand)" />
            <span>Frameworks</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">GoogleTest</span>
            <span className="chip">JUnit</span>
            <span className="chip">Node.js</span>
            <span className="chip">React</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
