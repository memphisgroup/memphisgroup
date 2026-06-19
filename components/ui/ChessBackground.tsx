'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const pieces = [
  { symbol: '♛', top: '15%', left: '5%', size: '8rem', delay: 0, speed: 0.15 },
  { symbol: '♜', top: '30%', right: '4%', size: '6rem', delay: 0.1, speed: 0.1 },
  { symbol: '♞', top: '55%', left: '8%', size: '7rem', delay: 0.2, speed: 0.2 },
  { symbol: '♝', top: '70%', right: '7%', size: '9rem', delay: 0.05, speed: 0.12 },
  { symbol: '♚', top: '45%', left: '50%', size: '5rem', delay: 0.15, speed: 0.08 },
  { symbol: '♟', top: '85%', left: '20%', size: '6rem', delay: 0.3, speed: 0.18 },
  { symbol: '♟', top: '20%', right: '20%', size: '4rem', delay: 0.25, speed: 0.14 },
  { symbol: '♜', top: '60%', left: '35%', size: '5rem', delay: 0.1, speed: 0.09 },
]

interface PieceProps {
  symbol: string
  top?: string
  left?: string
  right?: string
  size: string
  delay: number
  speed: number
}

function FloatingPiece({ symbol, top, left, right, size, delay, speed }: PieceProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 3000], [0, -3000 * speed])

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'fixed',
        top,
        left,
        right,
        y,
        fontSize: size,
        color: '#F5A623',
        opacity: 0.04,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
        lineHeight: 1,
        filter: 'blur(1px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.04 }}
      transition={{ delay, duration: 1.5 }}
    >
      {symbol}
    </motion.div>
  )
}

export function ChessBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden fixed inset-0 z-0">
      {pieces.map((p, i) => (
        <FloatingPiece key={i} {...p} />
      ))}
    </div>
  )
}
