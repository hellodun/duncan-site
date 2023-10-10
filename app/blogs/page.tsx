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
        <div className="mt-4">
          <ul className="flex justify-between gap-6">
            {blogLinks.map(({label, href}) => (
              <li className="flex-1 bg-secondaryLight dark:bg-secondaryDark text-lg font-semibold rounded-md text-center py-2 px-8" key={label}>
                <Link href={href}
                key={label}>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Search area */}
        {/* Blog tiles */}

    </div>
  );
};

export default Blogs;
