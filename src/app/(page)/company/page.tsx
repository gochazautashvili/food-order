import Hero from "@/components/Hero";
import LinkButton from "@/components/ui/LinkButton";
import TeamImage from "../../../../public/team-image.png";
import Image from "next/image";

const CompanyPage = () => {
  const content = (
    <p className="relative z-10 tablet:text-6xl text-5xl font-bold leading-[1] text-[#191b22] text-center">
      Our company focuses <br /> on{" "}
      <span className="text-brand">food and people.</span>
    </p>
  );

  return (
    <main>
      <Hero text={content} />
      <section className="tablet:my-[100px] my-[50px] w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center laptop:flex-row laptop:gap-10 justify-between">
        <div className="flex flex-col items-center max-w-[500px] laptop:items-start laptop:w-1/2">
          <h1 className="tablet:text-[55px] text-[40px] text-brand font-bold leading-[1] mb-5 text-center laptop:text-start">
            The home of fresh products
          </h1>
          <p className="mb-[30px] tablet:mb-[50px] text-sm tablet:text-[16px] text-center laptop:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500.
          </p>
          <LinkButton link="/company">Learn about us</LinkButton>
        </div>
        <div className="mt-20 w-1/2">
          <Image
            src={TeamImage}
            width={700}
            height={814}
            alt="The home of fresh products"
            placeholder="blur"
          />
        </div>
      </section>
      <section className="w-full bg-center bg-cover bg-no-repeat bg-fixed bg-[url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3828776b614_Group%20Photo.jpg)]">
        <div className="w-full h-full bg-[rgba(1,1,1,0.5)]">
          <div className="w-full max-w-[1200px] mx-auto px-4 h-[500px] flex items-center justify-center">
            <div className="flex items-center justify-between w-full text-white flex-wrap gap-y-5">
              <div className="flex flex-col items-center">
                <h1 className="text-[65px] font-bold">62</h1>
                <img
                  className="my-5"
                  src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg"
                  alt="line"
                />
                <p className="text-xl">Fiesty Menu Items</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[65px] font-bold">139</h1>
                <img
                  className="my-5"
                  src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg"
                  alt="line"
                />
                <p className="text-xl">Fiesty Menu Items</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[65px] font-bold">34</h1>
                <img
                  className="my-5"
                  src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg"
                  alt="line"
                />
                <p className="text-xl">Fiesty Menu Items</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[65px] font-bold">57</h1>
                <img
                  className="my-5"
                  src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg"
                  alt="line"
                />
                <p className="text-xl">Fiesty Menu Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
