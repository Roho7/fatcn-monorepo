import { Avatar, AvatarFallback, AvatarImage } from 'fatcn-ui';

const AvatarSizesExample = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="xs" shape="circle">
        <AvatarImage src="https://github.com/mistu2002.png" alt="Mistu" />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
      <Avatar size="sm" shape="circle">
        <AvatarImage src="https://github.com/mistu2002.png" alt="Mistu" />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
      <Avatar size="md" shape="circle">
        <AvatarImage src="https://github.com/mistu2002.png" alt="Mistu" />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
      <Avatar size="lg" shape="circle">
        <AvatarImage src="https://github.com/mistu2002.png" alt="Mistu" />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarSizesExample;
