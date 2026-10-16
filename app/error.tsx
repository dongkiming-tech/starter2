"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

// 이 Next.js 버전의 error.tsx는 reset 대신 retry prop을 받는다
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-2xl font-bold">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">
        잠시 후 다시 시도해 주세요.
      </p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </div>
  )
}
