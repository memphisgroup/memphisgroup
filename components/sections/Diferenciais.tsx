'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Numero {
  value: string
  label: string
}

interface Pilar {
  icon: React.ReactNode
  title: string
}

const numeros: Numero[] = [
  { value: '+150', label: 'Clientes atendidos' },
  { value: 'R$8M+', label: 'Em resultados gerados' },
  { value: '3x', label: 'Retorno médio sobre investimento' },
  { value: '98%', label: 'Taxa de retenção mensal' },
]

const pilares: Pilar[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Sem contrato de fidelidade',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Relatórios toda semana',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Time dedicado à sua conta',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Diferenciais() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="section-padding relative bg-carbon"
      aria-labelledby="diferenciais-title"
    >
      {/* Borda superior dourada sutil */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nossos Diferenciais
          </span>
          <h2
            id="diferenciais-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Por que a Memphis?
          </h2>
          <div className="mt-4 w-16 h-1 bg-gold-gradient rounded-full mx-auto" aria-hidden="true" />
        </motion.div>

        {/* Números de impacto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {numeros.map((numero) => (
            <motion.div
              key={numero.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-gold-primary/30 transition-colors duration-300"
            >
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 leading-none"
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {numero.value}
              </div>
              <p className="text-gray-light text-sm sm:text-base font-medium leading-snug">
                {numero.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pilares */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {pilares.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={itemVariants}
              className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-gold-primary/25 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary/20 transition-colors duration-300">
                {pilar.icon}
              </div>
              <span className="text-white font-semibold text-[15px]">{pilar.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
