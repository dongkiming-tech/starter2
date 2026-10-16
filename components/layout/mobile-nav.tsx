"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Logo } from "@/components/common/logo"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { mainNav, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// 모바일 햄버거 메뉴 (Sheet)
export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="메뉴 열기"
          />
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="sr-only">{siteConfig.name} 메뉴</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="모바일">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-start"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
