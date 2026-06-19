import { Metadata } from 'next'
import Link from 'next/link'
import NextImage from 'next/image'
import { WHATSAPP_URL } from '@/lib/utils'
import { CaseBackground } from '@/components/ui/CaseBackground'
import { ContentGallery } from '@/components/ui/ContentGallery'

export const metadata: Metadata = {
  title: 'Case Gabriel Campos — Memphis Growth',
  description: 'Como transformamos conhecimento técnico em autoridade reconhecida dentro do ecossistema da Shopee. Da presença digital para a influência real.',
}

const pilares = [
  {
    numero: '01',
    titulo: 'Clareza de Mensagem',
    descricao: 'Antes de qualquer câmera ligada, mapeamos quem é o Gabriel, o que ele sabe de verdade e como isso se traduz em valor para quem está do outro lado da tela. A mensagem precisa ser clara antes de ser dita.',
  },
  {
    numero: '02',
    titulo: 'Consistência de Conteúdo',
    descricao: 'Autoridade não se constrói com um vídeo viral. Se constrói com presença constante, ritmo e identidade. Criamos um fluxo sustentável de conteúdo com propósito em cada publicação.',
  },
  {
    numero: '03',
    titulo: 'Construção de Percepção',
    descricao: 'A percepção que o público tem sobre você é o ativo mais valioso que existe. Cada roteiro, cada fala, cada posicionamento foi pensado para que o público associasse Gabriel a uma coisa: método.',
  },
]

const transformacao = [
  { antes: 'Mais um vendedor na plataforma', depois: 'Influenciador reconhecido na Shopee' },
  { antes: 'Conteúdo sem direção definida', depois: 'Estratégia editorial com identidade própria' },
  { antes: 'Presença digital comum', depois: 'Autoridade reconhecida pelo mercado' },
  { antes: 'Conhecimento técnico guardado', depois: 'Influência que gera confiança e conversão' },
]

export default function GabrielCamposPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-black" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Memphis</span>
            <span className="text-xl font-black text-white">Growth</span>
          </Link>
          <Link href="/#cases" className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors">
            ← Voltar aos cases
          </Link>
        </div>
      </div>

      <CaseBackground />

      {/* Hero */}
      <section className="pt-24 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{ background: 'rgba(245,166,35,0.1)', borderColor: 'rgba(245,166,35,0.3)', color: '#F5A623' }}>
              Social Media & Posicionamento
            </span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @gabrielcampos.ecom · Shopee
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                De vendedor<br />a
                <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> referência.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Gabriel Campos não precisava de mais seguidores. Precisava de <span className="text-white font-semibold">posicionamento</span>. E foi exatamente isso que construímos juntos — autoridade real dentro do ecossistema da Shopee.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Hoje é Influenciador Vendedor da Shopee, Embaixador Upseller e Mentor de E-commerce. Com vídeos chegando a <span className="text-white font-semibold">21,6 mil visualizações</span> e uma comunidade engajada que confia no que ele diz.
              </p>
              <a
                href="https://www.instagram.com/gabrielcampos.ecom/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#F5A623] hover:underline font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Ver perfil no Instagram →
              </a>
            </div>

            {/* Foto hero — Gabriel no estúdio */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10"
                style={{ aspectRatio: '3/4', maxHeight: '560px' }}>
                <NextImage
                  src="/cases/gabriel-campos/hero.jpg"
                  alt="Gabriel Campos — Mentor e Influenciador Shopee"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40"
                  style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-black text-lg leading-tight">Gabriel Campos</p>
                  <p className="text-[#F5A623] text-sm font-semibold">Influenciador Vendedor da Shopee 🍊</p>
                </div>
              </div>
              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl border"
                style={{ background: 'rgba(245,166,35,0.1)', borderColor: 'rgba(245,166,35,0.3)', backdropFilter: 'blur(12px)' }}>
                <p className="text-xs text-[#F5A623] font-bold uppercase tracking-widest">Resultado</p>
                <p className="text-white font-black text-lg">Influenciador Shopee ✓</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }} />
      </section>

      {/* Métricas reais */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { valor: '4.918', label: 'Seguidores no Instagram' },
              { valor: '419', label: 'Publicações no perfil' },
              { valor: '21,6 mil', label: 'Views no melhor Reel' },
              { valor: '100%', label: 'Conteúdo estratégico' },
            ].map((m) => (
              <div key={m.label} className="text-center p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <div className="text-2xl md:text-3xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {m.valor}
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Desafio */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O Desafio</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Ter resultado não é<br />o mesmo que ter autoridade.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Quando o Gabriel chegou até a Memphis Growth, o desafio não era simples. Ele sabia vender na Shopee melhor do que a maioria. Tinha resultado, tinha método, tinha história. O que faltava era uma coisa: <span className="text-white font-semibold">que o mercado soubesse disso</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                O problema não era competência. Era comunicação. Era posicionamento. Era transformar o que ele vivia no dia a dia em conteúdo que gerasse reconhecimento — e não apenas curtidas.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Dentro de um ecossistema tão competitivo quanto a Shopee, a diferença entre quem vende e quem lidera está numa única palavra: <span className="text-[#F5A623] font-semibold">percepção</span>.
              </p>
            </div>

            {/* Print do perfil */}
            <div className="rounded-2xl overflow-hidden bg-[#111111] border border-white/10 relative"
              style={{ aspectRatio: '4/3' }}>
              <NextImage
                src="/cases/gabriel-campos/profile.png"
                alt="Perfil do Instagram de Gabriel Campos"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Estratégia */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">A Estratégia</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Posicionamento não é sorte.<br />É arquitetura.
          </h2>
          <p className="text-gray-400 mb-14 max-w-2xl leading-relaxed">
            Estruturamos o trabalho com o Gabriel em três pilares que, juntos, constroem algo que nenhum algoritmo consegue comprar: <span className="text-white font-semibold">autoridade genuína</span>.
          </p>

          <div className="space-y-5">
            {pilares.map((p) => (
              <div key={p.numero} className="flex gap-6 items-start p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F5A623]/20 transition-all duration-300 group">
                <span className="text-5xl font-black shrink-0 leading-none"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {p.numero}
                </span>
                <div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#F5A623] transition-colors">{p.titulo}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de conteúdo */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Conteúdo Produzido</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Cada peça com propósito.<br />Cada post com intenção.
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Não há conteúdo aleatório aqui. Cada publicação foi planejada, roteirizada e publicada com um objetivo claro dentro da jornada de posicionamento.
          </p>

          <ContentGallery />

        </div>
      </section>

      {/* Vídeo */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Em Movimento</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Conteúdo que para<br />o scroll.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Vídeo não é só formato — é o meio mais direto de construir conexão. Cada segundo foi pensado para comunicar posicionamento, gerar identificação e reforçar autoridade.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Roteiro, linguagem, ritmo e entrega alinhados com o que o público do Gabriel reconhece como valor real dentro do ecossistema da Shopee.
              </p>
              <div className="space-y-3">
                {['Roteiro com intenção', 'Linguagem de autoridade', 'Ritmo para reter atenção'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F5A623' }} />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Player vertical */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ width: '100%', maxWidth: '340px', aspectRatio: '9/16', background: '#111111' }}>
                <video
                  src="/cases/gabriel-campos/vídeo.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A Transformação */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">A Transformação</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-14 leading-tight">
            Antes e depois não é clichê.<br />É resultado.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-4">Antes</p>
              {transformacao.map((t) => (
                <div key={t.antes} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-red-400 text-lg shrink-0">✗</span>
                  <p className="text-gray-400 text-sm">{t.antes}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[#F5A623] text-xs uppercase tracking-widest font-bold mb-4">Depois</p>
              {transformacao.map((t) => (
                <div key={t.depois} className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{ background: 'rgba(245,166,35,0.04)', borderColor: 'rgba(245,166,35,0.15)' }}>
                  <span className="text-[#F5A623] text-lg shrink-0">✓</span>
                  <p className="text-white text-sm font-medium">{t.depois}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl border relative overflow-hidden"
            style={{ background: 'rgba(245,166,35,0.04)', borderColor: 'rgba(245,166,35,0.15)' }}>
            <div className="absolute top-6 left-8 text-8xl leading-none opacity-10" style={{ color: '#F5A623' }}>"</div>
            <blockquote className="relative z-10 text-xl md:text-2xl font-black text-white leading-relaxed mb-6">
              Isso não acontece por acaso. É resultado de estratégia, consistência e entendimento de mercado. O que construímos com Gabriel é um exemplo claro de como posicionamento não está ligado apenas ao que você sabe, mas à forma como você comunica e entrega valor ao longo do tempo.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 rounded-full" style={{ background: '#F5A623' }} />
              <p className="text-[#F5A623] font-bold text-sm">Memphis Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-12">A jornada em 3 atos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Linha conectora */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(245,166,35,0.3), rgba(245,166,35,0.3))' }} />

            {[
              { icone: '📍', titulo: 'Presença Digital', descricao: 'O ponto de partida. Sabia vender, mas não era reconhecido como referência.' },
              { icone: '🎯', titulo: 'Estratégia & Conteúdo', descricao: 'O processo. Roteiros, identidade, consistência e posicionamento com intenção.' },
              { icone: '👑', titulo: 'Autoridade & Influência', descricao: 'O resultado. Influenciador Vendedor da Shopee, Embaixador e Mentor reconhecido.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] relative">
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-white font-black text-lg mb-2">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-4">Quer o mesmo resultado?</p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 leading-tight">
            Sua história de transformação<br />começa com uma conversa.
          </h2>
          <p className="text-black/70 text-lg mb-2">
            O que fizemos com Gabriel podemos fazer pela sua marca. Posicionamento, autoridade e crescimento consistente.
          </p>
          <p className="text-black/50 text-sm mb-10">⚡ Diagnóstico gratuito · Sem compromisso</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero construir minha autoridade →
          </a>
        </div>
      </section>
    </main>
  )
}
