import SubTitle from '../components/subTitle/SubTitle';
import RadialProgress from '../components/radialProgress';
import Input from '../components/Input';

const progressList1 = [
  { percentage: 25, title: 'STAKER', price: '$25,000,000' },
  { percentage: 15, title: 'FUTURE INVESTOR', price: '$25,000,000' },
  { percentage: 15, title: 'LP POOLS', price: '$25,000,000' },
  { percentage: 10, title: 'ECO PARTNERS', price: '$25,000,000' },
  { percentage: 5, title: 'MKT OPERATION', price: '$25,000,000' },
  { percentage: 10, title: 'TEAM', price: '$25,000,000' },
];

const inputList = [
  {
    id: 1,
    player: 'lid***********',
    winnings: '19466.92',
    borderColor: '#FF32C6/50',
    avatarUrl: '/assets/images/man-0.png',
  },
  {
    id: 2,
    player: 'abc***********',
    winnings: '19466.92',
    borderColor: '#D6D6D6',
    avatarUrl: '/assets/images/man-1.png',
  },
  {
    id: 3,
    player: 'jon***********',
    winnings: '19466.92',
    borderColor: '#89888B',
    avatarUrl: '/assets/images/man-2.png',
  },
  {
    id: 4,
    player: 'wee***********',
    winnings: '19466.92',
    borderColor: '#3A3841',
    avatarUrl: '/assets/images/man-3.png',
  },
];

const TokenDistribution = () => {
  return (
    <div className="relative">
      <SubTitle title="TOKEN DISTRIBUTION" />
      <div>
        <img
          className="absolute left-0 top-[400px]"
          src="/assets/images/Group.png"
          alt="PNGWING"
        />
        <img
          className="absolute lg:left-[180px] sm:left-[100px] top-[1000px]"
          src="/assets/images/Frame.png"
          alt="Frame"
        />
        <img
          className="absolute right-0 top-12"
          src="/assets/images/harf-square.png"
          alt="HarfSquare"
        />
        <img
          className="absolute sm:right-[80px] lg:right-[133px] top-[750px]"
          src="/assets/images/triangle.png"
          alt="Triangle"
        />
      </div>
      <div>
        <div className="mt-40 justify-evenly grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-80">
          {progressList1.map((progress, index) => {
            return (
              <RadialProgress
                key={index}
                percentage={progress.percentage}
                title={progress.title}
                price={progress.price}
              />
            );
          })}
        </div>
      </div>
      <div className="token-bg border-2 mt-40 xl:w-[1600px] sm:w-full mx-auto">
        <div className="flex justify-evenly">
          <div className="ml-[200px] mt-52 w-52">
            <span className="leading-[100px] mb-6 text-7xl font-Drone not-italic font-bold flex items-center text-[#FBC625]">
              PLAY RIGHT NOW
            </span>
            <button className="bottom-20 shadow-[0_0_50px_rgba(187, 75, 255, 0.32)] text-white button-color rounded-md shadow-[rgba(187, 75, 255, 0.32)] w-[200px] h-11">
              PLAY GAME
            </button>
          </div>
          <div className="ml-auto sm:hidden lg:block">
            <img src="/assets/images/pngwing.png" alt="Pngwing" />
          </div>
          <div className=" mt-44">
            <div className="flex justify-evenly">
              <div className="text-white font-bold text-lg not-italic font-Drone align-center items-center">
                #
              </div>
              <div className="text-white font-bold text-lg not-italic font-Drone align-center items-center">
                PLAYER
              </div>
              <div className="text-white font-bold text-lg not-italic font-Drone align-center items-center">
                WINNINGS
              </div>
            </div>
            {inputList.map((input, index) => {
              return (
                <Input
                  key={index}
                  id={input.id}
                  player={input.player}
                  winnings={input.winnings}
                  borderColor={input.borderColor}
                  avatarUrl={input.avatarUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDistribution;
