import React from "react";
import { childrenCommonStyles } from "../layout";
import Link from "next/link";
import { blogLinks } from "@/components/Icons";

const blogLinksStyle =
  "bg-secondaryDark";

const Blogs = () => {
  return (
    <div className={`${childrenCommonStyles}`}>
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Blog Posts</h1>

      {/* Other Blog links */}
      <div className="mt-4 flex justify-between gap-6">
        {blogLinks.map(({href, label}) => (
          <Link 
          href={href} 
          key={href} 
          target="_blank"
          className="flex-1 bg-secondaryLight dark:bg-secondaryDark font-medium px-4 py-2 rounded-md text-center"
          >{label}</Link>
        ))}
      </div>
      {/* Search area */}
      {/* Blog tiles */}

    </div>
  );
};

export default Blogs;
