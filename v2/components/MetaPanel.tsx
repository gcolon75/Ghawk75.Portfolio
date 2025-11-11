import React from "react";

export interface MetaPanelProps {
  skills?: string[];
  concepts?: string[];
  tools?: string[];
  role?: string;
}

export const MetaPanel: React.FC<MetaPanelProps> = ({
  skills,
  concepts,
  tools,
  role,
}) => {
  const sections = [
    { title: "Skills", items: skills },
    { title: "Concepts", items: concepts },
    { title: "Tools", items: tools },
  ];

  return (
    <aside
      className="bg-gray-lighter/10 border border-gray-lighter rounded-lg p-6 space-y-4"
      aria-label="Project metadata"
    >
      {role && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray mb-2">
            Role
          </h3>
          <p className="text-base">{role}</p>
        </div>
      )}

      {sections.map(
        ({ title, items }) =>
          items &&
          items.length > 0 && (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray mb-2">
                {title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white border border-gray-lighter px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </aside>
  );
};
