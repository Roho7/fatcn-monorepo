import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@fatcn/ui";
import { SentIcon } from "hugeicons-react";
import ChatBubble, { SenderDetails } from "./chatbubble";

const chats = [
  {
    message: "Hi, how can I help you today?",
    sender: {
      type: "self",
      name: "John Doe",
      avatar: "https://github.com/john-doe.png",
    },
    timestamp: "12:00",
  },
  {
    message: "I'm having trouble with my account",
    sender: {
      type: "other",
      name: "Jane Doe",
      avatar: "https://github.com/jane-doe.png",
    },
    timestamp: "12:01",
  },
  {
    message: "Need Assistance",
    sender: {
      type: "other",
      name: "Jane Doe",
      avatar: "https://github.com/jane-doe.png",
    },
    timestamp: "12:01",
  },
  {
    message: "Could you please provide your account email?",
    sender: {
      type: "self",
      name: "John Doe",
      avatar: "https://github.com/john-doe.png",
    },
    timestamp: "12:02",
  },
  {
    message: "Sure, it's john@example.com",
    sender: {
      type: "other",
      name: "Jane Doe",
      avatar: "https://github.com/jane-doe.png",
    },
    timestamp: "12:03",
  },
]

const ChatExample = () => {
  return (
    <Card variant="secondary" size="sm" className="w-80 mb-4 ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Chat with Support
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 h-[200px] overflow-y-auto mb-3">
          {chats.map((chat, index) => (
            <ChatBubble
              key={index}
              message={chat.message}
              sender={chat.sender as SenderDetails}
              timestamp={chat.timestamp}
              isPreviousMessageSameSender={index > 0 && chat.sender.type === chats[index - 1].sender.type}
            />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button size="icon" variant="ghost">
            <SentIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatExample;
