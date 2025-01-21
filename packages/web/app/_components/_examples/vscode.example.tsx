import { Card, CardContent } from "fatcn-ui";
import {
    ArrowDown01Icon,
    ArrowRight01Icon,
    File01Icon,
    Folder01Icon,
    ReactIcon,
    Typescript01Icon,
} from "hugeicons-react";


const VsCodeExample = () => {
  return (
    <Card variant="secondary" size="sm" className="w-80 mb-4">
      <CardContent>
        <div>
          <div className="flex gap-2 px-4 py-2 items-center">
            {" "}
            <ArrowDown01Icon size={18} className="text-primary-foreground/80" />
            <Folder01Icon size={18} /> app/components
          </div>
          <div className="bg-primary-foreground/10 rounded-md">
            <div className="flex gap-2 px-4 py-2 items-center ml-4">
              {" "}
              <ArrowDown01Icon
                size={18}
                className="text-primary-foreground/80"
              />
              <Folder01Icon size={18} /> avatar
            </div>
            <div className="flex gap-2 px-4 py-2 items-center ml-10">
              {" "}
              <ReactIcon
                size={18}
                className="text-primary-foreground/80"
              />{" "}
              avatar.tsx
            </div>
            <div className="flex gap-2 px-4 py-2 items-center ml-10">
              {" "}
              <Typescript01Icon
                size={18}
                className="text-primary-foreground/80"
              />{" "}
              index.ts
            </div>
          </div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4">
            {" "}
            <ArrowRight01Icon
              size={18}
              className="text-primary-foreground/80"
            />
            <Folder01Icon size={18} /> button
          </div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4">
            {" "}
            <ArrowRight01Icon
              size={18}
              className="text-primary-foreground/80"
            />
            <Folder01Icon size={18} /> card
          </div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4">
            {" "}
            <ArrowRight01Icon
              size={18}
              className="text-primary-foreground/80"
            />
            <Folder01Icon size={18} /> checkbox
          </div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4 border-b border-border">
            {" "}
            <ArrowRight01Icon
              size={18}
              className="text-primary-foreground/80"
            />
            <Folder01Icon size={18} /> dialog
          </div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4"><File01Icon size={18} /><span>globals.css</span></div>
          <div className="flex gap-2 px-4 py-2 items-center ml-4"><Typescript01Icon size={18} /><span>tailwind.config.ts</span></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VsCodeExample;
