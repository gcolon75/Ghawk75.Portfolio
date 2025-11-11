import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark";

  const variantStyles = {
    primary: disabled
      ? "bg-teal-disabled text-gray-dark cursor-not-allowed"
      : "bg-teal text-black hover:bg-teal-dark",
    secondary: disabled
      ? "bg-gray-lighter text-gray-dark cursor-not-allowed"
      : "bg-white text-black border-2 border-black hover:bg-gray-lighter",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
