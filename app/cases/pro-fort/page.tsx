import { Metadata } from 'next'
import Link from 'next/link'
import NextImage from 'next/image'
import { WHATSAPP_URL } from '@/lib/utils'
import { CaseBackground } from '@/components/ui/CaseBackground'

export const metadata: Metadata = {
  title: 'Case Pro Fort — Memphis Growth',
  description: 'Como transformamos a reputação forte da Pro Fort no mundo real em uma presença digital à altura do padrão que ela entrega nas obras.',
}

const pilares = [
  {
    numero: '01',
    titulo: 'Briefing e Diagnóstico Profundo',
    descricao: 'Antes de criar qualquer conteúdo, entramos no briefing para entender o momento da Pro Fort, o perfil do público, o ciclo de vendas e o que realmente diferencia a marca em um mercado cheio de promessas genéricas. A estratégia começa antes da câmera.',
  },
  {
    numero: '02',
    titulo: 'Reposicionamento Estratégico',
    descricao: 'Construímos um reposicionamento que traduz o que a empresa faz de forma simples e poderosa: climatização de alto padrão que cria experiência sem aparecer. Um conforto que se percebe na sensação, não no equipamento, e que só é possível quando existe projeto, compatibilização e entrega com padrão.',
  },
  {
    numero: '03',
    titulo: 'Comunicação com Autoridade',
    descricao: 'Estruturamos toda a comunicação no Instagram com foco em autoridade e identificação. Linguagem acessível para qualquer pessoa e, ao mesmo tempo, respeitável para profissionais exigentes — arquitetos, engenheiros e clientes que tomam decisões com base em confiança.',
  },
  {
    numero: '04',
    titulo: 'Humanização pela Liderança',
    descricao: 'Desenhamos o formato de captação e apresentação da marca em vídeo, colocando a liderança e a equipe como porta-vozes do próprio padrão de entrega. A ideia foi aproximar o público, humanizar a marca e construir confiança a partir do que a Pro Fort tem de mais forte: processo, cuidado e consistência.',
  },
]

const transformacao = [
  { antes: 'Reputação forte, mas pouco visível no digital', depois: 'Presença digital elegante, coerente e estratégica' },
  { antes: 'Vista como "empresa de ar-condicionado"', depois: 'Reconhecida como parceira técnica de obra' },
  { antes: 'Comunicação sem direção definida', depois: 'Linha editorial orientada por posicionamento' },
  { antes: 'Relacionamentos pontuais', depois: 'Relações recorrentes e qualificadas no mercado' },
]

export default function ProFortPage() {
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
              @profortarcondicionado · Climatização de Alto Padrão
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Do mundo real<br />para a
                <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> autoridade digital.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                A Pro Fort tinha o que muitas marcas buscam: <span className="text-white font-semibold">reputação construída na prática</span>. O desafio era transformar isso em uma presença digital à altura do padrão que ela entrega nas obras.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Hoje a Pro Fort é percebida não apenas como uma empresa de ar-condicionado, mas como uma <span className="text-white font-semibold">parceira técnica de obra</span> — que conversa com arquitetura e engenharia, protege a estética do projeto e entrega conforto com acabamento e previsibilidade.
              </p>
              <a
                href="https://www.instagram.com/profortarcondicionado/"
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

            {/* Foto hero — aguardando imagem */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10"
                style={{ aspectRatio: '3/4', maxHeight: '560px' }}>
                <NextImage
                  src="/cases/pro-fort/hero.jpg"
                  alt="Pro Fort — Climatização de Alto Padrão"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40"
                  style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-black text-lg leading-tight">Pro Fort</p>
                  <p className="text-[#F5A623] text-sm font-semibold">Climatização de Alto Padrão</p>
                </div>
              </div>
              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl border"
                style={{ background: 'rgba(245,166,35,0.1)', borderColor: 'rgba(245,166,35,0.3)', backdropFilter: 'blur(12px)' }}>
                <p className="text-xs text-[#F5A623] font-bold uppercase tracking-widest">Resultado</p>
                <p className="text-white font-black text-lg">Autoridade Digital ✓</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }} />
      </section>

      {/* Métricas / Pilares rápidos */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { valor: 'Alto Padrão', label: 'Segmento de atuação' },
              { valor: '4 Pilares', label: 'Estratégia aplicada' },
              { valor: 'B2B + B2C', label: 'Público trabalhado' },
              { valor: '100%', label: 'Comunicação estratégica' },
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
                Ter padrão na obra<br />não é o mesmo que<br />ter padrão no digital.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                A Pro Fort chegou até a Memphis Growth com um desafio claro: transformar uma reputação forte no mundo real em uma presença digital à altura do padrão que ela entrega nas obras.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Uma empresa reconhecida pela qualidade técnica e pelo cuidado em projetos de alto padrão, mas que precisava comunicar isso com mais <span className="text-white font-semibold">clareza, consistência e intenção</span> — principalmente para arquitetos, engenheiros e clientes finais que tomam decisões com base em confiança.
              </p>
              <p className="text-gray-400 leading-relaxed">
                O problema não era o serviço. Era como o mercado <span className="text-[#F5A623] font-semibold">percebia</span> esse serviço.
              </p>
            </div>

            {/* Foto do projeto — aguardando imagem */}
            <div className="rounded-2xl overflow-hidden bg-[#111111] border border-white/10 relative"
              style={{ aspectRatio: '4/3' }}>
              <NextImage
                src="/cases/pro-fort/projeto.jpg"
                alt="Projeto Pro Fort — obra de alto padrão"
                fill
                className="object-cover object-center"
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
            Posicionamento que eleva.<br />Comunicação que converte.
          </h2>
          <p className="text-gray-400 mb-14 max-w-2xl leading-relaxed">
            Estruturamos o trabalho com a Pro Fort em quatro pilares que, juntos, constroem o que nenhuma campanha genérica consegue: <span className="text-white font-semibold">autoridade técnica reconhecida pelo mercado premium</span>.
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

      {/* Galeria — aguardando fotos */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Conteúdo Produzido</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Cada peça com propósito.<br />Cada post com intenção.
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Conteúdo educativo sem ser técnico demais. Mostrando método sem parecer robótico. Reforçando o valor real do serviço sem apelar para preço ou comparação.
          </p>

          {/* Grid de fotos — placeholder até receber as imagens */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-[#111111] border border-white/10 overflow-hidden relative">
                <NextImage
                  src={`/cases/pro-fort/content-${i}.jpg`}
                  alt={`Conteúdo Pro Fort ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
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
                A marca que você<br />vê aqui é a mesma<br />da obra.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Humanizar uma empresa técnica é um desafio preciso. Vídeo foi o formato escolhido para mostrar processo, cuidado e consistência — os atributos que mais importam para quem decide uma obra de alto padrão.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Liderança na frente da câmera, linguagem alinhada com o público premium e narrativa que reforça o posicionamento de parceira técnica — não apenas fornecedora.
              </p>
              <div className="space-y-3">
                {['Liderança como porta-voz', 'Narrativa de processo e padrão', 'Linguagem para decisores'].map((item) => (
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
                  src="/cases/pro-fort/vídeo.mp4"
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
              Esse é o tipo de posicionamento que não depende de volume. Depende de clareza, direção e consistência. E é exatamente isso que construímos com a Pro Fort.
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
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(245,166,35,0.3), rgba(245,166,35,0.3))' }} />

            {[
              { icone: '🏗️', titulo: 'Reputação Real', descricao: 'O ponto de partida. Excelência técnica comprovada nas obras, mas sem comunicação à altura no digital.' },
              { icone: '🎯', titulo: 'Reposicionamento', descricao: 'O processo. Briefing profundo, linha editorial com autoridade, linguagem acessível e humanização pela liderança.' },
              { icone: '🏆', titulo: 'Parceira de Obra', descricao: 'O resultado. Percebida como referência técnica por arquitetos, engenheiros e clientes premium.' },
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
            Sua marca merece uma<br />presença à altura do seu trabalho.
          </h2>
          <p className="text-black/70 text-lg mb-2">
            O que fizemos com a Pro Fort podemos fazer pela sua empresa. Posicionamento, autoridade e crescimento consistente.
          </p>
          <p className="text-black/50 text-sm mb-10">⚡ Diagnóstico gratuito · Sem compromisso</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero elevar minha marca →
          </a>
        </div>
      </section>
    </main>
  )
}
