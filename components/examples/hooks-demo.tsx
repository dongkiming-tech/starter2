"use client"

import { Check, Copy } from "lucide-react"
import { useRef, useState } from "react"
import {
  useCopyToClipboard,
  useCountdown,
  useCounter,
  useDebounceValue,
  useHover,
  useIntersectionObserver,
  useInterval,
  useLocalStorage,
  useMediaQuery,
  useOnClickOutside,
  useToggle,
  useWindowSize,
} from "usehooks-ts"

import { ExampleSection } from "@/components/examples/example-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0)
  return (
    <ExampleSection
      title="useCounter"
      code={`const { count, increment, decrement, reset } = useCounter(0)`}
    >
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={decrement} aria-label="감소">
          -
        </Button>
        <span className="w-12 text-center text-lg font-semibold">{count}</span>
        <Button variant="outline" size="icon" onClick={increment} aria-label="증가">
          +
        </Button>
        <Button variant="ghost" onClick={reset}>
          초기화
        </Button>
      </div>
    </ExampleSection>
  )
}

function ToggleDemo() {
  const [on, toggle] = useToggle(false)
  return (
    <ExampleSection title="useToggle" code={`const [on, toggle] = useToggle(false)`}>
      <Button variant={on ? "default" : "outline"} onClick={toggle}>
        {on ? "ON" : "OFF"}
      </Button>
    </ExampleSection>
  )
}

function LocalStorageDemo() {
  // SSR 하이드레이션 불일치를 막기 위해 initializeWithValue: false
  const [name, setName, removeName] = useLocalStorage("starter-demo-name", "", {
    initializeWithValue: false,
  })
  return (
    <ExampleSection
      title="useLocalStorage"
      description="새로고침해도 값이 유지됩니다."
      code={`useLocalStorage("key", "", { initializeWithValue: false })`}
    >
      <div className="flex gap-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <Button variant="outline" onClick={removeName}>
          삭제
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        저장된 값: {name || "(없음)"}
      </p>
    </ExampleSection>
  )
}

function DebounceDemo() {
  const [text, setText] = useState("")
  const [debounced, setDebounced] = useDebounceValue("", 500)
  return (
    <ExampleSection
      title="useDebounceValue"
      description="입력을 멈춘 뒤 500ms 후에 값이 반영됩니다. 검색창에 유용합니다."
      code={`const [debounced, setDebounced] = useDebounceValue("", 500)`}
    >
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setDebounced(e.target.value)
        }}
        placeholder="검색어 입력"
      />
      <p className="mt-2 text-sm text-muted-foreground">
        즉시 값: {text || "-"} / 디바운스 값: {debounced || "-"}
      </p>
    </ExampleSection>
  )
}

function MediaQueryDemo() {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  })
  const { width, height } = useWindowSize({ initializeWithValue: false })
  return (
    <ExampleSection
      title="useMediaQuery · useWindowSize"
      description="브라우저 폭을 조절해 보세요."
      code={`useMediaQuery("(min-width: 768px)")`}
    >
      <div className="flex items-center gap-2">
        <Badge variant={isDesktop ? "default" : "secondary"}>
          {isDesktop ? "데스크톱" : "모바일"}
        </Badge>
        <span className="text-sm text-muted-foreground">
          {width ?? "-"} × {height ?? "-"} px
        </span>
      </div>
    </ExampleSection>
  )
}

function ClipboardDemo() {
  const [copied, copy] = useCopyToClipboard()
  const text = "npx shadcn@latest add button"
  return (
    <ExampleSection title="useCopyToClipboard" code={`const [copied, copy] = useCopyToClipboard()`}>
      <div className="flex items-center gap-2">
        <code className="flex-1 truncate rounded bg-muted px-2 py-1.5 text-xs">
          {text}
        </code>
        <Button variant="outline" size="icon" onClick={() => copy(text)} aria-label="복사">
          {copied === text ? <Check /> : <Copy />}
        </Button>
      </div>
    </ExampleSection>
  )
}

function OutsideClickDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => setOpen(false))
  return (
    <ExampleSection
      title="useOnClickOutside"
      description="패널 바깥을 클릭하면 닫힙니다."
      code={`useOnClickOutside(ref, () => setOpen(false))`}
    >
      <div ref={ref} className="inline-block">
        <Button variant="outline" onClick={() => setOpen((v) => !v)}>
          패널 {open ? "닫기" : "열기"}
        </Button>
        {open && (
          <div className="mt-2 rounded-lg border bg-card p-3 text-sm">
            바깥을 클릭해 보세요.
          </div>
        )}
      </div>
    </ExampleSection>
  )
}

function IntervalDemo() {
  const [seconds, setSeconds] = useState(0)
  const [running, toggle] = useToggle(true)
  useInterval(() => setSeconds((s) => s + 1), running ? 1000 : null)
  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
    countStart: 10,
    intervalMs: 1000,
  })
  return (
    <ExampleSection
      title="useInterval · useCountdown"
      code={`useInterval(callback, running ? 1000 : null)`}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">경과 {seconds}초</span>
          <Button size="sm" variant="outline" onClick={toggle}>
            {running ? "정지" : "시작"}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">카운트다운 {count}</span>
          <Button size="sm" variant="outline" onClick={startCountdown}>
            시작
          </Button>
          <Button size="sm" variant="outline" onClick={stopCountdown}>
            정지
          </Button>
          <Button size="sm" variant="ghost" onClick={resetCountdown}>
            리셋
          </Button>
        </div>
      </div>
    </ExampleSection>
  )
}

function HoverDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const hovered = useHover(ref as React.RefObject<HTMLDivElement>)
  return (
    <ExampleSection title="useHover" code={`const hovered = useHover(ref)`}>
      <div
        ref={ref}
        className={`flex h-16 items-center justify-center rounded-lg border text-sm transition-colors ${
          hovered ? "bg-primary text-primary-foreground" : "bg-muted/50"
        }`}
      >
        {hovered ? "마우스가 올라와 있습니다" : "여기에 마우스를 올려 보세요"}
      </div>
    </ExampleSection>
  )
}

function IntersectionDemo() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 })
  return (
    <ExampleSection
      title="useIntersectionObserver"
      description="아래 박스를 스크롤해서 보이게 하세요. 지연 로딩, 무한 스크롤에 활용합니다."
      code={`const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 })`}
    >
      <div className="h-24 overflow-y-auto rounded-lg border">
        <div className="h-28 p-3 text-xs text-muted-foreground">↓ 스크롤</div>
        <div
          ref={ref}
          className={`m-3 rounded p-3 text-center text-sm ${
            isIntersecting ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          {isIntersecting ? "화면에 보임" : "화면 밖"}
        </div>
        <div className="h-28" />
      </div>
    </ExampleSection>
  )
}

export function HooksDemo() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CounterDemo />
      <ToggleDemo />
      <LocalStorageDemo />
      <DebounceDemo />
      <MediaQueryDemo />
      <ClipboardDemo />
      <OutsideClickDemo />
      <IntervalDemo />
      <HoverDemo />
      <IntersectionDemo />
    </div>
  )
}
