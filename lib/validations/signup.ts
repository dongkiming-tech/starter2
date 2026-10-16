import { z } from "zod"

export const roles = [
  { value: "developer", label: "개발자" },
  { value: "designer", label: "디자이너" },
  { value: "manager", label: "기획/PM" },
] as const

export const signupSchema = z
  .object({
    email: z.email("올바른 이메일 주소를 입력해 주세요."),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .regex(/[0-9]/, "숫자를 하나 이상 포함해 주세요."),
    confirmPassword: z.string(),
    role: z.enum(["developer", "designer", "manager"], {
      error: "역할을 선택해 주세요.",
    }),
    bio: z.string().max(100, "소개는 100자 이하로 입력해 주세요.").optional(),
    newsletter: z.boolean(),
    terms: z.boolean().refine((v) => v, "약관에 동의해야 가입할 수 있습니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  })

export type SignupValues = z.infer<typeof signupSchema>
