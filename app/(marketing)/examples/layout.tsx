import type { ReactNode } from "react"

import { ExamplesNav } from "@/components/examples/examples-nav"
import { Container } from "@/components/layout/container"

export default function ExamplesLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="space-y-8 py-10">
      <ExamplesNav />
      {children}
    </Container>
  )
}
