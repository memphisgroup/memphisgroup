'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface Etapa {
  numero: string
  titulo: string
  descricao: string
  detalhe: string
  icone: string
  itens: string[]
}

const etapas: Etapa[] = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    descricao: 'Entendemos seu negócio, mercado e concorrência. Sem suposições — só dados e análise real.',
    detalhe: 'Antes de qualquer ação, mergulhamos fundo no seu negócio. Analisamos o cenário atual, o histórico de campanhas, o comportamento do público e os movimentos da concorrência. É a base que garante que cada decisão futura seja tomada com inteligência, não no achismo.',
    icone: '🔍',
    itens: [
      'Análise do posicionamento atual da marca',
      'Mapeamento do público-alvo e personas',
      'Auditoria de campanhas e canais existentes',
      'Benchmarking com a concorrência',
      'Identificação de oportunidades e gargalos',
    ],
  },
  {
    numero: '02',
    titulo: 'Estratégia',
    descricao: 'Montamos um plano personalizado com metas claras, canais definidos e prazos reais.',
    detalhe: 'Com o diagnóstico em mãos, construímos um plano de marketing sob medida para o seu momento e objetivo. Nada de template copiado de outro cliente. Cada estratégia é pensada do zero, com metas mensuráveis, canais escolhidos com critério e um caminho claro do ponto A ao ponto B.',
    icone: '🎯',
    itens: [
      'Definição de metas e KPIs realistas',
      'Escolha dos canais mais eficientes para o seu negócio',
      'Planejamento de conteúdo e campanhas',
      'Cronograma de execução com responsáveis',
      'Projeção de resultados por fase',
    ],
  },
  {
    numero: '03',
    titulo: 'Execução',
    descricao: 'Colocamos tudo no ar e otimizamos em tempo real. Performance acima de tudo.',
    detalhe: 'Estratégia sem execução não existe. Aqui é onde o plano vira realidade: campanhas no ar, conteúdo publicado, criativos rodando e dados sendo monitorados em tempo real. Não esperamos o final do mês para agir — otimizamos o que funciona e pausamos o que não performa.',
    icone: '⚡',
    itens: [
      'Ativação de campanhas de tráfego pago',
      'Produção e publicação de conteúdo',
      'Testes A/B de criativos e copys',
      'Monitoramento diário de métricas',
      'Otimizações em tempo real',
    ],
  },
  {
    numero: '04',
    titulo: 'Resultado',
    descricao: 'Relatório semanal, transparência total e crescimento contínuo. Você acompanha tudo.',
    detalhe: 'Resultado não é só número — é entendimento. Por isso, você recebe relatórios claros e objetivos toda semana, com os dados que realmente importam para o seu negócio. Sem enrolação, sem métrica de vaidade. E com cada ciclo, o processo se refina e os resultados crescem.',
    icone: '📈',
    itens: [
      'Relatório semanal com os principais indicadores',
      'Reunião mensal de alinhamento e revisão',
      'Dashboard de acompanhamento em tempo real',
      'Análise de evolução mês a mês',
      'Ajuste contínuo de estratégia baseado em dados',
    ],
  },
]

export function Metodo() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [etapaAberta, setEtapaAberta] = useState<Etapa | null>(null)

  return (
    <>
      <section
        id="metodo"
        ref={ref}
        className="section-padding relative"
        aria-labelledby="metodo-title"
      >
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl"
            style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Header lado esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Nosso Método
              </span>
              <h2
                id="metodo-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
              >
                Como a gente{' '}
                <span style={{ background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  trabalha
                </span>
              </h2>
              <p className="text-gray-light text-lg leading-relaxed mb-4">
                Um processo testado e refinado para transformar investimento em marketing em crescimento real e mensurável para o seu negócio.
              </p>
              <p className="text-sm text-gray-mid">
                Clique em cada etapa para saber mais.
              </p>

              <div className="mt-10 hidden lg:block" aria-hidden="true">
                <span className="text-9xl select-none opacity-20" style={{ color: '#D4AF37', filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))' }}>
                  ♞
                </span>
              </div>
            </motion.div>

            {/* Timeline lado direito */}
            <div className="relative">
              <div
                className="absolute left-[27px] top-8 bottom-8 w-px"
                style={{ background: 'linear-gradient(180deg, #F5A623 0%, rgba(212,175,55,0.3) 100%)' }}
                aria-hidden="true"
              />

              <div className="space-y-8">
                {etapas.map((etapa, index) => (
                  <motion.button
                    key={etapa.numero}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                    onClick={() => setEtapaAberta(etapa)}
                    className="flex gap-6 group w-full text-left cursor-pointer"
                  >
                    {/* Número circulado */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-sm border-2 border-gold-primary bg-carbon-dark transition-all duration-300 group-hover:bg-gold-primary"
                        style={{ boxShadow: '0 0 20px rgba(245,166,35,0.2)' }}>
                        <span className="text-gold-primary group-hover:text-[#0A0A0A] transition-colors duration-300">
                          {etapa.numero}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div
                      className="flex-1 p-5 rounded-xl bg-white/[0.02] border border-white/8 group-hover:border-gold-primary/40 group-hover:bg-white/[0.05] transition-all duration-300"
                      style={{ marginTop: '10px' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-gold-primary transition-colors duration-200">
                          {etapa.titulo}
                        </h3>
                        <span className="text-xs text-gray-mid opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                          Ver detalhes →
                        </span>
                      </div>
                      <p className="text-gray-light text-sm leading-relaxed">{etapa.descricao}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {etapaAberta && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setEtapaAberta(null)}
              className="fixed inset-0 z-50 cursor-pointer"
              style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto w-full max-w-lg rounded-3xl p-8 relative"
                style={{ background: '#141414', border: '1px solid rgba(245,166,35,0.25)', boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(245,166,35,0.05)' }}
              >
                {/* Fechar */}
                <button
                  onClick={() => setEtapaAberta(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Fechar"
                >
                  ✕
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-sm border-2 flex-shrink-0"
                    style={{ borderColor: '#F5A623', background: 'rgba(245,166,35,0.1)', color: '#F5A623' }}>
                    {etapaAberta.numero}
                  </div>
                  <div>
                    <p className="text-xs text-gold-primary font-bold uppercase tracking-widest mb-0.5">Etapa {etapaAberta.numero}</p>
                    <h3 className="text-2xl font-black text-white">{etapaAberta.titulo}</h3>
                  </div>
                  <span className="ml-auto text-3xl">{etapaAberta.icone}</span>
                </div>

                {/* Descrição longa */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {etapaAberta.detalhe}
                </p>

                {/* Itens */}
                <div className="space-y-2">
                  {etapaAberta.itens.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(245,166,35,0.04)', border: '1px solid rgba(245,166,35,0.1)' }}>
                      <span className="text-gold-primary mt-0.5 shrink-0">✓</span>
                      <span className="text-white text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
