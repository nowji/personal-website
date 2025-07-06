import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const internalLinks = [
    { name: "Experience", path: "/experience" },
    { name: "Coursework", path: "/coursework" },
    { name: "Resume", path: "/resume" },
  ];
  const externalLinks = [
    {
      name: "GitHub",
      path: "https://github.com/nowji",
    },
    {
      name: "LinkedIn",
      path: "https://linkedin.com/in/neema-owji",
    },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        w-full h-1/8 p-4
        flex items-center justify-between
        bg-true-white shadow-md

        md:static
        md:w-1/6 md:max-w-48 md:h-screen
        md:flex-col md:items-start md:justify-start
        md:pl-8
        md:border-r md:border-gray-200
        md:shadow-none
        md:bg-off-white-bg
      "
    >
      <div className="md:mb-8 w-full">
        <Link
          to="/"
          className="
            block h-full w-full flex flex-col justify-center
            
          "
        >
          <div className="text-4xl font-bold md:text-right">نیما</div>
          <div className="text-lg italic md:text-right">Neema Owji</div>
        </Link>
      </div>

      <div
        className="
          flex flex-col space-y-4
          md:text-lg md:flex-col md:space-y-4 md:space-x-0 md:w-full
        "
      >
        <div
          className="
            w-full flex flex-row space-x-2 justify-start
            md:flex-col md:space-y-2 md:space-x-0
          "
        >
          {internalLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-dark-gray-primary pl-1 pr-2 hover:bg-[#ede4e4] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {externalLinks.length > 0 && (
          <div
            className="
              w-full flex flex-row space-x-2 justify-end
              md:flex-col md:space-y-2 md:space-x-0
            "
          >
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                className="block text-off-white-bg pl-1 pr-2 bg-dark-gray-primary hover:bg-[#171616] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
