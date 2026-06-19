'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'

interface Case {
  segmento: string
  badge: string
  resultado: string
  descricao: string
  metricas: { label: string; value: string }[]
  href?: string
  coverImage?: string
}

const cases: Case[] = [
  {
    segmento: 'Gabriel Campos',
    badge: 'Social Media & Posicionamento',
    resultado: 'De vendedor a referência',
    descricao:
      'Construção de autoridade e posicionamento no ecossistema da Shopee. Transformamos conhecimento técnico em influência reconhecida pelo mercado.',
    metricas: [
      { label: 'Segmento', value: 'Shopee' },
      { label: 'Foco', value: 'Autoridade' },
      { label: 'Resultado', value: 'Referência' },
    ],
    href: '/cases/gabriel-campos',
    coverImage: '/cases/gabriel-campos/hero.jpg',
  },
  {
    segmento: 'Pro Fort',
    badge: 'Social Media & Posicionamento',
    resultado: 'De obra a autoridade digital',
    descricao:
      'Reposicionamento estratégico de empresa de climatização de alto padrão. Da reputação no mundo real para uma presença digital reconhecida por arquitetos e engenheiros.',
    metricas: [
      { label: 'Segmento', value: 'B2B' },
      { label: 'Foco', value: 'Marca' },
      { label: 'Resultado', value: 'Autoridade' },
    ],
    href: '/cases/pro-fort',
    coverImage: '/cases/pro-fort/hero.jpg',
  },
  {
    segmento: 'Nettare',
    badge: 'Social Media & Branding',
    resultado: 'Café virou experiência',
    descricao:
      'Reposicionamento sensorial e cinematográfico de marca de café para o mercado fora do lar. Do produto à experiência.',
    metricas: [
      { label: 'Mercado', value: 'B2B' },
      { label: 'Foco', value: 'Marca' },
      { label: 'Estética', value: 'Cinema' },
    ],
    href: '/cases/nettare',
    coverImage: '/cases/nettare/hero.jpg',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

interface CaseCardProps {
  caseItem: Case
}

function CaseCard({ caseItem }: CaseCardProps) {
  const inner = (
    <>
      {/* Imagem de fundo */}
      {caseItem.coverImage && (
        <NextImage
          src={caseItem.coverImage}
          alt={caseItem.segmento}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      )}

      {/* Overlay escuro — garante leitura do texto */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: 'linear-gradient(160deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.88) 60%, rgba(10,10,10,0.97) 100%)' }}
        aria-hidden="true"
      />

      {/* Glow dourado no hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.6), transparent)' }}
        aria-hidden="true"
      />

      {/* Conteúdo — relativo para ficar acima do overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-gold-primary text-xs font-semibold mb-2">
              {caseItem.badge}
            </span>
            <h3 className="text-lg font-bold text-white">{caseItem.segmento}</h3>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-primary/10 flex items-center justify-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5A623" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
          </div>
        </div>

        <div
          className="text-2xl font-black mb-3"
          style={{ background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          {caseItem.resultado}
        </div>

        <p className="text-gray-light text-sm leading-relaxed mb-6 flex-1">{caseItem.descricao}</p>

        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
          {caseItem.metricas.map((metrica) => (
            <div key={metrica.label} className="text-center">
              <div className="text-lg font-bold text-white">{metrica.value}</div>
              <div className="text-xs text-gray-mid mt-0.5 leading-snug">{metrica.label}</div>
            </div>
          ))}
        </div>

        {caseItem.href && (
          <div className="mt-5 pt-4 border-t border-white/5">
            <span className="text-sm text-[#F5A623] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Ver case completo →
            </span>
          </div>
        )}
      </div>
    </>
  )

  const classes = cn(
    'group relative p-7 rounded-2xl flex flex-col overflow-hidden h-full',
    'bg-[#111111] border border-white/10',
    'hover:border-gold-primary/40',
    'hover:shadow-[0_12px_48px_rgba(245,166,35,0.12)]',
    'transition-all duration-300'
  )

  return (
    <motion.article variants={cardVariants} className="h-full">
      {caseItem.href ? (
        <Link href={caseItem.href} className={classes}>{inner}</Link>
      ) : (
        <div className={classes}>{inner}</div>
      )}
    </motion.article>
  )
}


export function Cases() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cases"
      ref={ref}
      className="section-padding relative bg-carbon"
      aria-labelledby="cases-title"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.2), transparent)' }}
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
            Cases de Sucesso
          </span>
          <h2
            id="cases-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Resultados que falam
          </h2>
          <div className="mt-4 w-16 h-1 bg-gold-gradient rounded-full mx-auto" aria-hidden="true" />
          <p className="mt-6 text-gray-light text-lg max-w-2xl mx-auto">
            Números reais de clientes reais. Sem achismo, sem promessa vazia.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.segmento} caseItem={caseItem} />
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12 space-y-3"
        >
          <p className="text-white font-semibold text-base">
            Separamos apenas 3 para você sentir o gosto.
          </p>
          <p className="text-gray-mid text-sm">
            Nossa carteira é maior — e cada projeto tem uma história própria.{' '}
            <span className="text-gold-primary font-medium">Fale com a gente e conheça os demais.</span>
          </p>
          <p className="text-gray-mid text-xs mt-2">
            * Resultados variam conforme segmento, verba e mercado. Cases com clientes reais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
