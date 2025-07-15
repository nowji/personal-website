import React from "react";
import { Link } from "react-router-dom";
import type { NavbarLink } from "../types/NavbarLink";

interface InternalLinkButtonProps {
  link: NavbarLink;
}
const InternalLinkButton: React.FC<InternalLinkButtonProps> = ({ link }) => {
  return (
    <Link
      key={link.name}
      to={link.path}
      className={
        link.color === "light"
          ? "block text-dark-gray-primary pl-1 pr-2 hover:bg-[#ede4e4] transition-colors duration-200 rounded-sm"
          : "block text-off-white-bg pl-1 pr-2 bg-dark-gray-primary hover:bg-[#171616] transition-colors duration-200 rounded-sm"
      }
    >
      {link.name}
    </Link>
  );
};

export default InternalLinkButton;
