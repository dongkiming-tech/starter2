"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useDeferredValue, useMemo, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

import { ExampleSection } from "@/components/examples/example-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

// 최적화 ①: 필요할 때만 번들을 내려받는 동적 import
const HeavyWidget = dynamic(() => import("@/components/examples/heavy-widget"), {
  loading: () => <Skeleton className="h-24 w-full" />,
})

const FONT_SIZES = { small: "text-sm", medium: "text-base", large: "text-xl" } as const
type FontSize = keyof typeof FONT_SIZES

function SettingsDemo() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize, resetFontSize] = useLocalStorage<FontSize>(
    "starter-font-size",
    "medium",
    { initializeWithValue: false }
  )

  return (
    <ExampleSection
      title="사용자 설정 저장"
      description="테마는 next-themes, 글자 크기는 useLocalStorage로 브라우저에 저장됩니다. 새로고침해도 유지됩니다."
      code={`const [fontSize, setFontSize] = useLocalStorage("starter-font-size", "medium")`}
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <p className="text-sm font-medium">테마</p>
          <div className="flex gap-2">
            {(["light", "dark", "system"] as const).map((t) => (
              <Button
                key={t}
                size="sm"
                variant={theme === t ? "default" : "outline"}
                onClick={() => setTheme(t)}
              >
                {t === "light" ? "라이트" : t === "dark" ? "다크" : "시스템"}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-sm font-medium">글자 크기</p>
          <div className="flex gap-2">
            {(Object.keys(FONT_SIZES) as FontSize[]).map((s) => (
              <Button
                key={s}
                size="sm"
                variant={fontSize === s ? "default" : "outline"}
                onClick={() => setFontSize(s)}
              >
                {s === "small" ? "작게" : s === "medium" ? "보통" : "크게"}
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={resetFontSize}>
              초기화
            </Button>
          </div>
        </div>
        <p className={`rounded-lg border p-3 ${FONT_SIZES[fontSize]}`}>
          미리보기: 설정한 글자 크기가 적용됩니다.
        </p>
      </div>
    </ExampleSection>
  )
}

function ImageDemo() {
  return (
    <ExampleSection
      title="next/image"
      description="자동 리사이징, 지연 로딩, 레이아웃 시프트(CLS) 방지. 첫 화면 이미지에는 priority를 사용합니다."
      code={`<Image src="/sample.svg" alt="..." fill sizes="(min-width: 1024px) 33vw, 100vw" />`}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg border">
        <Image
          src="/sample.svg"
          alt="그라디언트 샘플 이미지"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
    </ExampleSection>
  )
}

function DynamicImportDemo() {
  const [show, setShow] = useState(false)
  return (
    <ExampleSection
      title="동적 import (next/dynamic)"
      description="버튼을 누르기 전에는 위젯 코드가 번들에 로드되지 않습니다. 개발자 도구 Network 탭에서 확인해 보세요."
      code={`const HeavyWidget = dynamic(() => import("./heavy-widget"))`}
    >
      <div className="space-y-3">
        <Button variant="outline" onClick={() => setShow((v) => !v)}>
          {show ? "숨기기" : "위젯 불러오기"}
        </Button>
        {show && <HeavyWidget />}
      </div>
    </ExampleSection>
  )
}

const ITEMS = Array.from({ length: 3000 }, (_, i) => `항목 ${i + 1}`)

function DeferredListDemo() {
  const [query, setQuery] = useState("")
  // 최적화 ②: 무거운 목록 필터링을 낮은 우선순위로 미뤄 입력 반응성을 유지
  const deferredQuery = useDeferredValue(query)
  const filtered = useMemo(
    () => ITEMS.filter((item) => item.includes(deferredQuery)),
    [deferredQuery]
  )

  return (
    <ExampleSection
      title="useDeferredValue + useMemo"
      description="3,000개 항목을 필터링해도 입력이 끊기지 않도록 렌더링 우선순위를 낮춥니다."
      code={`const deferredQuery = useDeferredValue(query)\nconst filtered = useMemo(() => ITEMS.filter(...), [deferredQuery])`}
    >
      <div className="space-y-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="예: 99"
        />
        <p className="text-xs text-muted-foreground">
          {filtered.length.toLocaleString()}개 일치
          {query !== deferredQuery && " (갱신 중...)"}
        </p>
        <ul className="h-32 overflow-y-auto rounded-lg border p-2 text-sm">
          {filtered.slice(0, 200).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ExampleSection>
  )
}

export function SettingsOptimizationDemo() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SettingsDemo />
      <ImageDemo />
      <DynamicImportDemo />
      <DeferredListDemo />
    </div>
  )
}
