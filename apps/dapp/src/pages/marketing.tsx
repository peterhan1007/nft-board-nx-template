const Marketing = () => {
  return (
    <div className="relative mt-[120px]">
      <img src="/assets/images/divider-1.png" alt="Divider" />
      <div className="absolute flex space-x-10 top-1/2 -translate-y-1/2 items-center px-32">
        <img
          src="/assets/images/binance.png"
          className="sm:w-32 md:w-36 lg:w-48 xl:w-full"
          alt="Binance"
        />
        <img
          src="/assets/images/coin-market-capp.png"
          className="sm:w-32 md:w-36 lg:w-48 xl:w-full"
          alt="CoinMarketCapp"
        />
        <img
          src="/assets/images/pancake-swap.png"
          className="sm:w-32 md:w-36 lg:w-48 xl:w-full"
          alt="Binance"
        />
        <img
          className="sm:w-32 md:w-36 lg:w-48 xl:w-full"
          src="/assets/images/nixus.png"
          alt="Nixus"
        />
        <img
          className="sm:w-32 md:w-36 lg:w-48 xl:w-full"
          src="/assets/images/zeit.png"
          alt="Zeit"
        />
      </div>
    </div>
  );
};

export default Marketing;
