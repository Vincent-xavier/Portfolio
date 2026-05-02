import React from 'react'
import { useCursor } from '../hooks/useCursor'

const Cursor: React.FC = () => {
  const { dotRef, ringRef, hovering } = useCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999 }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99998 }}
      />
    </>
  )
}

export default Cursor
