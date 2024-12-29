import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "../../lib";
import React from "react";

const avatarVariants = cva("bg-primary/50 overflow-hidden", {
  variants: {
    size: {
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
}: {
  src: string;
  alt: string;
  size?: VariantProps<typeof avatarVariants>["size"];
  shape?: VariantProps<typeof avatarVariants>["shape"];
  ring?: boolean;
}) => {
  return (
    <div className={cn(avatarVariants({ size, shape }), ring ? avatarRingVariants({ size }) : '')}>
      <Image src={src} alt={alt} {...avatarImageVariants[size as keyof typeof avatarImageVariants || 'md']} />
    </div>
  );
};

Avatar.displayName = "Avatar";
export { Avatar };
