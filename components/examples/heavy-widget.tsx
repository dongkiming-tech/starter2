// 지연 로딩 데모용 위젯 — 실제로는 차트, 에디터, 지도 같은 무거운 컴포넌트가 들어갈 자리
export default function HeavyWidget() {
  const bars = [40, 70, 55, 90, 65, 80, 50]
  return (
    <div className="flex h-24 items-end gap-2 rounded-lg border p-3">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-primary"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}
