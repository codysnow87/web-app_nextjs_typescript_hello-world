import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Auth0FeatureProps {
  title: string;
  description: string;
  resourceUrl: string;
  icon: string;
}

export const Auth0Feature: React.FC<Auth0FeatureProps> = ({
  title,
  description,
  resourceUrl,
  icon,
}) => {
  const isInternalLink = resourceUrl.startsWith("/");

  if (isInternalLink) {
    return (
      <Link href={resourceUrl} className="auth0-feature">
        <h3 className="auth0-feature__headline">
          <Image
            className="auth0-feature__icon"
            src={icon}
            alt="internal link icon"
            height={36}
            width={36}
          />
          {title}
        </h3>
        <p className="auth0-feature__description">{description}</p>
      </Link>
    );
  }

  // For external links, maintain the option to use standard <a> tag from auth0 template
  return (
    <a
      href={resourceUrl}
      className="auth0-feature"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="auth0-feature__headline">
        <Image
          className="auth0-feature__icon"
          src={icon}
          alt="external link icon"
          height={36}
          width={36}
        />
        {title}
      </h3>
      <p className="auth0-feature__description">{description}</p>
    </a>
  );
};
