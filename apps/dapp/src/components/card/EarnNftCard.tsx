export type EarnNftCardProps = {
  backImage: string;
  characterImage: string;
  title: string;
  description: string;
};

const EarnNftCard = ({
  backImage,
  characterImage,
  title,
  description,
}: EarnNftCardProps) => {
  return (
    <div>
      <div className="flex justify-center items-center relative">
        <img src={backImage} alt="background earn nft image" />
        <img
          src={characterImage}
          alt="character earn nft image"
          className="absolute h-[140%]"
        />
      </div>
      <div className="py-[90px]">
        <h4 className="pb-4 font-drone font-bold text-xl leading-8 text-center text-white">
          {title}
        </h4>
        <p className="font-Inter font-medium text-base leading-6 text-[#89888B] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EarnNftCard;
