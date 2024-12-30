import { Card, CardHeader, CardTitle, CardContent, Button } from '@fatcn/ui'
import { Tag01Icon, Ticket01Icon } from 'hugeicons-react'
import React from 'react'

type Props = {}

const TicketsExample = (props: Props) => {
  return (
    <Card variant="default" size="sm" className="w-80 mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket01Icon className="w-4 h-4" />
            Ticket Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {[
              {
                title: "Bug Fix: Login Issue",
                assignee: "Alex",
                priority: "High",
              },
              {
                title: "Feature: Dark Mode",
                assignee: "Sarah",
                priority: "Medium",
              },
              {
                title: "Update Documentation",
                assignee: "Mike",
                priority: "Low",
              },
            ].map((ticket, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center justify-between py-2 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Tag01Icon className="w-4 h-4" />
                  <div>
                    <div className="font-medium text-left">{ticket.title}</div>
                    <div className="text-xs text-primary-foreground/50 text-left">
                      Assigned to: {ticket.assignee}
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    ticket.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : ticket.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {ticket.priority}
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}

export default TicketsExample