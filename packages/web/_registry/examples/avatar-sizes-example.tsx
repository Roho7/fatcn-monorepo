import { Avatar } from '@fatcn/ui'

const AvatarSizesExample = () => {
  return (
    <div className='flex gap-4 items-center'>
    <Avatar src="https://github.com/roho7.png" alt="Roho7" size="xs" shape="circle" ring />
    <Avatar src="https://github.com/roho7.png" alt="Roho7" size="sm" shape="circle" ring />
    <Avatar src="https://github.com/roho7.png" alt="Roho7" size="md" shape="circle" ring />
    <Avatar src="https://github.com/roho7.png" alt="Roho7" size="lg" shape="circle" ring />
    </div>
  )
}

export default AvatarSizesExample