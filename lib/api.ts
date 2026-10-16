import { cacheLife } from "next/cache"

import { BASE_URL, type Post } from "@/lib/api-shared"

// 서버 전용 패칭 함수 (클라이언트 컴포넌트에서 import하지 말 것)

// 캐시된 서버 패칭: 결과가 'minutes' 단위로 재사용된다 (Cache Components)
export async function getCachedPosts(limit = 5) {
  "use cache"
  cacheLife("minutes")

  const res = await fetch(`${BASE_URL}/posts?_limit=${limit}`)
  if (!res.ok) throw new Error(`요청 실패 (${res.status})`)
  const posts: Post[] = await res.json()
  return { posts, fetchedAt: new Date().toISOString() }
}

// 캐시하지 않는 패칭: 호출할 때마다 새로 가져온다 (요청 시점 데이터)
export async function getFreshPosts(limit = 5) {
  const res = await fetch(`${BASE_URL}/posts?_limit=${limit}`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`요청 실패 (${res.status})`)
  const posts: Post[] = await res.json()
  return { posts, fetchedAt: new Date().toISOString() }
}
