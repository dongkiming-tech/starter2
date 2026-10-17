import { Quote } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Logo } from "@/components/common/logo"
import { LoginForm } from "@/components/forms/login-form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인하여 서비스를 이용하세요.",
}

export default function LoginPage() {
  return (
    <>
      {/* 좌측 브랜드 패널: 데스크톱에서만 노출 */}
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-10 text-primary-foreground lg:flex">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-96 rounded-full bg-primary-foreground/10 blur-3xl"
        />
        <Logo />
        <figure className="relative space-y-4">
          <Quote className="size-8 opacity-60" aria-hidden />
          <blockquote className="text-2xl leading-snug font-medium text-balance">
            복잡한 설정은 덜어내고, 만들고 싶은 것에만 집중할 수 있게 되었어요.
          </blockquote>
          <figcaption className="text-sm opacity-70">
            Next Starter 사용자
          </figcaption>
        </figure>
      </aside>

      <section className="flex flex-1 flex-col px-6 py-8">
        <Logo className="lg:hidden" />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              다시 오신 것을 환영합니다
            </h1>
            <p className="text-sm text-muted-foreground">
              이메일과 비밀번호로 로그인하세요.
            </p>
          </div>

          <LoginForm />

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">또는</span>
            <Separator className="flex-1" />
          </div>

          <Button variant="outline" size="lg" className="w-full">
            GitHub로 계속하기
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            계정이 없으신가요?{" "}
            <Link
              href="#"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              회원가입
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
