import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  desc: string;
};

const WorksCard = ({ image, title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center max-w-[500px]">
      <div className="laptop:w-[333px] max-h-[364px]">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt="how ut works image"
          width={454}
          height={364}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-12 mb-[10px] text-[22px] font-bold text-[#08090a] text-center">
          {title}
        </h1>
        <p className="text-[#546285] text-base text-center">{desc}</p>
      </div>
    </div>
  );
};

export default WorksCard;
