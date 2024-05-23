import { ReactNode } from "react";

const Hero = ({ text }: { text: ReactNode }) => {
  return (
    <section className="w-full flex items-center justify-center h-[420px] bg-[#f5fbfc]">
      <>{text}</>
      <img
        className="absolute"
        src="	https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa308a576b613_YumYum.png"
        alt="hero"
      />
    </section>
  );
};

export default Hero;
