import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavBarBrandProps {
  handleClick: () => void;
}

export const MobileNavBarBrand: React.FC<MobileNavBarBrandProps> = ({
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <Link href="/">
        <Image
          className="mobile-nav-bar__logo"
          src="https://www.svgrepo.com/show/277498/lecture-class.svg"
          alt="Lecture Class SVG Vector Image"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
