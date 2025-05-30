import Marquee from "react-fast-marquee";
import styles from "./RunningLine.module.scss";

const RunningLine = () => {
  return (
    <Marquee speed={200} gradient={false} className={styles.marquee}>
      <div className={styles.line}>
        <span>ЛОГО1</span>
        <span>ЛОГО2</span>
        <span>ЛОГО3</span>
        <span>ЛОГО4</span>
        <span>ЛОГО5</span>
      </div>
    </Marquee>
  );
};

export default RunningLine;
