import { NextPage } from "next";
import React from "react";
import CalendlyEmbed from "@/components/calendly-embed";

const Calendar: NextPage = async () => {
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Protected Page - Calendar
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>list of resources</strong>.
          </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
        <div>
            <CalendlyEmbed url="https://calendly.com/d/cqyd-2by-6mn/one-off-meeting" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;