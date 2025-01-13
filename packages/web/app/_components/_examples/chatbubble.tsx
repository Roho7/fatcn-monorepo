import { Avatar, AvatarFallback, AvatarImage } from "@fatcn/ui";


export type SenderType = "self" | "other";
export type SenderDetails = {
    type: SenderType;
    name: string;
    avatar: string;
}
type Props = {
    message: string;
    sender: SenderDetails;
    timestamp: string;
    isPreviousMessageSameSender?: boolean;
}

const ChatBubble = ({message, sender, timestamp, isPreviousMessageSameSender}: Props) => {
  return <div
    className={`flex ${sender.type === "self" ? "justify-end" : "justify-start"}`}
  >
    <div className={`${sender.type === "other" ? "w-6 flex-shrink-0" : ""}`}>
      {sender.type === "other" && !isPreviousMessageSameSender && 
        <Avatar size='xs' shape='circle' ring className="mt-2">
          <AvatarImage src={sender.avatar} alt={sender.name} />
          <AvatarFallback>{sender.name.charAt(0)}</AvatarFallback>
        </Avatar>
      }
    </div>
    <div
      className={`max-w-[80%] p-2 rounded-lg ${
        sender.type === "self"
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-background shadow-sm ml-1"
      }`}
    >
      <p className="text-sm">{message}</p>
      <p className="text-xs text-primary-foreground/30 text-right">{timestamp}</p>
    </div>
  </div>
}

export default ChatBubble