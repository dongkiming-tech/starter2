import type { Metadata } from "next"
import { Suspense } from "react"

import { PageHeader } from "@/components/common/page-header"
import { ExampleSection } from "@/components/examples/example-section"
import { CachedPosts, FreshPosts } from "@/components/examples/server-posts"
import { SwrPosts } from "@/components/examples/swr-posts"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = { title: "데이터 패칭" }

function ListSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }, (_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  )
}

export default function DataFetchingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="데이터 패칭"
        description="JSONPlaceholder 공개 API로 세 가지 패칭 방식을 비교합니다. 페이지를 새로고침하며 '가져온 시각'을 비교해 보세요."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <ExampleSection
          title="① 서버 + use cache"
          description="결과를 캐시해 재사용합니다. 새로고침해도 시각이 그대로입니다."
          code={`async function getCachedPosts() {\n  "use cache"\n  cacheLife("minutes")\n  ...\n}`}
        >
          <Suspense fallback={<ListSkeleton />}>
            <CachedPosts />
          </Suspense>
        </ExampleSection>

        <ExampleSection
          title="② 서버 + 요청 시점(동적)"
          description="매 요청마다 가져옵니다. Suspense로 나머지 UI를 먼저 스트리밍합니다."
          code={`await connection()\nfetch(url, { cache: "no-store" })`}
        >
          <Suspense fallback={<ListSkeleton />}>
            <FreshPosts />
          </Suspense>
        </ExampleSection>

        <ExampleSection
          title="③ 클라이언트 + SWR"
          description="상호작용이 필요한 데이터에 적합합니다. 캐시, 재검증, 페이지네이션 포함."
          code={`const { data, error, isLoading } = useSWR(url, fetcher)`}
        >
          <SwrPosts />
        </ExampleSection>
      </div>
    </div>
  )
}
