'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const depoimentos = [
  {
    nome: 'Gabriel Campos',
    cargo: 'Influenciador Vendedor · Shopee',
    texto: 'A Memphis Growth entendeu o que eu precisava antes de eu conseguir explicar. Em poucos meses, saí de vendedor anônimo para influenciador reconhecido dentro do ecossistema da Shopee. O nível de estratégia e comprometimento é outro.',
    inicial: 'G',
  },
  {
    nome: 'Mariana Souza',
    cargo: 'Sócia · Clínica Odontológica',
    texto: 'Contratei achando que seria mais do mesmo. Me enganei. Em 60 dias tínhamos 120 novos pacientes e um custo por lead 40% abaixo do que já havíamos pago antes. Resultado real, sem enrolação.',
    inicial: 'M',
  },
  {
    nome: 'Rafael Nunes',
    cargo: 'CEO · SaaS B2B',
    texto: 'Nossa pipeline triplicou em 90 dias. Mas o que mais me impressionou foi a clareza do processo — sabia exatamente onde cada centavo estava indo e por quê. Transparência total do início ao fim.',
    inicial: 'R',
  },
]

export function Depoimentos() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="section-padding relative bg-carbon"
      aria-labelledby="depoimentos-title"
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
            Depoimentos
          </span>
          <h2
            id="depoimentos-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Quem viveu conta.
          </h2>
          <div className="mt-4 w-16 h-1 bg-gold-gradient rounded-full mx-auto" aria-hidden="true" />
          <p className="mt-6 text-gray-light text-lg max-w-xl mx-auto">
            Resultados que falam por si. Mas às vezes é bom ouvir de quem viveu.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.nome}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="relative p-7 rounded-2xl flex flex-col"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Aspas decorativas */}
              <span
                className="absolute top-5 right-6 text-6xl leading-none font-black select-none"
                style={{ color: 'rgba(245,166,35,0.12)' }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Estrelas */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F5A623" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-light text-sm leading-relaxed flex-1 mb-6 relative z-10">
                "{d.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', color: '#0A0A0A' }}
                >
                  {d.inicial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{d.nome}</p>
                  <p className="text-gray-mid text-xs">{d.cargo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
