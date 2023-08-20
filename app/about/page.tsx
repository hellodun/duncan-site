import Image from "next/image";
import profile_img from "../../public/images/profile.jpg";
import { profileImageStyle } from "../page";
import { childrenCommonStyles } from "../layout";

export default function About() {
  return (
    <>
      <div
        className={`${childrenCommonStyles} flex flex-col items-center mt-4 lg:mt-8 xl:mt-16 space-y-3 2xl:space-y-6`}
      >
        <Image
          className={profileImageStyle}
          alt="helloDun profile image"
          src={profile_img}
          style={{
            maxWidth: "12.5%",
            height: "auto",
          }}
        />

        {/* Paragraph */}
        <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-medium space-y-3 2xl:space-y-6">
          <span className="block">
            <span className="font-bold">Hi, I&apos;m Duncan,</span> a System
            Admin and an Azure cloud engineer. I also do software development on
            the side.
          </span>
          <span className="block">
            I&apos;m currently preparing for the Azure Solutions Architect
            Certification in September 2023 and also working on some community
            projects using Azure.
          </span>
          <span className="block">
            I have a blog where I&apos;ll be documenting my learning especially
            in cloud and also software development, feel free to check it out.
          </span>
          <span className="block">
            I learn best by doing projects and I&apos;ll be documenting some
            projects and demos here in this site, so as to compliment the
            learning process and also for knowledge sharing.
          </span>
        </p>
      </div>
      {/* Projects feature */}
    </>
  );
}
