"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { examples } from "@/config/examples"
import { cn } from "@/lib/utils"

// 예제 페이지 상단 서브 내비게이션 (모바일에서는 가로 스크롤)
export function ExamplesNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="예제"
      className="-mx-4 flex gap-1 overflow-x-auto border-b px-4 pb-2 sm:mx-0 sm:px-0"
    >
      {examples.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
