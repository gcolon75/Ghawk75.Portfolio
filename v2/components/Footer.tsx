import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-lighter/10 border-t border-gray-lighter mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-gray text-sm">
          <p>&copy; {currentYear} Portfolio v2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
