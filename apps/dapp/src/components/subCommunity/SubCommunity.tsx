interface PROPS {
  Icon: JSX.Element;
  title: string;
  name: string;
}

const SubCommunity = ({ Icon, title, name }: PROPS) => {
  return (
    <div className="relative">
      {Icon}
      <div className="absolute left-[120px] top-[54px]">
        <p className="font-Inter text-white not-italic font-medium text-xs leading-5">
          {title}
        </p>
        <p className="font-Drone font-bold text-white text-[36px] leading-8 not-italic mt-[6px]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SubCommunity;
