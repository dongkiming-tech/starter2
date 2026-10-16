"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  roles,
  signupSchema,
  type SignupValues,
} from "@/lib/validations/signup"

// 다양한 입력 타입(Input/Select/Textarea/Checkbox)과 교차 필드 검증 예시
export function SignupForm() {
  const [submitted, setSubmitted] = useState<Omit<
    SignupValues,
    "password" | "confirmPassword"
  > | null>(null)

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
      newsletter: false,
      terms: false,
    },
  })

  function onSubmit({ password, confirmPassword, ...rest }: SignupValues) {
    void password
    void confirmPassword
    setSubmitted(rest)
    toast.success("가입 폼 검증을 통과했습니다")
  }

  const bioLength = useWatch({ control: form.control, name: "bio" })?.length ?? 0

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="su-email">이메일</FieldLabel>
                <Input
                  {...field}
                  id="su-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="su-password">비밀번호</FieldLabel>
                <Input
                  {...field}
                  id="su-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                <FieldDescription>8자 이상, 숫자 포함</FieldDescription>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="su-confirm">비밀번호 확인</FieldLabel>
                <Input
                  {...field}
                  id="su-confirm"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>역할</FieldLabel>
                <Select
                  items={roles}
                  value={field.value ?? null}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className="w-full"
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="bio"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="su-bio">자기소개 (선택)</FieldLabel>
                <Textarea
                  {...field}
                  id="su-bio"
                  rows={3}
                  aria-invalid={fieldState.invalid}
                />
                <FieldDescription>{bioLength}/100</FieldDescription>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="newsletter"
            control={form.control}
            render={({ field }) => (
              <Field orientation="horizontal">
                <Checkbox
                  id="su-news"
                  checked={field.value}
                  onCheckedChange={(c) => field.onChange(c === true)}
                />
                <FieldLabel htmlFor="su-news">뉴스레터 수신</FieldLabel>
              </Field>
            )}
          />
          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Field orientation="horizontal">
                  <Checkbox
                    id="su-terms"
                    checked={field.value}
                    onCheckedChange={(c) => field.onChange(c === true)}
                  />
                  <FieldLabel htmlFor="su-terms">이용약관에 동의합니다</FieldLabel>
                </Field>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <div className="flex gap-2">
            <Button type="submit">가입하기</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset()
                setSubmitted(null)
              }}
            >
              초기화
            </Button>
          </div>
        </FieldGroup>
      </form>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">제출 결과 (비밀번호 제외)</h3>
        <pre className="min-h-40 overflow-x-auto rounded-lg bg-muted p-3 text-xs">
          {submitted ? JSON.stringify(submitted, null, 2) : "아직 제출되지 않았습니다."}
        </pre>
      </div>
    </div>
  )
}
