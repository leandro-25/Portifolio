import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all focus-visible:outline-none disabled:opacity-50 cursor-pointer", {
  variants: { variant: { default: "bg-lime text-white hover:brightness-110 shadow-[4px_4px_0_#303841]", lime: "bg-[#D72323] text-white hover:bg-[#B81E1E] rounded-[4px]", outline: "border border-lime/50 text-lime hover:bg-lime hover:text-white", ghost: "text-[#303841] hover:text-lime" }, size: { default: "h-10 px-5 py-2", sm: "h-8 px-3 text-xs", lg: "h-12 px-8 text-base" } },
  defaultVariants: { variant: "lime", size: "default" },
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";
export { Button, buttonVariants };
