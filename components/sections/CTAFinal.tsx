'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { WHATSAPP_URL } from '@/lib/utils'

export function CTAFinal() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Fundo dourado gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #F5A623 40%, #D4AF37 70%, #B8860B 100%)',
        }}
        aria-hidden="true"
      />

      {/* Padrão decorativo sutil */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.1) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      {/* Peça de xadrez decorativa */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block select-none"
        aria-hidden="true"
      >
        <span className="text-[200px] opacity-10 text-carbon-dark">♚</span>
      </div>

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              id="cta-title"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-carbon-dark tracking-tight leading-none mb-6"
            >
              Pronto para crescer{' '}
              <span className="text-carbon-dark opacity-80">de verdade?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-carbon-dark/80 font-medium mb-10 leading-relaxed">
              Fale agora com um especialista da Memphis Growth.{' '}
              <strong className="text-carbon-dark font-bold">Sem compromisso.</strong>
            </p>

            <ButtonLink
              href={WHATSAPP_URL}
              external
              size="xl"
              className="bg-carbon-dark text-white hover:bg-carbon hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero falar com um especialista →
            </ButtonLink>

            <p className="mt-6 text-carbon-dark/60 text-sm font-medium">
              Resposta em menos de 1 hora nos dias úteis
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
