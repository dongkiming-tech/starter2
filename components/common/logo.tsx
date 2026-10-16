import { Sparkles } from "lucide-react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <Sparkles className="size-5" aria-hidden />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
