import type { Metadata } from "next"
import type { ReactNode } from "react"

import { PageHeader } from "@/components/common/page-header"
import { ExampleSection } from "@/components/examples/example-section"

export const metadata: Metadata = { title: "레이아웃 예제" }

function Box({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-md border border-dashed bg-muted/50 p-3 text-xs text-muted-foreground ${className}`}
    >
      {children}
    </div>
  )
}

export default function LayoutsExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="레이아웃 예제"
        description="Tailwind 유틸리티로 만드는 자주 쓰는 레이아웃 패턴입니다. 브라우저 폭을 줄여 반응형을 확인해 보세요."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <ExampleSection
          title="반응형 카드 그리드"
          description="모바일 1열 → sm 2열 → lg 4열"
          code={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <Box key={n} className="h-16">
                {n}
              </Box>
            ))}
          </div>
        </ExampleSection>

        <ExampleSection
          title="사이드바 + 콘텐츠"
          description="좁은 화면에서는 세로로 쌓임"
          code={`grid gap-3 md:grid-cols-[12rem_1fr]`}
        >
          <div className="grid gap-3 md:grid-cols-[8rem_1fr]">
            <Box className="h-32">사이드바</Box>
            <Box className="h-32">메인 콘텐츠</Box>
          </div>
        </ExampleSection>

        <ExampleSection
          title="헤더 · 본문 · 푸터 (Sticky Footer)"
          description="콘텐츠가 짧아도 푸터가 하단에 유지"
          code={`flex min-h-screen flex-col  →  main: flex-1`}
        >
          <div className="flex h-48 flex-col gap-2">
            <Box>Header</Box>
            <Box className="flex-1">Main (flex-1)</Box>
            <Box>Footer</Box>
          </div>
        </ExampleSection>

        <ExampleSection
          title="중앙 정렬 · 분할 레이아웃"
          description="로그인 페이지 등에서 사용하는 2분할"
          code={`grid min-h-screen lg:grid-cols-2`}
        >
          <div className="grid h-40 grid-cols-2 gap-2">
            <Box>브랜딩 영역</Box>
            <Box>폼 영역 (중앙 정렬)</Box>
          </div>
        </ExampleSection>

        <ExampleSection
          title="스크롤 영역 안의 Sticky 헤더"
          description="아래 영역을 스크롤해 보세요."
          code={`sticky top-0 bg-background`}
        >
          <div className="h-40 overflow-y-auto rounded-md border">
            <div className="sticky top-0 border-b bg-background p-2 text-sm font-medium">
              Sticky 헤더
            </div>
            {Array.from({ length: 12 }, (_, i) => (
              <p key={i} className="border-b px-3 py-2 text-sm">
                행 {i + 1}
              </p>
            ))}
          </div>
        </ExampleSection>

        <ExampleSection
          title="Container 컴포넌트"
          description="components/layout/container.tsx — 최대 너비와 좌우 여백 통일"
          code={`<Container>...</Container>  // max-w-6xl px-4 sm:px-6 lg:px-8`}
        >
          <div className="rounded-md border bg-muted/30 p-3">
            <Box className="mx-auto max-w-xs">max-w 안쪽 콘텐츠</Box>
          </div>
        </ExampleSection>
      </div>

      <p className="text-sm text-muted-foreground">
        실제 적용된 레이아웃: 마케팅 레이아웃(헤더/푸터)은 이 페이지에서, 사이드바 레이아웃은 대시보드에서 확인할 수 있습니다.
      </p>
    </div>
  )
}
