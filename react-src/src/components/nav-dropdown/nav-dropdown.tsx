import React, { useState, useRef } from "react";

import { NavDropdown } from "react-bootstrap";

import "./nav-dropdown.css";

interface Props {
  title: string;
  childtitles: Array<string>;
}

const NavDropdownComponent: React.FC<Props> = ({ title, childtitles }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setIsDropdownOpen(false);
      }
    }, 100);
  };

  return (
    <NavDropdown
      title={title}
      className={`navBar mx-3 `}
      show={isDropdownOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      renderMenuOnMount={true}
    >
      <div className="fade-out-dropdown fade-in-dropdown ">
        {childtitles.map((childtitle) => (
          <NavDropdown.Item
            key={childtitle}
            href={`/${childtitle
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")}`}
            className="my-3  dropdown-item-nav"
          >
            {childtitle}
          </NavDropdown.Item>
        ))}
      </div>
    </NavDropdown>
  );
};

export default NavDropdownComponent;
