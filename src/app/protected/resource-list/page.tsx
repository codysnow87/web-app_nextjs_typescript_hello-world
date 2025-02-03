import { NextPage } from "next";
import React from "react";
import SelectableList from "@/components/selectable-list";

const ResourceList: NextPage = async () => {
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Protected Page - Resource List
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
          <SelectableList />
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
