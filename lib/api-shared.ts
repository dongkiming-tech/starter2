// 서버·클라이언트 양쪽에서 쓸 수 있는 API 타입과 헬퍼

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export const BASE_URL = "https://jsonplaceholder.typicode.com"

// 클라이언트(SWR)용 fetcher
export async function jsonFetcher<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`요청 실패 (${res.status})`)
  return res.json()
}

export const postsUrl = (page: number, limit = 5) =>
  `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
