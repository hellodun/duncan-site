import Image from "next/image";
import profile_img from "../public/images/profile.jpg";

export default function Home() {
  return (
    <>
      {/* Photo */}
      <Image
        alt="helloDun profile image"
        src={profile_img}
        style={{
          maxWidth: "12.5%",
          height: "auto",
        }}
      />
      {/* Paragraph */}
      <p>
        Hello, I’m Duncan. I’m a System Admin and an Azure cloud Admin. I also
        do some bit of software development on the side. I’m currently preparing
        for the Azure Solutions Architect Certification before the end of
        September 2023 and also working on some community projects using Azure.
        I have a blog where I’ll be documenting my learning especially in cloud
        computing and also software development, feel free to check it out. I
        learn best doing projects and I’ll be documenting some projects here in
        this site, under Project to compliment the learning process and also for
        knowledge sharing.
      </p>
      {/* Projects feature */}
    </>
  );
}
