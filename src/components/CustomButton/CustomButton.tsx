import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  border?: string;
  onClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor = "var(--green)",
  color = "var(--primary)",
  border,
  label,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color, border }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
