import { ReactComponent as LandingBg } from '../assets/svg/landing-bg.svg';
import { ReactComponent as ArrowDown } from '../assets/svg/arrow-down.svg';

const LandingPage = () => {
  return (
    <>
      <div className="landing-bg w-full h-[1080px]">
        <span className="absolute w-[590px] h-56 left-40 top-64 font-bold font-Drone text-4.5xl text-[#FBC625]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </span>
        <span className="absolute w-[590px] h-[60px] left-40 top-[522px] text-white font-Inter font-medium not-italic text-sm text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </span>
        <div className="absolute w-[576px] h-[60px] left-40 top-[622px] gap-7 flex">
          <div className="">
            <p className="text-white text-xl font-Drone font-bold not-italic">
              $999.000
            </p>
            <p className="text-[#FBC625] font-Inter font-medium text-sm">
              Active Shoulders
            </p>
          </div>
          <div>
            <p className="text-white text-xl font-Drone font-bold not-italic">
              $999.000
            </p>
            <p className="text-[#FBC625] font-Inter font-medium text-sm">
              Active Shoulders
            </p>
          </div>
          <div>
            <p className="text-white text-xl font-bold font-Drone not-italic">
              $999.000
            </p>
            <p className="text-[#FBC625] font-Inter font-medium text-sm">
              Active Shoulders
            </p>
          </div>
          <div>
            <p className="text-white text-xl font-Drone font-bold not-italic">
              $999.000
            </p>
            <p className="text-[#FBC625] font-Inter font-medium text-sm">
              Active Shoulders
            </p>
          </div>
        </div>
        <div className="absolute left-40 top-[762px] space-x-4">
          <button className="py-5 px-16 text-white rounded border border-white border-solid button-color shadow-2xl font-Inter font-semibold text-base">
            PLAY GAME
          </button>
          <button className="py-5 px-16 text-white rounded border border-white border-solid font-Inter font-semibold text-base">
            LEARN MORE
          </button>
        </div>
        <div className="absolute left-[914px] top-[964px]">
          <span className="font-Inter font-bold text-base text-white">
            Scroll down
          </span>
          <ArrowDown className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
