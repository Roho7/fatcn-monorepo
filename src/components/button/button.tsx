import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow ",
        secondary:
          "bg-primary text-primary-foreground hover:bg-accent shadow ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow ",
        outline:
          "bg-background text-primary-foreground hover:bg-accent shadow ",
        ghost: "text-primary-foreground hover:bg-accent",
        link: "text-primary-foreground underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 rounded-md px-2 text-xs",
        md: "h-11 px-3 py-2 rounded-lg",
        lg: "h-12 rounded-xl px-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
