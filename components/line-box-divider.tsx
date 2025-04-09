interface LineBoxDividerProps {
  className?: string
  highlightCorners?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "all" | "none"
}

export default function LineBoxDivider({ className = "", highlightCorners = "none" }: LineBoxDividerProps) {
  const getCornerClass = (corner: string) => {
    if (highlightCorners === "all") return "border-primary"
    if (highlightCorners === corner) return "border-primary"
    return "border-border/40"
  }

  return (
    <div className={`relative border-t border-l border-r border-b border-border/40 ${className}`}>
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${getCornerClass("top-left")} transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${getCornerClass("top-right")} transform translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${getCornerClass("bottom-left")} transform -translate-x-1/2 translate-y-1/2`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${getCornerClass("bottom-right")} transform translate-x-1/2 translate-y-1/2`}
      ></div>
    </div>
  )
}

