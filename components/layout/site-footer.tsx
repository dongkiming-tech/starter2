import Link from "next/link"

import { Logo } from "@/components/common/logo"
import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { footerNav, siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          {footerNav.map((group) => (
            <div key={group.title} className="space-y-3">
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-foreground">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground">
          © {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
