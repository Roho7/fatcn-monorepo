import { Button } from '@fatcn-ui/components/button';
import { Card, CardContent, CardHeader, CardTitle } from 'fatcn-ui';
import { InboxCheckIcon, Mail01Icon } from 'hugeicons-react';

const InboxExample = () => {
  return (
    <Card variant="secondary" size="sm" className="w-full h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <InboxCheckIcon className="w-4 h-4" />
            Inbox
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {[
              { sender: "John Doe", subject: "Project Update", time: "2m ago" },
              {
                sender: "Jane Smith",
                subject: "Meeting Notes",
                time: "1h ago",
              },
              { sender: "Team Lead", subject: "Weekly Review", time: "3h ago" },
            ].map((mail, index) => (
              <Button key={index} variant="ghost" size="sm">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Mail01Icon className="w-4 h-4" />
                    <div className="">
                      <div className="font-medium text-left">{mail.sender}</div>
                      <div className="text-xs text-muted-foreground text-left">
                        {mail.subject}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {mail.time}
                  </span>
                </div>
              </Button>
            ))}
        </div>
      </CardContent>
    </Card> 
  );
};

export default InboxExample