import { Avatar, AvatarFallback, AvatarImage } from '@fatcn-ui';

const SquareAvatarExample = () => {
  return (
    <Avatar size="md" shape="square">
      <AvatarImage src="https://github.com/roho7.png" alt="Roho7" />
      <AvatarFallback>RO</AvatarFallback>
    </Avatar>
  );
};

export default SquareAvatarExample;
