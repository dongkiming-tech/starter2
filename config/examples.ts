import {
  Boxes,
  Database,
  Gauge,
  LayoutTemplate,
  type LucideIcon,
  Plug,
  TextCursorInput,
} from "lucide-react"

export type ExampleItem = {
  title: string
  href: string
  description: string
  icon: LucideIcon
}

// 예제 페이지 목록 (인덱스 카드와 서브 내비게이션에서 공유)
export const examples: ExampleItem[] = [
  {
    title: "컴포넌트 쇼케이스",
    href: "/examples/components",
    description: "설치된 shadcn/ui 컴포넌트의 변형과 상호작용을 한눈에 확인합니다.",
    icon: Boxes,
  },
  {
    title: "폼 예제",
    href: "/examples/forms",
    description: "react-hook-form + zod로 만든 검증 폼과 다양한 입력 컴포넌트.",
    icon: TextCursorInput,
  },
  {
    title: "레이아웃 예제",
    href: "/examples/layouts",
    description: "자주 쓰는 레이아웃 패턴: 그리드, 사이드바, 스티키 헤더 등.",
    icon: LayoutTemplate,
  },
  {
    title: "usehooks-ts 예제",
    href: "/examples/hooks",
    description: "검증된 훅 라이브러리로 구현한 실제 동작 데모.",
    icon: Plug,
  },
  {
    title: "데이터 패칭",
    href: "/examples/data-fetching",
    description: "서버 컴포넌트 + use cache, Suspense 스트리밍, SWR 클라이언트 패칭.",
    icon: Database,
  },
  {
    title: "설정 및 최적화",
    href: "/examples/settings",
    description: "사용자 설정 저장, 이미지·폰트·동적 import 등 성능 최적화 기법.",
    icon: Gauge,
  },
]
