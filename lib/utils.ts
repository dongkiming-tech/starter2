import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 조건부 클래스 병합 + Tailwind 충돌 해결
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
