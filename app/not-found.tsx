import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Grid de fundo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,166,35,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-xl">

        {/* 404 grande */}
        <div
          className="text-[160px] sm:text-[200px] font-black leading-none mb-2 select-none"
          style={{
            background: 'linear-gradient(135deg, rgba(245,166,35,0.15) 0%, rgba(212,175,55,0.08) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-8px',
          }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Peça de xadrez */}
        <div
          className="text-6xl mb-6 select-none"
          style={{ filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.4))', opacity: 0.6 }}
          aria-hidden="true"
        >
          ♞
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
          Essa página não existe.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Mas a sua estratégia de marketing pode existir.{' '}
          <span className="text-white font-semibold">Volte para o início</span> ou fale com a gente agora.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-black transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
          >
            ← Voltar ao início
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white border border-white/15 hover:border-[#F5A623]/40 transition-all duration-200"
          >
            Falar com a gente
          </a>
        </div>

      </div>

      {/* Linha fundo */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.2), transparent)' }}
        aria-hidden="true"
      />
    </main>
  )
}
