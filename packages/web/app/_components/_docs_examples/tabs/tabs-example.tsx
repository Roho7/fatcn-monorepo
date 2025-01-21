import { Button, Card, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@fatcn/ui'

const TabsExample = () => {
  return (
    <Tabs defaultValue='account' className='w-full'>
      <TabsList>
        <TabsTrigger value='account'>Account Settings</TabsTrigger>
        <TabsTrigger value='security'>Security</TabsTrigger>
      </TabsList>
      <Card className='p-6 rounded-md bg-background min-h-72'>
        <TabsContent value='account'>
          <h3 className='text-lg font-semibold mb-4'>Account Settings</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm mb-2'>Display Name</label>
              <Input
                type='text' 
                placeholder='John Doe'
              />
            </div>
            <div>
              <label className='block text-sm mb-2'>Email Address</label>
              <Input
                type='email' 
                placeholder='john@example.com'
              />
            </div>
            <Button size='sm' variant='outline'>
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value='security'>
          <h3 className='text-lg font-semibold mb-4'>Security Settings</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm mb-2'>Current Password</label>
              <Input
                type='password' 
              />
            </div>
            <div>
              <label className='block text-sm mb-2'>New Password</label>
              <Input
                type='password' 
              />
            </div>
            <Button size='sm' variant='outline'>
              Update Password
            </Button>
          </div>
        </TabsContent>
      </Card>
    </Tabs>
  )
}

export default TabsExample