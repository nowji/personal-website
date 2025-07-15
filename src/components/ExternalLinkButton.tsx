import React from "react";
import type { NavbarLink } from "../types/NavbarLink";

interface ExternalLinkButtonProps {
  link: NavbarLink;
}
const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ link }) => {
  return (
    <a
      key={link.name}
      href={link.path}
      target="_blank"
      className={
        link.color === "light"
          ? "block text-dark-gray-primary pl-1 pr-4 hover:bg-[#ede4e4] transition-colors duration-200 rounded-sm"
          : "block text-off-white-bg pl-1 pr-4 bg-dark-gray-primary hover:bg-[#171616] transition-colors duration-200 rounded-sm"
      }
    >
      {link.name}
    </a>
  );
};

export default ExternalLinkButton;
