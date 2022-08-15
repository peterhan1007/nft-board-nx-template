import playImage from '../assets/images/play-button.png';

const Play = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 px-[160px]">
      <div className="bg-[url('/assets/images/play.png')] bg-cover sm: h-[400px] relative">
        <div className="flex bg-[#2A282F]">
          <div className="blur text-[#17161A] absolute w-[10rem] bottom-0 bg-[#FBC625]/[.13] h-[133px]"></div>
          <img
            src={playImage}
            className="absolute bottom-[43px] left-[50px] z-10"
          ></img>
          <div className="pr-7 pt-6 font-Inter text-4xl text-[#89888B] width-9/10 text-[16px] leading-6 absolute bottom-0 bg-[#000000]/[.7] w-full h-[133px] text-right ">
            <p className="text-[32px] text-white font-Drone">
              LET'S PLAY WITH US!
            </p>
            <button className="py-1 px-6 play-game mt-4 text-white">
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col text-[black] min-height">
        <div className="flex items-center bg-[#FBC625] md:py-3">
          <div className="flex items-center justify-center font-drone text-4xl text-[#17161A] w-[10rem]">
            1
          </div>
          <div className="mt-4 font-Inter text-4xl text-[#17161A] text-[16px] leading-6 width-8/10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisfds.
          </div>
        </div>

        <div className="flex bg-[#3D3B44] items-center sm:py-3">
          <div className="flex items-center justify-center font-drone text-4xl text-[#17161A] w-[10rem]">
            2
          </div>
          <div className="mt-4 font-Inter text-4xl text-[#D6D6D6] width-9/10 text-[16px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisfds.
          </div>
        </div>

        <div className="flex bg-[#2A282F] items-center sm:py-3">
          <div className="flex items-center justify-center font-drone text-4xl text-[#17161A] w-[10rem]">
            3
          </div>
          <div className="mt-4 font-Inter text-4xl text-[#89888B] width-9/10 text-[16px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisfds.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
