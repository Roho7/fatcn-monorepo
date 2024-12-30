import InboxExample from "./_examples/inbox.example";
import SidebarExample from "./_examples/sidebar.example";
import TicketsExample from "./_examples/tickets.example";

type Props = {};

const HeroBannerRight = (props: Props) => {
  return (
    <div className="flex flex-col translate-x-[5%] scale-[0.8] md:scale-100 md:translate-x-1/4 items-start justify-center min-h-screen bg-transparent">
      <InboxExample />
      <TicketsExample />
      <SidebarExample />
    </div>
  );
};

export default HeroBannerRight;
