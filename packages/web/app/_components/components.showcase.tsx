import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from "@fatcn/ui";
import { Button } from "@fatcn/ui/components/button";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { useState } from "react";
import ChatExample from "./_examples/chat.example";
import InboxExample from "./_examples/inbox.example";
import SidebarExample from "./_examples/sidebar.example";
import SigninExample from "./_examples/signin.example";
import TicketsExample from "./_examples/tickets.example";


const ComponentsShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative border-t border-border pt-8">
        <h1>Beautiful and Cute</h1>
        <p className="text-sm text-primary-foreground/50">All the components you need, just <strong>cuter</strong> 🐱</p>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-2 p-4 transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[2000px]" : "max-h-[30vh] overflow-hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="md:col-span-2">
              <ChatExample className="w-full mb-2" />
              {[
                  {
                    label: "Customer Growth",
                    value: "+12%",
                    size: "sm",
                    variant: "default",
                  }
                ].map((stat, index) => (
                  <Card
                    key={index}
                    variant={stat.variant as "default" | "secondary" | null}
                    size={stat.size as "sm" | "md" | "lg" | null}
                    className="w-full"
                  >
                    <CardHeader>
                      <CardTitle>{stat.label}</CardTitle>
                      <CardDescription>{stat.label}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-semibold">{stat.value}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
            <div className="md:col-span-2">
              <div className={cn("mb-2 gap-2 h-fit flex-1 w-full")}>
                {[
                  {
                    label: "Average Deal Size",
                    value: "$2,345",
                    size: "sm",
                    variant: "secondary",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    variant={stat.variant as "default" | "secondary" | null}
                    size={stat.size as "sm" | "md" | "lg" | null}
                    className="w-full h-fit"
                  >
                    <CardHeader>
                      <CardTitle>{stat.label}</CardTitle>
                      <CardDescription>{stat.label}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-semibold">{stat.value}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="md:col-span-4">
              <SigninExample className="w-full" />

              </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="md:col-span-2">
              <InboxExample />
            </div>
              <SidebarExample className="w-full" />
            <div className="col-span-1">
            <TicketsExample className="w-full" />

            </div>
        </div>
      </div>

      {/* Show More Button */}
      <Button
      variant={'ghost'}
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full py-2 bg-gradient-to-t from-background via-background to-transparent"
      >
        {isExpanded ? (
          <ArrowUp01Icon className="w-6 h-6" />
        ) : (
          <ArrowDown01Icon className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ComponentsShowcase;
