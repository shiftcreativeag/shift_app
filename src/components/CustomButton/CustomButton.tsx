import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

type ButtonTheme = "primary" | "secondary" | "round";
type ButtonSize = "xs" | "s" | "m" | "l" | "xl";
type ButtonWidth = "max" | undefined; // Новый тип

interface CustomButtonProps {
  theme: ButtonTheme;
  size: ButtonSize;
  label: string;
  type?: "button" | "submit" | "link";
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  href?: string;
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  disabled?: boolean;
  width?: ButtonWidth;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  theme,
  size,
  label,
  icon,
  type = "button",
  onClick,
  href,
  to,
  target,
  rel,
  disabled = false,
  width,
  className = "",
}) => {
  // Формируем классы
  const buttonClass = [
    "button",
    `button_theme_${theme}`,
    `button_size_${size}`,
    width && `button_width_${width}`,
    disabled && "button_disabled",
    className,
  ]
    .filter(Boolean) // Удаляем пустые строки
    .join(" ");

  const iconClass = "button__icon";

  const commonProps = {
    className: buttonClass,
    onClick: disabled ? undefined : onClick,
    target,
    rel: target === "_blank" ? "noopener noreferrer" : rel,
    "aria-disabled": disabled,
  };

  // Рендер в зависимости от типа
  if (type === "link" && to) {
    return (
      <Link {...commonProps} to={disabled ? "#" : to}>
        {icon && <span className={iconClass}>{icon}</span>}
        {label}
      </Link>
    );
  }

  if (type === "link") {
    return (
      <a {...commonProps} href={disabled ? "#" : href || "#"}>
        {icon && <span className={iconClass}>{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <button {...commonProps} type={type} disabled={disabled}>
      {icon && <span className={iconClass}>{icon}</span>}
      {label}
    </button>
  );
};