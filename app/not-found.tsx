import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-semibold text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted-foreground">
        주소가 올바른지 확인해 주세요.
      </p>
      <Link href="/" className={buttonVariants()}>
        홈으로 돌아가기
      </Link>
    </div>
  )
}
