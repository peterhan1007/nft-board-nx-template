import NewsCard from '../components/card/NewsCard';
import SubTitle from '../components/subTitle/SubTitle';

const News = () => {
  return (
    <div className="container mx-auto">
      <SubTitle title="SEARCH THE NEWS" />
      <div className="grid grid-rows-2 md:grid-row-3 mt-24 grid-flow-col">
        <div className="row-span-2">{NewsCard('first')}</div>
        <div className="row-span-1 col-span-1">{NewsCard('second')}</div>
        <div className="col-span-2 md:row-span-1 md:col-span-3">
          {NewsCard('third')}
        </div>
        <div className="col-span-1">{NewsCard('fourth')}</div>
        <div className="col-span-1">{NewsCard('fifth')}</div>
        <div className="col-span-1">{NewsCard('sixth')}</div>
      </div>
    </div>
  );
};

export default News;
