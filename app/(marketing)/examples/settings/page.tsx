import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { ExampleSection } from "@/components/examples/example-section"
import { SettingsOptimizationDemo } from "@/components/examples/settings-optimization-demo"

export const metadata: Metadata = { title: "설정 및 최적화" }

const checklist = [
  {
    title: "환경 변수",
    description:
      "브라우저에서 읽어야 하는 값만 NEXT_PUBLIC_ 접두사를 붙입니다. 비밀 값은 접두사 없이 서버에서만 사용하세요.",
    code: `# .env.local\nNEXT_PUBLIC_SITE_URL=https://example.com\nDATABASE_URL=...`,
  },
  {
    title: "메타데이터 / SEO",
    description:
      "layout에서 title.template을 지정하고, 각 페이지는 metadata만 내보내면 됩니다. (config/site.ts 참고)",
    code: `export const metadata: Metadata = { title: "소개" }`,
  },
  {
    title: "폰트",
    description:
      "next/font로 폰트를 self-host하면 외부 요청과 레이아웃 시프트가 사라집니다. (app/layout.tsx 참고)",
    code: `const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })`,
  },
  {
    title: "서버 컴포넌트 우선",
    description:
      "상호작용이 필요한 부분만 \"use client\"로 분리해 클라이언트 번들을 줄입니다.",
    code: `// 페이지는 서버 컴포넌트, 버튼/폼만 클라이언트 컴포넌트로 분리`,
  },
  {
    title: "Suspense 스트리밍",
    description:
      "느린 데이터는 Suspense로 감싸 나머지 UI를 먼저 보여줍니다. (데이터 패칭 예제 참고)",
    code: `<Suspense fallback={<Skeleton />}><SlowData /></Suspense>`,
  },
  {
    title: "번들 분석",
    description:
      "빌드 결과와 번들 크기를 정기적으로 확인하세요.",
    code: `npm run build`,
  },
]

export default function SettingsExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="설정 및 최적화"
        description="사용자 설정을 저장하는 방법과 바로 적용할 수 있는 성능 최적화 기법입니다."
      />
      <SettingsOptimizationDemo />
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">최적화 체크리스트</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {checklist.map((item) => (
            <ExampleSection
              key={item.title}
              title={item.title}
              description={item.description}
              code={item.code}
            >
              {null}
            </ExampleSection>
          ))}
        </div>
      </div>
    </div>
  )
}
