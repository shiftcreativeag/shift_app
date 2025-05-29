import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  onClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor = "var(--green)",
  color = "var(--primary)",
  label,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
