"use client";

import { Download01Icon, FilterIcon, Notification01Icon, Summation01Icon, Search01Icon, AiBrain01Icon, Setting06Icon } from "hugeicons-react";
// import { tableData } from "./data";
import { DialogTitle, Dialog, DialogContent, DialogHeader, DialogTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, DialogDescription, Dropdown, Checkbox, DialogFooter, CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card, Avatar } from "@fatcn/ui";
import { Button } from "@fatcn/ui/components/button";
import { useToast } from "@fatcn/ui";
import { Input } from "@fatcn/ui/components/input/input";
import "./globals.css"

export default function Page() {
  const toast = useToast();
  return (
    <div className="w-full min-h-screen">
      {/* Main content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="border-b bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input placeholder="Search..." className="w-64" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="text-primary-foreground" asChild>
                    <Button variant="ghost" size="icon">
                      <Notification01Icon size={18} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-2">
              <Dropdown
                triggerSize="sm"
                icon={
                  <Avatar
                    ring={true}
                    src="https://avatars.githubusercontent.com/u/125667698?v=4"
                    alt="Rohosen"
                    size="sm"
                    shape="square"
                  />
                }
                options={[
                  {
                    element: <div>Profile</div>,
                    action: () =>
                      toast.showToast(
                        "Profile Saved Successfully",
                        "success",
                        3000,
                      ),
                  },
                  {
                    element: <div>Settings</div>,
                    action: () =>
                      toast.showToast("An Error Occured", "error", 3000),
                    suboptions: [
                      {
                        element: <div>Suboption 1</div>,
                        action: () => {},
                      },
                    ],
                  },
                  {
                    element: <div>Logout</div>,
                    action: () =>
                      toast.showToast("Logout Successfully", "error", 3000),
                  },
                ]}
              >
                <div className="flex items-center gap-2">
                  <span>Rohosen</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">
                Customer Management
              </h1>
              <p className="text-muted-foreground">
                Manage your customer relationships
              </p>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="gradient">Add Customer</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Customer</DialogTitle>
                    <DialogDescription>
                      Enter customer details below
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input placeholder="Customer name" label="Name" />
                    <Input placeholder="customer@example.com" label="Email" />
                    <Input placeholder="+1 (555) 000-0000" label="Phone" />
                    <Dropdown
                      options={[
                        { element: <div>High Priority</div>, action: () => {} },
                        {
                          element: <div>Medium Priority</div>,
                          action: () => {},
                        },
                        { element: <div>Low Priority</div>, action: () => {} },
                      ]}
                    >
                      Select Priority
                    </Dropdown>
                    <Checkbox
                      label="Send welcome email"
                      onCheckedChange={() => alert("checked")}
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button>Save Customer</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="secondary">
                <FilterIcon size={18} className="mr-2" />
                Filters
              </Button>
              <Button variant="outline">
                <Download01Icon size={18} className="mr-2" />
                Export
              </Button>
              {/* <Button variant="ghost">
                <Download01Icon size={18} className="mr-2" />
                Ghost
              </Button>
              <Button variant="link">
                <Link01Icon size={18} className="mr-2" />
                Link
              </Button> */}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-4 gap-4">
            {[
              {
                label: "Total Customers",
                value: "1,234",
                size: "sm",
                variant: "default",
              },
              { label: "Pending Tasks", value: "23", size: "sm" },
              { label: "Customer Growth", value: "+12%", size: "sm" },
              { label: "Average Deal Size", value: "$2,345", size: "sm" },
            ].map((stat, index) => (
              <Card
                key={index}
                variant={
                  (stat.variant as "default" | "secondary" | null) ||
                  "secondary"
                }
                size={stat.size as "sm" | "md" | "lg" | null}
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
          {/* <Table data={tableData} itemsPerPage={3} className="mb-8" /> */}
          <div className="mb-8">
            <Card variant="default" size={"lg"}>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>
                  Access your most used features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold grid grid-cols-2 gap-4">
                  <Button variant="secondary" size="lg">
                    <Search01Icon size={18} className="mr-2" />
                    Search for Contacts
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Summation01Icon size={18} className="mr-2" />
                    Account Summary
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Setting06Icon size={18} className="mr-2" />
                    Settings
                  </Button>
                  <Button variant="secondary" size="lg">
                    <AiBrain01Icon size={18} className="mr-2" />
                    AI Assistant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
