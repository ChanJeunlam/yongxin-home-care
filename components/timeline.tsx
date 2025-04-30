import { cn } from "@/lib/utils"

export function Timeline({ className, children, ...props }) {
  return (
    <div className={cn("space-y-8", className)} {...props}>
      {children}
    </div>
  )
}

export function TimelineItem({ year, title, children, className, ...props }) {
  return (
    <div className={cn("relative pl-8 pb-8", className)} {...props}>
      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] text-white text-xs font-bold">
        <span className="relative z-10">{year.slice(-2)}</span>
      </div>
      <div className="absolute left-3 top-6 bottom-0 w-[1px] bg-gradient-to-b from-[#FF7F50] to-[#4A90E2]/30"></div>
      <div className="pt-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-1">{children}</p>
        <div className="text-sm text-gray-500 mt-1">{year}</div>
      </div>
    </div>
  )
}
