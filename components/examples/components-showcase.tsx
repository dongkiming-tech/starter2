"use client"

import { Bell, Info, Mail } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { ExampleSection } from "@/components/examples/example-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const fruits = [
  { value: "apple", label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "orange", label: "오렌지" },
]

export function ComponentsShowcase() {
  const [fruit, setFruit] = useState<string | null>("apple")
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ExampleSection title="Button" description="변형(variant)과 크기(size)">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button>Default</Button>
          <Button size="lg">LG</Button>
          <Button size="icon" aria-label="메일">
            <Mail />
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </ExampleSection>

      <ExampleSection title="Badge · Avatar · Separator">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">이미지가 없으면 Fallback 표시</span>
        </div>
      </ExampleSection>

      <ExampleSection title="Input · Textarea · Label">
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="ex-input">이름</Label>
            <Input id="ex-input" placeholder="홍길동" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ex-textarea">메모</Label>
            <Textarea id="ex-textarea" placeholder="내용을 입력하세요" />
          </div>
        </div>
      </ExampleSection>

      <ExampleSection title="Select · Checkbox" description="선택한 값이 상태로 반영됩니다.">
        <div className="space-y-4">
          <Select items={fruits} value={fruit} onValueChange={setFruit}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="과일 선택" />
            </SelectTrigger>
            <SelectContent>
              {fruits.map((f) => (
                <SelectItem key={f.value} value={f.value}>
                  {f.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Checkbox
              id="ex-agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
            />
            <Label htmlFor="ex-agree">약관에 동의합니다</Label>
          </div>
          <p className="text-sm text-muted-foreground">
            선택: {fruits.find((f) => f.value === fruit)?.label ?? "없음"} /
            동의: {agreed ? "예" : "아니오"}
          </p>
        </div>
      </ExampleSection>

      <ExampleSection title="Dialog · Sheet · Dropdown · Tooltip">
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Dialog 열기
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>정말 진행할까요?</DialogTitle>
                <DialogDescription>
                  이 작업은 예시이며 실제로 아무것도 변경하지 않습니다.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => toast.success("확인했습니다")}>확인</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Sheet 열기
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>설정 패널</SheetTitle>
                <SheetDescription>측면에서 열리는 패널입니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              메뉴
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => toast("프로필 선택")}>
                프로필
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast("설정 선택")}>
                설정
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => toast.error("로그아웃 (예시)")}>
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger
              render={<Button variant="ghost" size="icon" aria-label="정보" />}
            >
              <Info />
            </TooltipTrigger>
            <TooltipContent>툴팁 내용입니다</TooltipContent>
          </Tooltip>
        </div>
      </ExampleSection>

      <ExampleSection title="Toast (sonner)">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => toast("기본 알림")}>
            기본
          </Button>
          <Button variant="outline" onClick={() => toast.success("성공했습니다")}>
            성공
          </Button>
          <Button variant="outline" onClick={() => toast.error("오류가 발생했습니다")}>
            에러
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(new Promise((r) => setTimeout(r, 1500)), {
                loading: "처리 중...",
                success: "완료!",
                error: "실패",
              })
            }
          >
            <Bell /> Promise
          </Button>
        </div>
      </ExampleSection>

      <ExampleSection title="Tabs">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-3 text-sm">
            계정 정보를 수정하는 탭입니다.
          </TabsContent>
          <TabsContent value="password" className="pt-3 text-sm">
            비밀번호를 변경하는 탭입니다.
          </TabsContent>
        </Tabs>
      </ExampleSection>

      <ExampleSection title="Breadcrumb · Skeleton · ScrollArea">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/examples">예제</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>컴포넌트</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="my-4 flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <ScrollArea className="h-24 rounded-lg border p-3">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="text-sm">
              스크롤 가능한 항목 {i + 1}
            </p>
          ))}
        </ScrollArea>
      </ExampleSection>
    </div>
  )
}
