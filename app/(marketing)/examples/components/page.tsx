import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { ComponentsShowcase } from "@/components/examples/components-showcase"

export const metadata: Metadata = { title: "컴포넌트 쇼케이스" }

export default function ComponentsExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="컴포넌트 쇼케이스"
        description="설치된 shadcn/ui 컴포넌트를 직접 눌러 보세요."
      />
      <ComponentsShowcase />
    </div>
  )
}
