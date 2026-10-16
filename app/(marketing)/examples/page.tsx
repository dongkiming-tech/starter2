import type { Metadata } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/common/page-header"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { examples } from "@/config/examples"

export const metadata: Metadata = { title: "예제 모음" }

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="예제 모음"
        description="스타터킷에 포함된 기능을 실제로 동작하는 예제로 확인해 보세요."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map(({ title, href, description, icon: Icon }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-colors group-hover:bg-muted/50">
              <CardHeader>
                <Icon className="mb-2 size-6" aria-hidden />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
