import { Metadata } from 'next'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Social Media — Memphis Growth',
  description: 'Gestão de redes sociais que vai além de postar bonito. Conteúdo estratégico que posiciona sua marca, gera engajamento real e transforma seguidores em clientes.',
}

const dores = [
  { emoji: '🙈', texto: 'Você posta mas ninguém interage — e não sabe por quê.' },
  { emoji: '😩', texto: 'Sua equipe passa horas criando conteúdo que não traz cliente nenhum.' },
  { emoji: '🤷', texto: 'Você sabe que precisa das redes sociais, mas não tem tempo nem cabeça para isso.' },
]

const resultados = [
  { numero: '+580%', descricao: 'de crescimento médio em alcance orgânico nos primeiros 3 meses' },
  { numero: '4.2x', descricao: 'de aumento em taxa de engajamento real (não comprado)' },
  { numero: '90 dias', descricao: 'para posicionamento sólido e reconhecimento de marca' },
  { numero: '100%', descricao: 'do conteúdo criado sob medida para seu público e voz de marca' },
]

const oquefazemos = [
  {
    nome: 'Estratégia Editorial',
    descricao: 'Nada de postar por postar. Criamos um planejamento mensal com temas, formatos, datas estratégicas e objetivos claros para cada publicação.',
  },
  {
    nome: 'Produção de Conteúdo',
    descricao: 'Artes, Reels, Stories, carrosséis e legendas escritas para converter. Cada peça com um propósito — entreter, educar ou vender.',
  },
  {
    nome: 'Gestão e Publicação',
    descricao: 'Agendamos e publicamos nos melhores horários para o seu público. Sem atraso, sem improvisação, sem estresse para você.',
  },
  {
    nome: 'Gestão de Comunidade',
    descricao: 'Respondemos comentários, mensagens e interagimos com sua audiência. Porque engajamento de verdade acontece na conversa, não só no post.',
  },
  {
    nome: 'Relatórios e Insights',
    descricao: 'Quinzenalmente você recebe um relatório completo com métricas que importam — e nossas recomendações para o próximo período.',
  },
  {
    nome: 'Identidade de Conteúdo',
    descricao: 'Definimos o tom de voz, o estilo visual e os pilares de conteúdo da sua marca para que cada post pareça seu — e não genérico.',
  },
]

const redes = [
  { nome: 'Instagram', descricao: 'Feed impecável, Stories consistentes, Reels que viralizam. O canal mais importante para marcas que querem ser desejadas.' },
  { nome: 'TikTok', descricao: 'O maior motor de descoberta de marcas do mundo. Criamos conteúdo nativo que encanta, diverte e vende — sem parecer anúncio.' },
  { nome: 'Facebook', descricao: 'Ainda o maior para audiências 30+. Grupos, comunidades e conteúdo que converte em geração de leads qualificados.' },
  { nome: 'LinkedIn', descricao: 'Para quem quer ser referência no mercado B2B. Posicionamento de executivos, empresas e thought leadership do setor.' },
]

const etapas = [
  {
    numero: '01',
    titulo: 'Imersão na sua Marca',
    descricao: 'Começamos entendendo quem você é, para quem você fala, o que te diferencia da concorrência e qual o tom de voz que representa sua empresa.',
  },
  {
    numero: '02',
    titulo: 'Diagnóstico das suas Redes',
    descricao: 'Analisamos o que está funcionando, o que está afastando sua audiência e quais oportunidades imediatas podem ser aproveitadas.',
  },
  {
    numero: '03',
    titulo: 'Planejamento Editorial',
    descricao: 'Criamos o calendário do mês inteiro com temas, formatos e referências. Você aprova tudo antes de ir ao ar.',
  },
  {
    numero: '04',
    titulo: 'Produção e Publicação',
    descricao: 'Nossa equipe cria, você aprova, a gente publica. Processo ágil, sem ruído e sem dor de cabeça para o seu time.',
  },
  {
    numero: '05',
    titulo: 'Análise e Evolução',
    descricao: 'Medimos o que funcionou, aprendemos com o que não funcionou e melhoramos mês após mês — porque social media é maratona, não sprint.',
  },
]

export default function SocialMediaPage() {
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
          Instagram · TikTok · Facebook · LinkedIn
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Sua marca presente.<br />
          <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sua audiência comprando.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
          Redes sociais sem estratégia são só barulho. A Memphis Growth cria conteúdo com propósito — que posiciona sua marca como referência, conecta com seu público e transforma curtida em cliente.
        </p>

        <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10 font-medium">
          Enquanto você está sem tempo para pensar em conteúdo, sua concorrência está tomando o espaço que deveria ser seu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
          >
            Quero gestão profissional →
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
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">Isso soa familiar?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dores.map((d) => (
              <div key={d.texto} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl">{d.emoji}</span>
                <p className="text-gray-300 font-medium leading-snug">{d.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F5A623] font-bold mt-8 text-lg">Você não precisa virar especialista em marketing. Deixa isso com a gente.</p>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Resultados comprovados</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">O que acontece quando<br />conteúdo tem estratégia.</h2>
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

      {/* O que fazemos */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O que está incluso</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Gestão completa.<br />Do planejamento à publicação.</h2>
          <p className="text-gray-400 mb-12 max-w-xl">Você aprova. A gente executa. Simples assim.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {oquefazemos.map((item) => (
              <div key={item.nome} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F5A623]/40 transition-all duration-200 group">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{item.nome}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Plataformas</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Dominamos cada canal<br />com estratégia própria.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {redes.map((r) => (
            <div key={r.nome} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F5A623]/40 transition-all duration-200 group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{r.nome}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Nosso processo</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Como funciona na prática.</h2>
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
            O investimento é definido após entender o porte da marca, objetivos e canais trabalhados. Sem surpresas no final do mês.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: 'Presença', descricao: 'Para marcas que precisam começar a construir presença digital com consistência e identidade definida.', detalhe: '2 redes sociais · até 12 posts/mês' },
              { titulo: 'Autoridade', destaque: true, descricao: 'Para marcas que já têm presença e querem virar referência no segmento com conteúdo estratégico e frequência.', detalhe: '3 redes sociais · até 20 posts/mês' },
              { titulo: 'Domínio', descricao: 'Para marcas prontas para dominar o digital. Gestão completa com produção, estratégia, stories e reels diários.', detalhe: '4 redes sociais · produção completa' },
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
              <p className="text-gray-400 text-sm">Definido após diagnóstico gratuito. Sem contrato de fidelidade.</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Sua marca merece<br />ser vista. E lembrada.</h2>
          <p className="text-black/70 text-lg mb-2">Fale agora com nossa equipe e descubra como transformar suas redes em canal de vendas real.</p>
          <p className="text-black/60 text-sm mb-10">⚡ Primeira análise do seu perfil é gratuita</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero crescer no digital →
          </a>
        </div>
      </section>
    </main>
  )
}
