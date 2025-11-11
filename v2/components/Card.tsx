import React from "react";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  date?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
  tags,
  date,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`block bg-white border border-gray-lighter rounded-lg p-6 hover:shadow-lg hover:border-teal transition-all ${className}`}
    >
      <article>
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        {date && (
          <time className="text-sm text-gray mb-2 block" dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        <p className="text-gray mb-4">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-lighter/20 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};
