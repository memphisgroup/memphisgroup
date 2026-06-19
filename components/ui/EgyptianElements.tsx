'use client'

import { motion } from 'framer-motion'

// Ankh SVG
function Ankh({ size = 60, opacity = 0.06 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      {/* Loop superior */}
      <ellipse cx="50" cy="38" rx="22" ry="28" stroke="#F5A623" strokeWidth="8" fill="none" />
      {/* Haste vertical */}
      <line x1="50" y1="64" x2="50" y2="128" stroke="#F5A623" strokeWidth="8" strokeLinecap="round" />
      {/* Barra horizontal */}
      <line x1="18" y1="80" x2="82" y2="80" stroke="#F5A623" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

// Olho de Hórus SVG
function EyeOfHorus({ size = 80, opacity = 0.05 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      {/* Contorno externo do olho */}
      <path d="M10 55 Q100 5 190 55 Q100 105 10 55 Z" stroke="#F5A623" strokeWidth="5" fill="none" />
      {/* Íris */}
      <circle cx="100" cy="55" r="20" stroke="#F5A623" strokeWidth="5" fill="none" />
      {/* Pupila */}
      <circle cx="100" cy="55" r="8" fill="#F5A623" />
      {/* Marca egípcia inferior esquerda */}
      <path d="M55 75 L35 105 L50 95" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Linha decorativa superior */}
      <path d="M75 38 L65 20" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

// Pirâmide SVG
function Pyramid({ size = 100, opacity = 0.05 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <polygon points="100,10 190,150 10,150" stroke="#F5A623" strokeWidth="4" fill="none" strokeLinejoin="round" />
      <line x1="100" y1="10" x2="100" y2="150" stroke="#F5A623" strokeWidth="2" opacity="0.5" />
      <line x1="55" y1="80" x2="190" y2="80" stroke="#F5A623" strokeWidth="1.5" opacity="0.3" />
      <line x1="77" y1="45" x2="190" y2="45" stroke="#F5A623" strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

// Hieróglifo decorativo (linhas estilizadas)
function HieroglyphLine({ width = 120, opacity = 0.06 }: { width?: number; opacity?: number }) {
  return (
    <svg width={width} height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <line x1="0" y1="12" x2="200" y2="12" stroke="#F5A623" strokeWidth="1" />
      <circle cx="20" cy="12" r="3" fill="#F5A623" />
      <rect x="50" y="6" width="12" height="12" stroke="#F5A623" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="12" r="5" stroke="#F5A623" strokeWidth="1.5" fill="none" />
      <path d="M140 6 L148 18 L156 6" stroke="#F5A623" strokeWidth="1.5" fill="none" />
      <circle cx="180" cy="12" r="3" fill="#F5A623" />
    </svg>
  )
}

const floatingElements = [
  { component: 'ankh', top: '12%', left: '2%', size: 70, delay: 0 },
  { component: 'eye', top: '35%', right: '2%', size: 110, delay: 0.5 },
  { component: 'pyramid', top: '58%', left: '1%', size: 90, delay: 0.3 },
  { component: 'ankh', top: '75%', right: '3%', size: 55, delay: 0.8 },
  { component: 'pyramid', top: '20%', right: '1%', size: 70, delay: 0.2 },
  { component: 'eye', top: '80%', left: '2%', size: 90, delay: 0.6 },
]

export function EgyptianBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none select-none fixed inset-0 z-0 overflow-hidden">
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay: el.delay + 0.5, duration: 1.5 },
            y: { delay: el.delay, duration: 6 + i * 0.7, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: el.top,
            left: 'left' in el ? el.left : undefined,
            right: 'right' in el ? el.right : undefined,
          }}
        >
          {el.component === 'ankh' && <Ankh size={el.size} opacity={0.07} />}
          {el.component === 'eye' && <EyeOfHorus size={el.size} opacity={0.06} />}
          {el.component === 'pyramid' && <Pyramid size={el.size} opacity={0.06} />}
        </motion.div>
      ))}
    </div>
  )
}

// Divisor egípcio para usar entre seções
export function EgyptianDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <HieroglyphLine width={160} opacity={0.15} />
      <Ankh size={28} opacity={0.25} />
      <HieroglyphLine width={160} opacity={0.15} />
    </div>
  )
}
