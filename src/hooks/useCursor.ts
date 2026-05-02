import { useEffect, useRef, useState } from 'react'

export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches('a, button, [data-hover]')) setHovering(true)
    }
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { dotRef, ringRef, hovering }
}
