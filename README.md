# Next Starter

Next.js(App Router), TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react 기반의 모던 웹 스타터킷입니다.

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 포함된 기능

- 마케팅 레이아웃(헤더, 푸터, 모바일 메뉴)과 대시보드 레이아웃(사이드바)
- 다크모드(`next-themes`): 라이트, 다크, 시스템
- 폼 검증 예시(`react-hook-form` + `zod`)와 토스트(`sonner`)
- `loading.tsx`, `error.tsx`, `not-found.tsx`
- SEO 메타데이터 기본 설정
- 예제 모음(`/examples`): 아래 표 참고

## 예제 모음

| 경로 | 내용 |
|---|---|
| `/examples/components` | shadcn/ui 컴포넌트 쇼케이스 (Dialog, Sheet, Tabs, 토스트 등) |
| `/examples/forms` | 가입 폼(Select, Checkbox, 교차 필드 검증)과 문의 폼 |
| `/examples/layouts` | 그리드, 사이드바, Sticky Footer 등 레이아웃 패턴 |
| `/examples/hooks` | `usehooks-ts` 훅 10종 동작 데모 |
| `/examples/data-fetching` | 서버 `use cache`, 요청 시점 패칭, 클라이언트 SWR 비교 |
| `/examples/settings` | 설정 저장(localStorage), next/image, 동적 import, useDeferredValue, 최적화 체크리스트 |

예제 목록은 `config/examples.ts`에서 관리합니다. 예제가 필요 없으면 `app/(marketing)/examples`, `components/examples`, `config/examples.ts`를 삭제하고 `config/site.ts`의 내비게이션에서 "예제"를 지우세요.

서버 전용 패칭 코드(`lib/api.ts`)는 `next/cache`를 쓰므로 클라이언트 컴포넌트에서 import하면 안 됩니다. 양쪽에서 쓰는 코드는 `lib/api-shared.ts`에 둡니다.

## 폴더 구조

```
app/
  (marketing)/   # 헤더/푸터 레이아웃: 홈, 소개, 문의
  (dashboard)/   # 사이드바 레이아웃: 대시보드, 설정
components/
  ui/            # shadcn/ui 원자 컴포넌트 (CLI로 설치)
  common/        # 조합 컴포넌트 (Logo, ThemeToggle, PageHeader)
  layout/        # 레이아웃 (SiteHeader, SiteFooter, MainNav, MobileNav, AppSidebar, Container)
  sections/      # 페이지 섹션 (Hero, Features, Cta)
  forms/         # 폼 컴포넌트
  providers/     # 전역 Provider
config/site.ts   # 사이트 이름, 내비게이션 등 설정
lib/             # 유틸(cn), zod 스키마
hooks/           # 프로젝트 전용 훅
```

## 사용한 라이브러리

| 목적 | 라이브러리 |
|---|---|
| 클래스 병합 | `clsx`, `tailwind-merge` |
| 다크모드 | `next-themes` |
| 폼, 검증 | `react-hook-form`, `zod`, `@hookform/resolvers` |
| 토스트 | `sonner` |
| 날짜 | `date-fns` |
| 범용 훅 | `usehooks-ts` (useMediaQuery, useLocalStorage 등) |

훅은 직접 구현하지 말고 `usehooks-ts`를 우선 사용하세요.

## 컴포넌트 추가하기

```bash
npx shadcn@latest add <component>
```

주의: 이 프로젝트에서 CLI가 `cn`을 `"cn"` 패키지에서 가져오도록 생성합니다. 추가한 뒤 `components/ui/*.tsx`의 `from "cn"`을 `from "@/lib/utils"`로 바꿔 주세요.

## 사이트 설정 바꾸기

`config/site.ts`에서 사이트 이름, 설명, 내비게이션 링크를 수정합니다.
