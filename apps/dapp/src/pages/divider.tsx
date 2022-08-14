import CharacterCard from '../components/card/CharacterCard';

interface CARD {
  imgUrl: string;
  name: string;
}

const cards = [
  { imgUrl: '/assets/images/new-arrival.png', name: '' },
  { imgUrl: '/assets/images/the-dj.png', name: 'THE DJ' },
  { imgUrl: '/assets/images/assassin.png', name: 'ASSASSIN' },
  { imgUrl: '/assets/images/neon-guy.png', name: 'NEON GUY' },
  { imgUrl: '/assets/images/mafia-england.png', name: 'MAFIA ENGLAND' },
  { imgUrl: '/assets/images/basketball-girl.png', name: 'BASKETBALL GIRL' },
];

const dividerBg = '/assets/images/divider.png';

const Divider = () => {
  return (
    <div className="relative">
      <img src={dividerBg} alt="Divider" />
      <div className="flex absolute top-1/2 -translate-y-1/2 space-x-20 items-center px-40">
        {cards.map((card: CARD, index: number) => {
          return (
            <CharacterCard key={index} imgUrl={card.imgUrl} name={card.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Divider;
