import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Cta() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          지금 바로 시작해 보세요
        </h2>
        <p className="max-w-xl text-muted-foreground">
          궁금한 점이 있다면 언제든 문의해 주세요.
        </p>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
          문의하기
        </Link>
      </Container>
    </section>
  )
}
