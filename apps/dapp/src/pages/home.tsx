import Footer from '../_layout/footer';
import Navigation from '../_layout/navigation';
import CommunityList from './community';
import EarnNft from './earnNft';
import LandingPage from './landing';
import Play from './play';
import Divider from './divider';
import TokenDistribution from './token-distribution';
import Marketing from './marketing';
import SearchNews from './searchNews';

const Home = () => {
  return (
    <div className="bg-black/90">
      <Navigation />
      <LandingPage />
      <Divider />
      <EarnNft />
      <Play />
      <TokenDistribution />
      <Marketing />
      <SearchNews />
      <CommunityList />
      <Footer />
    </div>
  );
};

export default Home;
