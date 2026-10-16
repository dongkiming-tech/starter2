"use client"

import { useState } from "react"
import useSWR from "swr"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { jsonFetcher, postsUrl, type Post } from "@/lib/api-shared"

// SWR: 캐싱, 중복 요청 제거, 포커스 시 재검증, 로딩/에러 상태를 제공
export function SwrPosts() {
  const [page, setPage] = useState(1)
  const { data, error, isLoading, isValidating, mutate } = useSWR<Post[]>(
    postsUrl(page),
    jsonFetcher,
    { keepPreviousData: true }
  )

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          이전
        </Button>
        <span className="text-sm">페이지 {page}</span>
        <Button variant="outline" size="sm" onClick={() => setPage((p) => p + 1)}>
          다음
        </Button>
        <Button variant="ghost" size="sm" onClick={() => mutate()}>
          새로고침
        </Button>
        {isValidating && (
          <span className="text-xs text-muted-foreground">불러오는 중...</span>
        )}
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          데이터를 불러오지 못했습니다: {error.message}
        </p>
      )}

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {data?.map((post) => (
            <li key={post.id} className="rounded-lg border p-3">
              <p className="text-sm font-medium">{post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
