import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <Link href="/">
        <Image
          className="nav-bar__logo"
          src="https://www.svgrepo.com/show/277498/lecture-class.svg"
          alt="Lecture Class SVG Vector Image"
          width={122}
          height={36}
        />
      </Link>
    </div>
  );
};
