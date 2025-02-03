import "server-only";

import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features: React.FC = () => {
  const featuresList = [
    {
      title: "Resource List",
      description:
        "The resource list is a storefront of available items and services. Users can also post requests for items they need.",
      resourceUrl: "/protected/resource-list",
      icon: "https://www.svgrepo.com/show/258725/sort.svg",
    },
    {
      title: "Comment Board",
      description:
        "The comment board is a place where users can post information, ask questions, and share their thoughts.",
      resourceUrl: "/protected/comment-board",
      icon: "https://www.svgrepo.com/show/356214/comment-dots.svg",
    },
    {
      title: "Event Calendar",
      description:
        "The event calendar is an integration with Calendly where users can post and view upcoming classes from each provider.",
      resourceUrl: "/protected/calendar",
      icon: "https://www.svgrepo.com/show/474756/calendar.svg",
    },
    {
      title: "Admin Functions",
      description:
        "Once signed in using Auth0, privileged administrators can manage the site and other users.",
      resourceUrl: "/admin",
      icon: "https://www.svgrepo.com/show/421614/admin-user-web.svg",
    },
  ];
  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Functional Demonstrations</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
