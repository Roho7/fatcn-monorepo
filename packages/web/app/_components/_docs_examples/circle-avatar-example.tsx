import { Avatar, AvatarFallback, AvatarImage } from 'fatcn-ui'

const CircleAvatarExample = () => {
  return (
    <Avatar size="md" shape="circle">
      <AvatarImage src="https://github.com/roho7.png" alt="Roho7" />
      <AvatarFallback>RO</AvatarFallback>
    </Avatar>
  )
}

export default CircleAvatarExample