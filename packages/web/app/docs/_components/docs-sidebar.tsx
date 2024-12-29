import {
  CardTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Sidebar,
} from "@fatcn/ui/dist";
import { Message01Icon } from "hugeicons-react";

export const DocsSidebar = () => {
  return (
    <Sidebar
      position="left"
      header={<div>Header</div>}
      contents={[
        {
          title: "Quickstart",
          items: [
            {
              title: "Installation",
              href: "/installation",
            },
          ],
        },
      ]}
      footer={
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
      }
    />
  );
};
