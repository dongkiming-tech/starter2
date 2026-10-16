import type { ReactNode } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ExampleSectionProps = {
  title: string
  description?: string
  code?: string
  children: ReactNode
}

// 예제 하나를 감싸는 카드 (제목, 설명, 데모, 선택적 코드 스니펫)
export function ExampleSection({
  title,
  description,
  code,
  children,
}: ExampleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div>{children}</div>
        {code && (
          <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-xs">
            <code>{code}</code>
          </pre>
        )}
      </CardContent>
    </Card>
  )
}
