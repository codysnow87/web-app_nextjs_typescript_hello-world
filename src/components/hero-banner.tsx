import Image from "next/image";
import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://www.svgrepo.com/show/277498/lecture-class.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <Image
          className="hero-banner__image"
          src={logo}
          alt="Next.js logo"
          height={108}
          width={108}
        />
      </div>
      <h1 className="hero-banner__headline">Welcome!</h1>
      <p className="hero-banner__description">
        This is a proof of concept site for a class project.
      </p>
    </div>
  );
};
