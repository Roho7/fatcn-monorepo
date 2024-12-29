import * as React from "react"
import { cn } from "../../lib"

interface InputProps extends React.ComponentProps<"input"> {
    label?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-1">
    {label && <label htmlFor={props.id} className="text-sm font-medium text-primary-foreground">{label}</label>}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-lg bg-input border border-input px-3 py-1 text-base shadow-sm text-primary-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
