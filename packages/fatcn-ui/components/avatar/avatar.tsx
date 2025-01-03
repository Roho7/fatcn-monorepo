import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React from "react";
import { cn } from "../../lib";

const avatarVariants = cva("bg-primary/50 overflow-hidden", {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});

const avatarImageVariants = {
  xs: {
    width: 24,
    height: 24,
  },
  sm: {
    width: 40,
    height: 40,
      },
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 56,
        height: 56,
      },
};

const avatarRingVariants = cva("ring-ring", {
  variants: {
    size: {
      xs: "ring-1",
      sm: "ring-1",
      md: "ring-2",
      lg: "ring-[3px]",
    },
  },
});

const Avatar = ({
  src,
  alt,
  size,
  shape = "circle",
  ring,
  className,
  ...props
}: {
  src: string;
  alt: string;
  size?: VariantProps<typeof avatarVariants>["size"];
  shape?: VariantProps<typeof avatarVariants>["shape"];
  ring?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(avatarVariants({ size, shape }), ring ? avatarRingVariants({ size }) : '', className)} {...props}>
      <Image src={src} alt={alt} {...avatarImageVariants[size as keyof typeof avatarImageVariants || 'md']} />
    </div>
  );
};

Avatar.displayName = "Avatar";
export { Avatar };
