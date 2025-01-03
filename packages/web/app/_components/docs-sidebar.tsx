import {
  Sidebar
} from "@fatcn/ui";

export const DocsSidebar = () => {
  return (
    <Sidebar
      position="left"
      className="w-[20vw]"
      contents={[
        {
          title: "Quickstart",
          items: [
            {
              title: "Installation",
              href: "/docs/installation",
            },
          ],
        },
      ]}
    />
  );
};
