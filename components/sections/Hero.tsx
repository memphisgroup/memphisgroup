'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'
import { WHATSAPP_URL } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.12 },
  }),
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Abertura"
    >
      {/* Background gradiente dourado sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F5A623 0%, #D4AF37 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
          }}
        />
        {/* Padrão egípcio sutil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,166,35,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Bordas decorativas egípcias */}
        <div
          className="absolute top-20 left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #F5A623, #D4AF37, #F5A623, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #F5A623, #D4AF37, #F5A623, transparent)' }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-primary/30 text-sm font-medium text-gold-primary backdrop-blur-sm relative overflow-hidden">
            {/* Shimmer */}
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(245,166,35,0.15) 50%, transparent 100%)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', repeatDelay: 1.5 }}
            />
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse-slow relative z-10" />
            <span className="relative z-10">Memphis Growth — Agência de Marketing Digital</span>
          </span>
        </motion.div>

        {/* Faraó com glow */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-4"
          aria-hidden="true"
        >
          <div className="relative">
            {/* Halo externo pulsante */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.5) 0%, rgba(212,175,55,0.2) 50%, transparent 70%)' }}
            />
            <Image
              src="/logo.png"
              alt="Memphis Growth"
              width={320}
              height={320}
              className="relative z-10 object-contain"
              style={{
                mixBlendMode: 'lighten',
                filter: 'drop-shadow(0 0 24px rgba(245,166,35,0.8)) drop-shadow(0 0 60px rgba(212,175,55,0.4)) drop-shadow(0 0 100px rgba(245,166,35,0.2))',
              }}
            />
          </div>
        </motion.div>

        {/* Headline — cada linha entra separada */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6" style={{ perspective: '800px' }}>
          {['Sua empresa', 'crescendo.', 'Todo mês.'].map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="block"
              style={i === 1 ? {
                background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 60%, #F5A623 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              } : { color: '#FFFFFF' }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-light font-normal max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Estratégia, tráfego e resultados reais.{' '}
          <span className="text-white font-semibold">Sem enrolação.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ButtonLink
            href={WHATSAPP_URL}
            external
            variant="primary"
            size="xl"
            className="text-base sm:text-lg font-bold min-w-[240px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com especialista
          </ButtonLink>

          <ButtonLink
            href="#servicos"
            variant="secondary"
            size="xl"
            className="text-base sm:text-lg min-w-[240px]"
          >
            Ver nossos serviços
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </ButtonLink>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="text-xs text-gray-mid uppercase tracking-widest font-medium"
          >
            Role para explorar
          </motion.span>
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', repeatDelay: 0.3 }}
              style={{ originY: 0 }}
              className="w-px h-8 bg-gradient-to-b from-gold-primary to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
