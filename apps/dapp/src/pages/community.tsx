import SubTitle from '../components/subTitle/SubTitle';
import Community from '../components/subCommunity/SubCommunity';
import { ReactComponent as FaceBookIcon } from '../assets/svg/facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg';
import { ReactComponent as TelegramIcon } from '../assets/svg/telegram.svg';
import { ReactComponent as DiscrodIcon } from '../assets/svg/discord.svg';

const communities = [
  {
    Icon: <FaceBookIcon />,
    title: 'FACEBOOK',
    name: 'GOSQUID',
  },
  {
    Icon: <TwitterIcon />,
    title: 'TWITTER',
    name: 'GOSQUID',
  },
  {
    Icon: <TelegramIcon />,
    title: 'TELEGRAM',
    name: 'GOSQUID',
  },
  {
    Icon: <DiscrodIcon />,
    title: 'DISCORD',
    name: 'GOSQUID',
  },
];

const CommunityList = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          <SubTitle title="JOIN OUR COMMUNITY" />
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full pb-[70px]">
            {communities.map((community, index) => {
              return (
                <Community
                  key={index}
                  Icon={community.Icon}
                  title={community.title}
                  name={community.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityList;
