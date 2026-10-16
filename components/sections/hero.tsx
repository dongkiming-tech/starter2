import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js · TypeScript · Tailwind · shadcn/ui</Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          빠르게 시작하는 모던 웹 스타터킷
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          레이아웃, 다크모드, 폼 검증, 대시보드까지 갖춘 템플릿으로 아이디어를
          바로 서비스로 만들어 보세요.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/dashboard" className={cn(buttonVariants({ size: "lg" }))}>
            시작하기 <ArrowRight data-icon="inline-end" />
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            더 알아보기
          </Link>
        </div>
      </Container>
    </section>
  )
}
