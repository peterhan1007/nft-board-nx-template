interface PROPS {
  imgUrl: string;
  name: string;
}

const CharacterCard = ({ imgUrl, name }: PROPS) => {
  return (
    <div className="text-center">
      <img
        src={imgUrl}
        alt={name}
        className="mb-2 sm:w-32 md:w-36 lg:w-48 xl:w-full"
      />
      <span className="text-black font-bold text-lg not-italic font-Drone">
        {name}
      </span>
    </div>
  );
};

export default CharacterCard;
