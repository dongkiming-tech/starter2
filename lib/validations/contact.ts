import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해 주세요."),
  email: z.email("올바른 이메일 주소를 입력해 주세요."),
  message: z.string().min(10, "문의 내용은 10자 이상 입력해 주세요."),
})

export type ContactValues = z.infer<typeof contactSchema>
