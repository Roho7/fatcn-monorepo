import { Card, CardContent } from '@fatcn/ui'
import { Home01Icon, InboxCheckIcon, Ticket01Icon, UserCircleIcon, Settings01Icon, HelpCircleIcon } from 'hugeicons-react'
import React from 'react'

const SidebarExample = () => {
  return (
    <Card variant="secondary" size="sm" className="w-64 mb-4">
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
              <div
                key={index}
                className="flex items-center gap-3 p-2 hover:bg-secondary/20 rounded-md cursor-pointer"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}

export default SidebarExample