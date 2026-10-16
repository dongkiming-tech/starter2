import { connection } from "next/server"

import { getCachedPosts, getFreshPosts } from "@/lib/api"
import type { Post } from "@/lib/api-shared"

function PostList({ posts, fetchedAt }: { posts: Post[]; fetchedAt: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        데이터를 가져온 시각: {new Date(fetchedAt).toLocaleTimeString("ko-KR")}
      </p>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="rounded-lg border p-3">
            <p className="text-sm font-medium">{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ErrorMessage({ error }: { error: unknown }) {
  return (
    <p role="alert" className="text-sm text-destructive">
      데이터를 불러오지 못했습니다:{" "}
      {error instanceof Error ? error.message : "알 수 없는 오류"}
    </p>
  )
}

// 오류를 JSX가 아닌 값으로 반환해 try/catch 안에서 JSX를 만들지 않는다
async function load<T>(fn: () => Promise<T>) {
  try {
    return { data: await fn(), error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// 'use cache' 결과를 사용하는 서버 컴포넌트 — 새로고침해도 시각이 유지된다
export async function CachedPosts() {
  const { data, error } = await load(() => getCachedPosts())
  if (!data) return <ErrorMessage error={error} />
  return <PostList posts={data.posts} fetchedAt={data.fetchedAt} />
}

// 요청 시점에 실행되는 동적 서버 컴포넌트 — 새로고침할 때마다 시각이 바뀐다
export async function FreshPosts() {
  await connection() // 요청 시점 렌더링으로 전환 (Suspense 필요)
  const { data, error } = await load(() => getFreshPosts())
  if (!data) return <ErrorMessage error={error} />
  return <PostList posts={data.posts} fetchedAt={data.fetchedAt} />
}
