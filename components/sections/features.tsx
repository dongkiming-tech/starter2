import { LayoutDashboard, Moon, Palette, ShieldCheck } from "lucide-react"

import { Container } from "@/components/layout/container"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Palette,
    title: "shadcn/ui 컴포넌트",
    description: "접근성이 검증된 UI 컴포넌트를 필요한 만큼 추가해 사용합니다.",
  },
  {
    icon: Moon,
    title: "다크모드",
    description: "next-themes로 라이트·다크·시스템 테마를 지원합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전한 폼",
    description: "react-hook-form과 zod로 검증이 포함된 폼을 만듭니다.",
  },
  {
    icon: LayoutDashboard,
    title: "마케팅·대시보드 레이아웃",
    description: "라우트 그룹으로 목적에 맞는 레이아웃을 분리했습니다.",
  },
]

export function Features() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <Container className="space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
          <p className="text-muted-foreground">
            검증된 라이브러리 위에 구성한 스타터킷입니다.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 size-6" aria-hidden />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
