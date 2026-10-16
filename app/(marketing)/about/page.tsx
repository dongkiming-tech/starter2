import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "소개" }

const stack = [
  ["Next.js", "App Router 기반 풀스택 React 프레임워크"],
  ["TypeScript", "타입 안전성"],
  ["Tailwind CSS", "유틸리티 우선 스타일링"],
  ["shadcn/ui", "복사해서 쓰는 접근성 UI 컴포넌트"],
  ["lucide-react", "아이콘"],
  ["next-themes", "다크모드"],
  ["react-hook-form + zod", "폼과 검증"],
  ["usehooks-ts", "범용 React 훅"],
]

export default function AboutPage() {
  return (
    <Container className="space-y-8 py-12">
      <PageHeader
        title="소개"
        description="이 스타터킷은 검증된 라이브러리를 조합해 빠른 시작을 돕습니다."
      />
      <Card>
        <CardHeader>
          <CardTitle>기술 스택</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2">
            {stack.map(([name, desc]) => (
              <li key={name} className="flex items-center gap-3">
                <Badge variant="secondary">{name}</Badge>
                <span className="text-sm text-muted-foreground">{desc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Container>
  )
}
