'use client'

import { motion } from 'framer-motion'

// Instagram SVG
function InstagramIcon({ size = 60, opacity = 0.05 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="4.5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="#F5A623"/>
    </svg>
  )
}

// Shopee bag icon
function ShopeeIcon({ size = 60, opacity = 0.05 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <path d="M50 8 C35 8 25 20 25 32 L18 32 L12 88 L88 88 L82 32 L75 32 C75 20 65 8 50 8Z" stroke="#F5A623" strokeWidth="4" fill="none" strokeLinejoin="round"/>
      <path d="M35 32 C35 23 42 16 50 16 C58 16 65 23 65 32" stroke="#F5A623" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="58" r="10" stroke="#F5A623" strokeWidth="3" fill="none"/>
    </svg>
  )
}

// Chess piece
function ChessPiece({ symbol, size = 60, opacity = 0.05 }: { symbol: string; size?: number; opacity?: number }) {
  return (
    <span style={{ fontSize: size, opacity, color: '#F5A623', lineHeight: 1, display: 'block', userSelect: 'none' }}>
      {symbol}
    </span>
  )
}

const elements = [
  { type: 'instagram', top: '8%',  left: '2%',   size: 80,  delay: 0    },
  { type: 'chess',     top: '20%', right: '2%',  size: 90,  delay: 0.3, symbol: '♛' },
  { type: 'shopee',    top: '40%', left: '1%',   size: 70,  delay: 0.6  },
  { type: 'chess',     top: '55%', right: '3%',  size: 70,  delay: 0.2, symbol: '♜' },
  { type: 'instagram', top: '70%', right: '2%',  size: 60,  delay: 0.8  },
  { type: 'chess',     top: '78%', left: '3%',   size: 80,  delay: 0.4, symbol: '♞' },
  { type: 'shopee',    top: '30%', right: '1%',  size: 55,  delay: 0.5  },
  { type: 'chess',     top: '88%', right: '4%',  size: 65,  delay: 0.1, symbol: '♟' },
]

export function CaseBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none select-none fixed inset-0 z-0 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: el.delay, duration: 1.5 },
            y: { delay: el.delay, duration: 7 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: el.top,
            left: 'left' in el ? (el as { left: string }).left : undefined,
            right: 'right' in el ? (el as { right: string }).right : undefined,
          }}
        >
          {el.type === 'instagram' && <InstagramIcon size={el.size} opacity={0.06} />}
          {el.type === 'shopee' && <ShopeeIcon size={el.size} opacity={0.06} />}
          {el.type === 'chess' && <ChessPiece symbol={(el as { symbol: string }).symbol} size={el.size} opacity={0.06} />}
        </motion.div>
      ))}
    </div>
  )
}
