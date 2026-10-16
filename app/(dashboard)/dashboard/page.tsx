import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = { title: "대시보드" }

const stats = [
  { label: "총 사용자", value: "1,284" },
  { label: "신규 가입", value: "+86" },
  { label: "활성 세션", value: "342" },
  { label: "전환율", value: "4.6%" },
]

const orders = [
  { id: "ORD-001", customer: "김민준", status: "완료", amount: "₩120,000" },
  { id: "ORD-002", customer: "이서연", status: "진행 중", amount: "₩89,000" },
  { id: "ORD-003", customer: "박지호", status: "완료", amount: "₩240,000" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="대시보드" description="샘플 데이터로 구성한 예시 화면입니다." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
        </CardHeader>
        <div className="px-4 pb-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>주문번호</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "완료" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
