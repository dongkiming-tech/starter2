import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { ExampleSection } from "@/components/examples/example-section"
import { ContactForm } from "@/components/forms/contact-form"
import { SignupForm } from "@/components/forms/signup-form"

export const metadata: Metadata = { title: "폼 예제" }

export default function FormsExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="폼 예제"
        description="react-hook-form + zod 조합. 스키마 하나로 타입과 검증을 함께 관리합니다."
      />
      <ExampleSection
        title="가입 폼"
        description="Select·Checkbox·Textarea, 비밀번호 확인 같은 교차 필드 검증, 블러 시 검증(mode: onBlur)."
      >
        <SignupForm />
      </ExampleSection>
      <ExampleSection
        title="문의 폼 (기본형)"
        description="가장 단순한 형태의 검증 폼입니다."
      >
        <div className="max-w-md">
          <ContactForm />
        </div>
      </ExampleSection>
    </div>
  )
}
