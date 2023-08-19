import Image from "next/image";
import profile_img from "../public/images/profile.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mt-4 lg:mt-8 space-y-6">
        <Image
          className="rounded-3xl border-secondaryLight dark:border-secondaryDark border-8"
          alt="helloDun profile image"
          src={profile_img}
          style={{
            maxWidth: "12.5%",
            height: "auto",
          }}
        />

        {/* Paragraph */}
        <p className="text-2xl font-medium mx-10 space-y-3">
          <span className="font-semibold text-3xl">Hello, Welcome 👋🏽</span>
          <span className="block">
            <span className="font-semibold">I’m Duncan Gatuthu </span>
            currently working as a Systems admin and Azure cloud engineer.
          </span>
          <span className="block">
            On this site, I’ll be sharing what I’m learning through projects,
            demos and blogs.
          </span>
          {/* <span className="block">
            At the moment, I’m preparing for the Azure Solutions architect
            certification and also learning docker and Kubernetes.
          </span> */}
          <span className="block">
            Have a looks at the blog and projects sections for more.
          </span>
        </p>
      </div>
      {/* Projects feature */}
    </>
  );
}
