import CardsExample from "./_examples/cards.example";
import ChatExample from "./_examples/chat.example";
import SigninExample from "./_examples/signin.example";


type Props = {};

const HeroBannerLeft = (props: Props) => {
  return (
    <div className="flex flex-col -translate-x-[5%] scale-[0.8] md:scale-100 md:-translate-x-1/4 items-end justify-center min-h-screen bg-transparent">
      <SigninExample />
      <ChatExample />
      <CardsExample />
    </div>
  );
};

export default HeroBannerLeft;
