import React from "react";
import { childrenCommonStyles } from "../layout";

const Projects = () => {
  return (
    <div
      className={`${childrenCommonStyles} absolute flex h-full items-center`}
    >
      <h3 className="text-lg italic font-mono">
        I&apos;m working on a couple of case studies. I&apos;ll be sharing
        soon...
      </h3>
    </div>
  );
};

export default Projects;
