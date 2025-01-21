import { Button, Card, CardContent, cn } from '@fatcn/ui';
import {
  HelpCircleIcon,
  Home01Icon,
  InboxCheckIcon,
  Settings01Icon,
  Ticket01Icon,
  UserCircleIcon,
} from 'hugeicons-react';

const SidebarExample = ({ className }: { className?: string }) => {
  return (
    <Card variant="secondary" size="sm" className={cn('w-64', className)}>
      <CardContent className="p-2">
        <div className="flex flex-col gap-1">
          {[
            { icon: <Home01Icon className="h-4 w-4" />, label: 'Dashboard' },
            { icon: <InboxCheckIcon className="h-4 w-4" />, label: 'Inbox' },
            { icon: <Ticket01Icon className="h-4 w-4" />, label: 'Tickets' },
            { icon: <UserCircleIcon className="h-4 w-4" />, label: 'Team' },
            {
              icon: <Settings01Icon className="h-4 w-4" />,
              label: 'Settings',
            },
            { icon: <HelpCircleIcon className="h-4 w-4" />, label: 'Help' },
          ].map((item, index) => (
            <Button
              variant="ghost"
              size="sm"
              key={index}
              className="flex items-center justify-start gap-2"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SidebarExample;
