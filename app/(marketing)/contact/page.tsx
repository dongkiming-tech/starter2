import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { ContactForm } from "@/components/forms/contact-form"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = { title: "문의" }

export default function ContactPage() {
  return (
    <Container className="max-w-2xl space-y-8 py-12">
      <PageHeader
        title="문의하기"
        description="궁금한 점을 남겨 주시면 확인 후 답변드립니다."
      />
      <Card>
        <CardContent className="pt-6">
          <ContactForm />
        </CardContent>
      </Card>
    </Container>
  )
}
