'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const valores = ['Transparência', 'Resultado', 'Parceria']

export function Sobre() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sobre"
      ref={ref}
      className="section-padding relative"
      aria-labelledby="sobre-title"
    >
      {/* Background glow esquerda */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem / Placeholder da equipe */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Placeholder estilizado */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
                border: '1px solid rgba(245,166,35,0.2)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
              aria-label="Foto da equipe Memphis Growth"
            >
              {/* Gradiente dourado interno */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(245,166,35,0.12) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              {/* Conteúdo do placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span
                  className="text-8xl select-none"
                  style={{
                    color: '#D4AF37',
                    filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.4))',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  ♟
                </span>
                <span className="text-gray-mid text-sm font-medium tracking-wide">
                  Equipe Memphis Growth
                </span>
              </div>

              {/* Borda dourada decorativa */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.5), transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* Badge flutuante */}
            <div
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(245,166,35,0.15) 0%, rgba(212,175,55,0.1) 100%)',
                border: '1px solid rgba(245,166,35,0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span
                className="text-3xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                +5
              </span>
              <span className="text-white text-sm font-semibold leading-snug">
                anos no<br />mercado digital
              </span>
            </div>
          </motion.div>

          {/* Texto lado direito */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Quem Somos
            </span>
            <h2
              id="sobre-title"
              className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6"
            >
              Sobre a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Memphis Growth
              </span>
            </h2>

            <p className="text-gray-light text-lg leading-relaxed mb-6">
              Somos uma agência fundada por quem viveu na prática o que é escalar negócios digitais.
              Nada de teoria. Só resultado.
            </p>
            <p className="text-gray-light leading-relaxed mb-8">
              Cada estratégia que entregamos foi testada em cenários reais, com orçamentos reais e
              pressão de resultados reais. Não somos mais uma agência que faz post no Instagram e
              chama de marketing digital.
            </p>

            {/* Valores */}
            <div className="flex flex-wrap gap-3 mb-8">
              {valores.map((valor, index) => (
                <motion.span
                  key={valor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gold-primary"
                  style={{
                    background: 'rgba(245,166,35,0.1)',
                    border: '1px solid rgba(245,166,35,0.3)',
                  }}
                >
                  {valor}
                </motion.span>
              ))}
            </div>

            {/* Stats inline */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
              {[
                { value: '+150', label: 'Clientes' },
                { value: '5+', label: 'Anos de mercado' },
                { value: '98%', label: 'Retenção' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-mid text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
