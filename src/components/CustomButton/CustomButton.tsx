import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  icon?: React.ReactNode; // новый пропс для иконки
  border?: string;
  onClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor = "var(--green)",
  color = "var(--primary)",
  border,
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color, border }}
      onClick={onClick}
    >
      {icon || label}
    </button>
  );
};
