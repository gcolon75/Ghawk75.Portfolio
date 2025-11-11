import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  as: Component = "section",
}) => {
  return (
    <Component className={`py-12 px-4 max-w-6xl mx-auto ${className}`}>
      {children}
    </Component>
  );
};
