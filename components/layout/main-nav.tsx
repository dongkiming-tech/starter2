"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { mainNav } from "@/config/site"
import { cn } from "@/lib/utils"

// 데스크톱 상단 내비게이션 (현재 경로 강조)
export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="메인">
      {mainNav.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              active ? "bg-muted text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
