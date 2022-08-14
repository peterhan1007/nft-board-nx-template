import ReactSm from '../../assets/svg/rect-sm.svg';

export type SubTitleProps = {
  title: string;
  description?: string;
};

const SubTitle = ({ title, description }: SubTitleProps) => {
  return (
    <div className="mt-[120px] w-full">
      <h1 className="font-Drone font-bold text-[40px] leading-[56px] text-center text-[#FBC625]">
        {title}
      </h1>
      {!!description ? (
        <p className="max-w-[1000px] font-Inter font-medium text-base leading-6 text-center text-white h-28 mx-auto">
          {description}
        </p>
      ) : (
        ''
      )}
      <div className="flex justify-center mt-[24px]">
        <div className="w-[240px] h-[2px] bg-white"></div>
      </div>
      <div className="flex justify-center">
        <img src={ReactSm} alt="" />
      </div>
    </div>
  );
};

export default SubTitle;
