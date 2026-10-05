import { cn } from "@/lib/utils";
export function Badge({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-[6px] bg-[#303841] px-3 py-1.5 text-xs font-bold text-[#EEEEEE]", className)} {...p} />;
}
export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border border-[#303841]/10 bg-white", className)} {...p} />;
}
