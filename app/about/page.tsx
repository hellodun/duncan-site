import { childrenCommonStyles } from "../layout";
import { ProfileImage } from "../page";

export default function About() {
  return (
    <>
      <div
        className={`${childrenCommonStyles} flex flex-col items-center mt-4 lg:mt-8 xl:mt-16 space-y-3 2xl:space-y-6 pb-10`}
      >
        <ProfileImage />
        {/* Paragraph */}
        <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-medium space-y-3 2xl:space-y-6">
          <span className="block">
            <span className="font-bold">Hi, I am Duncan,</span> a System
            Admin and Azure cloud engineer. I also do software development on
            the side.
          </span>
          <span className="block">
            I am currently working on some projects using Go and also upskilling on Kubernetes, using the CNCF's Book Club community.
          </span>
          <span className="block">
            I have a blog where I will be documenting my learning especially
            in cloud and also software development, feel free to check it out.
          </span>
          <span className="block">
            I learn best by doing projects and I will be documenting some
            projects and demos here.
          </span>
        </p>
      </div>
      {/* Projects feature */}
    </>
  );
}
