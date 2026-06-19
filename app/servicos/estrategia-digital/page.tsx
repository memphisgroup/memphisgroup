import { Metadata } from 'next'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Estratégia Digital — Memphis Growth',
  description: 'Pare de crescer no improviso. Planejamento estratégico digital completo para empresas que querem crescimento previsível, consistente e escalável.',
}

const dores = [
  { emoji: '🎯', texto: 'Você faz de tudo no marketing, mas não sabe o que realmente está funcionando.' },
  { emoji: '🔀', texto: 'Cada mês parece uma coisa diferente — sem direção, sem consistência, sem resultado acumulado.' },
  { emoji: '😰', texto: 'Você investe em tráfego, social media e conteúdo separados, mas eles não conversam entre si.' },
]

const resultados = [
  { numero: '360°', descricao: 'de visão integrada de todo o ecossistema digital do seu negócio' },
  { numero: '+240%', descricao: 'de crescimento médio em faturamento digital em 6 meses com estratégia estruturada' },
  { numero: '1 semana', descricao: 'para entrega do plano estratégico completo, pronto para execução' },
  { numero: 'Zero', descricao: 'de verba desperdiçada em canais errados para o seu público' },
]

const pilares = [
  {
    nome: 'Diagnóstico 360°',
    descricao: 'Antes de recomendar qualquer ação, mapeamos toda sua presença digital. O que está funcionando, o que está custando caro e entregando pouco, e onde estão as maiores oportunidades.',
  },
  {
    nome: 'Posicionamento de Mercado',
    descricao: 'Definimos com clareza quem é seu cliente ideal, como você se diferencia da concorrência e qual mensagem precisa chegar em qual momento da jornada de compra.',
  },
  {
    nome: 'Seleção de Canais',
    descricao: 'Não existe canal universal. Escolhemos onde investir com base no seu mercado, público e objetivo — para parar de tentar estar em todo lugar e começar a dominar os canais certos.',
  },
  {
    nome: 'Metas e KPIs Reais',
    descricao: 'Chega de métricas de vaidade. Definimos os indicadores que mostram crescimento de verdade: leads qualificados, custo de aquisição, taxa de conversão, LTV e faturamento.',
  },
  {
    nome: 'Plano de Execução',
    descricao: 'Um roadmap detalhado com o que fazer, em qual ordem, com qual verba e com quais parceiros. Você sai da reunião sabendo exatamente o próximo passo.',
  },
  {
    nome: 'Integração dos Canais',
    descricao: 'Tráfego pago, social media, SEO, e-mail e conteúdo trabalhando juntos — cada canal alimentando o outro. É assim que empresas grandes crescem de forma consistente.',
  },
]

const etapas = [
  {
    numero: '01',
    titulo: 'Diagnóstico do Negócio',
    descricao: 'Entendemos profundamente seu negócio, mercado, concorrência, público e situação atual do marketing. Sem atalhos, sem suposições.',
  },
  {
    numero: '02',
    titulo: 'Análise de Presença Digital',
    descricao: 'Auditoria completa de todos os seus canais digitais — site, redes sociais, anúncios, SEO, e-mail. Identificamos os gargalos que estão travando seu crescimento.',
  },
  {
    numero: '03',
    titulo: 'Definição de Objetivos',
    descricao: 'Traduzimos seus objetivos de negócio em metas digitais concretas e mensuráveis. Com prazo, responsável e forma de medir.',
  },
  {
    numero: '04',
    titulo: 'Construção do Plano',
    descricao: 'Entregamos um documento completo com estratégia, canais priorizados, ações recomendadas, cronograma e projeções de resultado.',
  },
  {
    numero: '05',
    titulo: 'Execução ou Consultoria',
    descricao: 'Podemos executar o plano com nossa equipe ou consultoriar seu time interno para implementar. Você escolhe o modelo que faz mais sentido.',
  },
  {
    numero: '06',
    titulo: 'Revisão e Escala',
    descricao: 'Mensalmente revisamos os resultados, ajustamos o que precisa ser ajustado e escalamos o que está performando. Crescimento consistente não é sorte — é processo.',
  },
]

const paraquem = [
  { perfil: 'Empresas que cresceram no improviso', descricao: 'E precisam agora de estrutura para sustentar esse crescimento e ir para o próximo nível.' },
  { perfil: 'Negócios investindo sem retorno claro', descricao: 'Que gastam em marketing todo mês mas não conseguem medir o que realmente está funcionando.' },
  { perfil: 'Empreendedores que querem escalar', descricao: 'Que sabem que o próximo nível exige mais do que boa vontade — exige método e estratégia.' },
  { perfil: 'Empresas em expansão ou reposicionamento', descricao: 'Que estão entrando em novos mercados ou mudando de público e precisam de um plano digital sólido.' },
]

export default function EstrategiaDigitalPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-black" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Memphis</span>
            <span className="text-xl font-black text-white">Growth</span>
          </Link>
          <Link href="/#servicos" className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors">
            ← Voltar aos serviços
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#F5A623]/30 text-sm text-[#F5A623] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          Diagnóstico · Planejamento · Execução · Escala
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Crescimento no digital<br />
          <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>com método. Não sorte.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
          A maioria das empresas cresce no improviso — testando uma coisa aqui, outra ali, sem saber o que realmente funciona. A Memphis Growth constrói a estratégia digital que transforma esforço disperso em crescimento previsível e escalável.
        </p>

        <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10 font-medium">
          Você não precisa fazer mais. Precisa fazer certo. E é isso que a gente entrega.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
          >
            Quero minha estratégia →
          </a>
          <a
            href="#processo"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/20 hover:border-[#F5A623]/50 transition-all duration-200"
          >
            Ver como funciona
          </a>
        </div>
      </section>

      {/* Dores */}
      <section className="py-14 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">Reconhece alguma dessas situações?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dores.map((d) => (
              <div key={d.texto} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl">{d.emoji}</span>
                <p className="text-gray-300 font-medium leading-snug">{d.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F5A623] font-bold mt-8 text-lg">Isso não é falta de esforço. É falta de estratégia. E a gente resolve isso.</p>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O impacto de ter uma estratégia</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">O que muda quando você<br />para de atirar para todos os lados.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {resultados.map((item) => (
            <div key={item.numero} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl md:text-5xl font-black mb-2" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {item.numero}
              </div>
              <p className="text-gray-400 text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O que construímos juntos</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Uma estratégia digital<br />de verdade tem 6 pilares.</h2>
          <p className="text-gray-400 mb-12 max-w-xl">Não entregamos apresentação bonita. Entregamos plano executável.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pilares.map((p) => (
              <div key={p.nome} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F5A623]/40 transition-all duration-200 group">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{p.nome}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Para quem é esse serviço</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Esse serviço foi feito<br />para quem quer crescer de verdade.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paraquem.map((item) => (
            <div key={item.perfil} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all duration-200">
              <span className="text-[#F5A623] text-xl mt-0.5 shrink-0">→</span>
              <div>
                <h3 className="text-white font-bold mb-1">{item.perfil}</h3>
                <p className="text-gray-400 text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Como trabalhamos</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Do diagnóstico ao crescimento.<br />Passo a passo.</h2>
          <div className="space-y-6">
            {etapas.map((e) => (
              <div key={e.numero} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F5A623]/20 transition-all duration-200">
                <span className="text-5xl font-black shrink-0 leading-none" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{e.numero}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{e.titulo}</h3>
                  <p className="text-gray-400 leading-relaxed">{e.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Investimento</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Transparência<br />desde o primeiro contato.
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Estratégia não tem fórmula pronta. O investimento é definido de acordo com o porte do negócio, objetivos e profundidade do trabalho.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: 'Diagnóstico', descricao: 'Mapeamento completo do momento atual da empresa: posicionamento, canais, concorrência e oportunidades.', detalhe: 'Entregável único · sem recorrência' },
              { titulo: 'Estratégia + Execução', destaque: true, descricao: 'Planejamento estratégico mensal com acompanhamento, ajustes e relatórios de resultado integrados.', detalhe: 'Gestão recorrente mensal' },
              { titulo: 'Consultoria', descricao: 'Para líderes e times que precisam de direção estratégica sem terceirizar a execução. Mentoria e orientação.', detalhe: 'Sessões mensais sob consulta' },
            ].map((p) => (
              <div
                key={p.titulo}
                className="p-7 rounded-2xl border flex flex-col"
                style={(p as any).destaque
                  ? { background: 'rgba(245,166,35,0.07)', borderColor: 'rgba(245,166,35,0.4)' }
                  : { background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {(p as any).destaque && (
                  <span className="self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ background: 'rgba(245,166,35,0.15)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.3)' }}>
                    Mais contratado
                  </span>
                )}
                <h3 className="text-xl font-black text-white mb-3">{p.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.descricao}</p>
                <p className="text-xs text-gray-500 border-t border-white/5 pt-4">{p.detalhe}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold">Valor: sob consulta</p>
              <p className="text-gray-400 text-sm">Diagnóstico gratuito. Proposta personalizada em até 24h.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
            >
              Quero minha proposta →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Pare de crescer no acaso.<br />Comece a crescer com estratégia.</h2>
          <p className="text-black/70 text-lg mb-2">Fale agora com a Memphis Growth. Vamos entender seu negócio e mostrar o caminho mais direto para o próximo nível.</p>
          <p className="text-black/60 text-sm mb-10">⚡ Primeira sessão de diagnóstico gratuita</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero minha estratégia agora →
          </a>
        </div>
      </section>
    </main>
  )
}
