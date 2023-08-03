import React, { useState } from "react";
import { serviceDropdown } from "./links";
import { Link } from "next/link";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    // <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}
            >
              <a href=""
                className={item.cName}

              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    // {/* </> */}
  );
}

export default Dropdown;