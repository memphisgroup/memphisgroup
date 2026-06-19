'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Servico {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const servicos: Servico[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Tráfego Pago',
    description:
      'Google Ads, Meta Ads e mais. Seu cliente te achando antes da concorrência — com verba otimizada e ROI real.',
    href: '/servicos/trafego-pago',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Social Media',
    description:
      'Conteúdo que engaja, vende e posiciona sua marca. Estratégia editorial, produção e gestão completa das redes.',
    href: '/servicos/social-media',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Branding',
    description:
      'Identidade visual que passa autoridade desde o primeiro olhar. Logo, paleta, tipografia e linguagem de marca.',
    href: '/servicos/branding',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Estratégia Digital',
    description:
      'Planejamento completo para crescer de forma consistente. Análise de mercado, metas, canais e execução integrada.',
    href: '/servicos/estrategia-digital',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

interface ServicoCardProps {
  servico: Servico
  index: number
}

function ServicoCard({ servico }: ServicoCardProps) {
  return (
    <motion.article variants={cardVariants}>
      <Link
        href={servico.href}
        className={cn(
          'group relative p-7 rounded-2xl flex flex-col',
          'bg-white/[0.03] border border-white/10',
          'backdrop-blur-sm',
          'transition-all duration-300',
          'hover:bg-white/[0.06] hover:border-gold-primary/40',
          'hover:shadow-[0_8px_40px_rgba(245,166,35,0.12)]',
          'hover:-translate-y-1 block'
        )}
      >
        {/* Glow corner no hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(245,166,35,0.06) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5',
            'bg-gold-primary/10 border border-gold-primary/20',
            'text-gold-primary',
            'group-hover:bg-gold-primary/15 group-hover:border-gold-primary/40',
            'transition-all duration-300'
          )}
          aria-hidden="true"
        >
          {servico.icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors duration-200">
          {servico.title}
        </h3>
        <p className="text-gray-light leading-relaxed text-[15px]">{servico.description}</p>

        <span className="mt-4 text-sm text-gold-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Ver mais →
        </span>
      </Link>
    </motion.article>
  )
}

export function Servicos() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="servicos"
      ref={ref}
      className="section-padding relative"
      aria-labelledby="servicos-title"
    >
      {/* Background sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nossos Serviços
          </span>
          <h2
            id="servicos-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            O que a gente faz
          </h2>
          <div className="mt-4 w-16 h-1 bg-gold-gradient rounded-full mx-auto" aria-hidden="true" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {servicos.map((servico, index) => (
            <ServicoCard key={servico.title} servico={servico} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
