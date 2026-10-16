import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = { title: "설정" }

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="설정" description="여기에 설정 화면을 구성하세요." />
    </div>
  )
}
