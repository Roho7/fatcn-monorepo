import { Avatar, AvatarFallback, AvatarImage } from 'fatcn-ui';
import SyntaxHighlighter from 'react-syntax-highlighter';

export type SenderType = 'self' | 'other';
export type SenderDetails = {
  type: SenderType;
  name: string;
  avatar: string;
};
type Props = {
  message?: string;
  sender: SenderDetails;
  timestamp?: string;
  isPreviousMessageSameSender?: boolean;
  isCodePreview?: boolean;
};

const ChatBubble = ({
  message,
  sender,
  timestamp,
  isPreviousMessageSameSender,
  isCodePreview,
}: Props) => {
  const CodeBlock = ({ content }: { content: string }) => {
    const match = content.match(/```(\w+)\n([\s\S]+?)\n```/);
    if (match) {
      const language = match[1];
      const code = match[2];
      return (
        <SyntaxHighlighter
          language={language}
          className="rounded-lg p-4 text-sm"
          customStyle={{
            backgroundColor: 'transparent',
            padding: '10px',
            margin: '0',
            color: 'var(--foreground)',
          }}
        >
          {code}
        </SyntaxHighlighter>
      );
    }
    return <div>{content}</div>;
  };
  return (
    <div
      className={`flex ${sender.type === 'self' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`${sender.type === 'other' ? 'w-6 flex-shrink-0' : ''}`}>
        {sender.type === 'other' && !isPreviousMessageSameSender && (
          <Avatar size="xs" shape="circle" ring className="mt-2">
            <AvatarImage src={sender.avatar} alt={sender.name} />
            <AvatarFallback>{sender.name.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-lg p-2 ${
          sender.type === 'self'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'ml-1 bg-background border border-border shadow-sm'
        }`}
      >
        <div className="text-sm">
          <CodeBlock content={message || ''} />
        </div>
        <p className="text-right text-xs text-primary-foreground/30">
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
