import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { Container } from "@/components/layout/container"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center gap-4">
        <MobileNav />
        <Logo className="mr-2" />
        <MainNav />
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
