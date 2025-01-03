import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fatcn/ui'


const DocsRHS = () => {
  return (
    <aside className='w-[20vw] bg-muted/30 border-l border-border p-4'>
        <Card title="Profile Completion" variant="secondary" size={"sm"}>
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Profile Completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">80%</div>
          </CardContent>
          <CardFooter>
            <Button variant="gradient" size="xs" className="w-full">
              Complete Now
            </Button>
          </CardFooter>
        </Card>
    </aside>
  )
}

export default DocsRHS