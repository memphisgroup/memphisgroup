import { Metadata } from 'next'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Tráfego Pago — Memphis Growth',
  description: 'Pare de jogar dinheiro fora em anúncios que não convertem. Campanhas de Google Ads e Meta Ads com estratégia real e ROI mensurável.',
}

const dores = [
  { emoji: '💸', texto: 'Você já investiu em anúncios e não viu retorno?' },
  { emoji: '😤', texto: 'Sua agência anterior sumiu depois de fechar o contrato?' },
  { emoji: '📉', texto: 'Suas campanhas até rodam, mas não geram clientes de verdade?' },
]

const resultados = [
  { numero: '+320%', descricao: 'de aumento médio em conversões nos primeiros 90 dias' },
  { numero: '-45%', descricao: 'de redução no custo por aquisição de clientes' },
  { numero: '3.8x', descricao: 'de ROAS médio — para cada R$1 investido, R$3,80 de retorno' },
  { numero: '30 dias', descricao: 'para os primeiros resultados aparecerem' },
]

const plataformas = [
  {
    nome: 'Meta Ads',
    descricao: 'Facebook e Instagram com segmentação cirúrgica. Chegamos no seu cliente ideal antes dele saber que precisa de você — com criativos que param o scroll e copys que vendem.',
  },
  {
    nome: 'Google Ads',
    descricao: 'Search, Display, YouTube e Shopping. Capturamos quem já está procurando o que você vende e convertemos intenção em faturamento.',
  },
  {
    nome: 'TikTok Ads',
    descricao: 'A plataforma que mais cresce no Brasil. Conteúdo nativo que não parece anúncio — e converte exatamente por isso.',
  },
  {
    nome: 'LinkedIn Ads',
    descricao: 'B2B com precisão de bisturi. Segmentação por cargo, empresa, setor e senioridade. Ideal para quem vende para empresas e tomadores de decisão.',
  },
]

const etapas = [
  {
    numero: '01',
    titulo: 'Diagnóstico Completo',
    descricao: 'Antes de gastar R$1, entendemos seu negócio, público, concorrência e histórico de campanhas. Identificamos onde está o dinheiro sendo desperdiçado.',
  },
  {
    numero: '02',
    titulo: 'Estratégia sob Medida',
    descricao: 'Nada de template. Montamos a estrutura de campanhas específica para seu mercado — com metas, KPIs e projeções de resultado claras e realistas.',
  },
  {
    numero: '03',
    titulo: 'Criativos que Convertem',
    descricao: 'Desenvolvemos artes, vídeos e copys testados para parar o scroll e levar o usuário até a compra. Cada criativo tem uma hipótese e um objetivo.',
  },
  {
    numero: '04',
    titulo: 'Otimização em Tempo Real',
    descricao: 'Monitoramento diário. Pausamos o que não performa, escalamos o que funciona e testamos novas variações constantemente para maximizar o seu ROAS.',
  },
  {
    numero: '05',
    titulo: 'Relatório Transparente',
    descricao: 'Relatório semanal com todos os números, sem enrolação. Você sabe exatamente onde cada centavo do seu investimento está sendo aplicado.',
  },
]

const porQueMemphis = [
  { titulo: 'Sem contrato de fidelidade', descricao: 'Ficamos porque entregamos resultado, não porque você está preso.' },
  { titulo: 'Gestor dedicado ao seu negócio', descricao: 'Uma pessoa que conhece o seu mercado de cor e responde no WhatsApp.' },
  { titulo: 'Verba 100% auditável', descricao: 'Você vê cada centavo investido nas plataformas de anúncio em tempo real.' },
  { titulo: 'Foco em venda, não em métrica vazia', descricao: 'Clique, alcance e impressão são vaidade. Trabalhamos para trazer cliente e faturamento.' },
]

export default function TrafegoPagoPage() {
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
          Google Ads · Meta Ads · TikTok Ads · LinkedIn Ads
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Seu cliente te encontra.<br />
          <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Antes da concorrência.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
          A maioria das empresas joga dinheiro fora em anúncios sem estratégia. A Memphis Growth transforma verba de mídia em faturamento previsível — com campanhas construídas para converter, não apenas para aparecer.
        </p>

        <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10 font-medium">
          Se você já gastou com tráfego e não viu resultado, o problema não era o anúncio. Era a falta de estratégia por trás dele.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
          >
            Quero uma estratégia gratuita →
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/20 hover:border-[#F5A623]/50 transition-all duration-200"
          >
            Ver como funciona
          </a>
        </div>
      </section>

      {/* Dores */}
      <section className="py-14 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">Você se identifica com algum desses cenários?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dores.map((d) => (
              <div key={d.texto} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl">{d.emoji}</span>
                <p className="text-gray-300 font-medium leading-snug">{d.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F5A623] font-bold mt-8 text-lg">Se sim, a Memphis Growth foi feita para resolver exatamente isso.</p>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Números reais de clientes reais</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Resultados que falam por si.</h2>
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

      {/* Plataformas */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Onde atuamos</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Presença estratégica<br />em todas as plataformas.</h2>
          <p className="text-gray-400 mb-12 max-w-xl">Não fazemos tudo de qualquer jeito. Escolhemos os canais certos para o seu negócio e dominamos cada um deles.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plataformas.map((p) => (
              <div key={p.nome} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F5A623]/40 transition-all duration-200 group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F5A623] transition-colors">{p.nome}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Nosso processo</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Como transformamos<br />verba em resultado.</h2>
        <div className="space-y-8">
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
      </section>

      {/* Por que Memphis */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Por que a Memphis Growth</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Sem enrolação.<br />Sem desculpa. Só resultado.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {porQueMemphis.map((item) => (
              <div key={item.titulo} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[#F5A623] text-xl mt-0.5">✓</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.descricao}</p>
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
            Não trabalhamos com pacotes genéricos. O investimento é definido após entender seu negócio, objetivo e mercado — para que cada centavo faça sentido.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: 'Entrada', descricao: 'Ideal para negócios que estão dando os primeiros passos no tráfego pago. Foco em aprendizado e primeiros resultados.', detalhe: 'Verba mínima recomendada: R$ 1.500/mês' },
              { titulo: 'Crescimento', destaque: true, descricao: 'Para quem já investe em tráfego e quer escalar com mais consistência, previsibilidade e estratégia.', detalhe: 'Verba mínima recomendada: R$ 3.000/mês' },
              { titulo: 'Escala', descricao: 'Para negócios prontos para crescer de forma agressiva. Gestão multicanal com foco total em performance e ROAS.', detalhe: 'Verba mínima recomendada: R$ 6.000/mês' },
            ].map((p) => (
              <div
                key={p.titulo}
                className="p-7 rounded-2xl border flex flex-col"
                style={p.destaque
                  ? { background: 'rgba(245,166,35,0.07)', borderColor: 'rgba(245,166,35,0.4)' }
                  : { background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {p.destaque && (
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
              <p className="text-white font-bold">Valor da gestão: sob consulta</p>
              <p className="text-gray-400 text-sm">Definido após diagnóstico gratuito. Sem taxa de setup.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
            >
              Quero saber meu valor →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Chega de pagar para aparecer.<br />Comece a pagar para vender.</h2>
          <p className="text-black/70 text-lg mb-2">Diagnóstico gratuito. Sem compromisso. Fale agora com um especialista em tráfego pago.</p>
          <p className="text-black/60 text-sm mb-10">⚡ Respondemos em até 1 hora no horário comercial</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero meu diagnóstico gratuito →
          </a>
        </div>
      </section>
    </main>
  )
}
