import Image from "next/image";
import profile_img from "../public/images/profile.jpg";
import { childrenCommonStyles } from "./layout";

export const profileImageStyle = "";

export const ProfileImage = () => {
  return (
    <Image
      className={
        "rounded-3xl xl:rounded-[20px] border-secondaryLight dark:border-secondaryDark border-8 xl:border-[10px] w-[120px] lg:w-[150px] 2xl:w-[180px]"
      }
      alt="helloDun profile image"
      src={profile_img}
      width={120}
    />
  );
};

export default function Home() {
  return (
    <>
      <div
        className={`${childrenCommonStyles} flex flex-col items-center lg:mt-8 xl:mt-16 space-y-3 lg:space-y-5 pb-3`}
      >
        <ProfileImage />
        {/* Paragraph */}
        <p className="text-xl lg:text-2xl 2xl:text-4xl font-medium space-y-3 lg:space-y-5 2xl:space-y-6">
          <span className="font-semibold text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl">
            Hello, Welcome 👋🏽
          </span>
          <span className="block">
            <span className="font-semibold">I&apos;m Duncan Gatuthu, </span>a
            Systems admin and Azure cloud engineer.
          </span>
          <span className="block">
            On this site, I&apos;ll be sharing what I&apos;m learning through
            projects, demos and blogs.
          </span>
          <span className="block">
            Have a looks at the blog and projects sections for more.
          </span>
        </p>
      </div>
      {/* Projects feature */}
    </>
  );
}
