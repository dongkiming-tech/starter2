import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { HooksDemo } from "@/components/examples/hooks-demo"

export const metadata: Metadata = { title: "usehooks-ts 예제" }

export default function HooksExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="usehooks-ts 예제"
        description="훅을 직접 구현하지 않고 검증된 라이브러리를 사용합니다. SSR에서는 initializeWithValue: false 옵션으로 하이드레이션 불일치를 피합니다."
      />
      <HooksDemo />
    </div>
  )
}
