import { useMediaQuery } from "usehooks-ts"

const MOBILE_BREAKPOINT = 768

// 직접 구현 대신 검증된 usehooks-ts의 useMediaQuery 사용 (SSR 안전: 초기값 false)
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  })
}
