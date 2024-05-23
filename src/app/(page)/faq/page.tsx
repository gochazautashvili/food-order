import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LinkButton from "@/components/ui/LinkButton";

const FAQPage = ({ searchParams }: { searchParams: { faq: string } }) => {
  const content = (
    <p className="relative z-10 tablet:text-6xl text-5xl font-bold leading-[1] text-[#191b22] text-center">
      Frequently Asked <br />
      <span className="text-brand">Questions</span>
    </p>
  );

  return (
    <main>
      <Hero text={content} />
      <section className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap gap-5 items-center justify-center mt-[100px]">
          <LinkButton
            className={`${
              !searchParams.faq
                ? "bg-brand border-none text-white"
                : "bg-transparent border text-black hover:text-white"
            } `}
            link="/faq"
          >
            Our Food
          </LinkButton>
          <LinkButton
            className={`${
              searchParams?.faq === "delivery"
                ? "bg-brand border-none text-white"
                : "bg-transparent border text-black hover:text-white"
            } `}
            link="faq/?faq=delivery"
          >
            Our Delivery
          </LinkButton>
          <LinkButton
            className={`${
              searchParams?.faq === "company"
                ? "bg-brand border-none text-white"
                : "bg-transparent border text-black hover:text-white"
            } `}
            link="faq/?faq=company"
          >
            Our Company
          </LinkButton>
        </div>
        <FAQ />
      </section>
    </main>
  );
};

export default FAQPage;
