import React from "react";
import { Link } from "react-router-dom";
import type { NavbarLink } from "../types/NavbarLink";
import ExternalLinkButton from "./ExternalLinkButton";
import InternalLinkButton from "./InternalLinkButton";

const Navbar: React.FC = () => {
  const links: NavbarLink[] = [
    {
      name: "Experience",
      path: "/experience",
      external: false,
      color: "light",
    },
    {
      name: "Coursework",
      path: "/coursework",
      external: false,
      color: "light",
    },
    { name: "Research", path: "/research", external: false, color: "light" },
    {
      name: "GitHub",
      path: "https://github.com/nowji",
      external: true,
      color: "dark",
    },
    {
      name: "LinkedIn",
      path: "https://linkedin.com/in/neema-owji",
      external: true,
      color: "dark",
    },
    {
      name: "Resume",
      path: "/resume.pdf",
      external: false,
      color: "dark",
    },
  ];

  return (
    <nav
      className="
        w-full h-1/8 p-4
        flex items-center justify-between
        shadow-md mr-3

        md:static
        md:w-48
        md:flex-col md:items-start md:justify-start
        md:pl-8
        md:border-r md:border-gray-200
        md:shadow-none
        md:bg-off-white-bg
        md:flex-shrink-0
      "
    >
      <div className="md:mb-8 w-full">
        <Link
          to="/"
          className="
            block h-full w-full flex flex-col justify-center
            
          "
        >
          <div className="md:text-4xl text-3xl font-bold md:text-right">
            نیما
          </div>
          <div className="text-lg italic md:text-right">Neema Owji</div>
        </Link>
      </div>

      <div
        className="
          flex flex-col space-y-4 pl-2
          md:text-lg md:flex-col md:space-y-4 md:space-x-0 md:w-full
        "
      >
        <div
          className="
            w-full flex flex-row space-x-2
            md:flex-col md:space-y-2 md:space-x-0 justify-between
          "
        >
          {links
            .slice(0, 3)
            .map((link) =>
              link.external ? (
                <ExternalLinkButton link={link} />
              ) : (
                <InternalLinkButton link={link} />
              )
            )}
        </div>

        <div
          className="
              w-full flex flex-row space-x-2
              md:flex-col md:space-y-2 md:space-x-0 justify-between
            "
        >
          {links
            .slice(3, 6)
            .map((link) =>
              link.external ? (
                <ExternalLinkButton link={link} />
              ) : (
                <InternalLinkButton link={link} />
              )
            )}
        </div>
      </div>
      {/* {links.map((link) =>
            link.external ? (
              <ExternalLinkButton link={link} />
            ) : (
              <InternalLinkButton link={link} />
            )
          )} */}
    </nav>
  );
};

export default Navbar;
