import { useRef, useCallback } from 'react'

export function useMagnet(strength = 0.3) {
  const ref = useRef<HTMLElement>(null)

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }, [strength])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }, [])

  const onEnter = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.1s linear'
  }, [])

  return { ref, onMove, onLeave, onEnter }
}
