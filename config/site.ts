// 사이트 전역 설정 상수 (이름, 설명, 내비게이션 등)
export const siteConfig = {
  name: "Next Starter",
  description:
    "Next.js, TypeScript, Tailwind CSS, shadcn/ui로 만든 모던 웹 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com",
  },
} as const

export type NavItem = {
  title: string
  href: string
}

export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "예제", href: "/examples" },
  { title: "소개", href: "/about" },
  { title: "문의", href: "/contact" },
  { title: "대시보드", href: "/dashboard" },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "서비스",
    items: [
      { title: "홈", href: "/" },
      { title: "대시보드", href: "/dashboard" },
    ],
  },
  {
    title: "회사",
    items: [
      { title: "소개", href: "/about" },
      { title: "문의", href: "/contact" },
    ],
  },
]
