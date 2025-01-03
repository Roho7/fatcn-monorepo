import { Button, Card, CardContent, cn } from '@fatcn/ui'
import { HelpCircleIcon, Home01Icon, InboxCheckIcon, Settings01Icon, Ticket01Icon, UserCircleIcon } from 'hugeicons-react'

const SidebarExample = ({className}: {className?: string}) => {
  return (
    <Card variant="secondary" size="sm" className={cn("w-64", className)}>
        <CardContent className="p-2">
          <div className="flex flex-col gap-1">
            {[
              { icon: <Home01Icon className="w-4 h-4" />, label: "Dashboard" },
              { icon: <InboxCheckIcon className="w-4 h-4" />, label: "Inbox" },
              { icon: <Ticket01Icon className="w-4 h-4" />, label: "Tickets" },
              { icon: <UserCircleIcon className="w-4 h-4" />, label: "Team" },
              {
                icon: <Settings01Icon className="w-4 h-4" />,
                label: "Settings",
              },
              { icon: <HelpCircleIcon className="w-4 h-4" />, label: "Help" },
            ].map((item, index) => (
              <Button
                variant="ghost"
                size="sm"
                key={index}
                className="flex justify-start items-center gap-2"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}

export default SidebarExample