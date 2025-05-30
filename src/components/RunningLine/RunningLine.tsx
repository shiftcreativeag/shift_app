import Marquee from "react-fast-marquee";
import styles from "./RunningLine.module.scss";
import type { ReactNode } from "react";

interface RunningLineProps {
  items: (string | ReactNode)[];
}

const RunningLine = ({ items }: RunningLineProps) => {
  return (
    <Marquee speed={50} gradient={false} className={styles.marquee}>
      <div className={styles.line}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default RunningLine;
