interface PROPS {
  imgUrl: string;
  name: string;
  key: number;
}

const CharacterCard = ({ imgUrl, name, key }: PROPS) => {
  return (
    <div key={key} className="text-center">
      <img src={imgUrl} alt={name} className="mb-2" />
      <span className="text-black font-bold text-lg not-italic font-Drone">
        {name}
      </span>
    </div>
  );
};

export default CharacterCard;
