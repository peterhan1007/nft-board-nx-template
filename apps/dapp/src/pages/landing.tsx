import { ReactComponent as LandingBg } from '../assets/svg/landing-bg.svg';
import { ReactComponent as ArrowDown } from '../assets/svg/arrow-down.svg';

const LandingPage = () => {
  return (
    <>
      <div className="landing-bg w-full h-[1080px]">
        <div className=" ml-40 w-[590px] pt-[258px] tracking-[2px] font-bold font-Drone text-4.5xl text-[#FBC625]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
        <div className="w-[590px] ml-40 mt-12 text-white font-Inter font-medium not-italic text-sm text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
        <div className="gap-9 ml-40 mt-12 flex">
          <div>
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
        <div className="space-x-4 ml-40 mt-24">
          <button className="py-5 px-16 text-white rounded border border-white border-solid button-color shadow-2xl font-Inter font-semibold text-base">
            PLAY GAME
          </button>
          <button className="py-5 px-16 text-white rounded border border-white border-solid font-Inter font-semibold text-base">
            LEARN MORE
          </button>
        </div>
        <div className="text-center mt-36">
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
