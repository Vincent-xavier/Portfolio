import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[], offset = 120): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    if (ids.length === 0) return

    const update = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollPos) current = id
      }
      // Snap to last when near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids.join('|'), offset])

  return active
}
