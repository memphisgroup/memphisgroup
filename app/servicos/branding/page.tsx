import { Metadata } from 'next'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Branding — Memphis Growth',
  description: 'Identidade visual que comunica autoridade antes de qualquer palavra. Logo, paleta, tipografia e manual de marca construídos com estratégia e propósito.',
}

const dores = [
  { emoji: '😬', texto: 'Você tem vergonha de mandar o link do seu site ou perfil para um cliente.' },
  { emoji: '🤔', texto: 'As pessoas não entendem o que sua empresa faz só de olhar para a marca.' },
  { emoji: '💔', texto: 'Sua identidade visual foi feita às pressas e você sabe que não representa o que a empresa entrega.' },
]

const resultados = [
  { numero: '1ª', descricao: 'impressão — você tem só uma chance de causar. A sua precisa ser forte.' },
  { numero: '2x', descricao: 'mais percepção de valor pelo mesmo produto quando a marca é profissional.' },
  { numero: '21 dias', descricao: 'para entrega completa do projeto de identidade visual.' },
  { numero: '∞', descricao: 'de consistência — mesma linguagem em todos os canais, para sempre.' },
]

const entregas = [
  {
    nome: 'Logotipo & Variações',
    descricao: 'Logo principal, versão horizontal, versão reduzida (símbolo), monocromática e negativa. Arquivos em todos os formatos para qualquer aplicação.',
  },
  {
    nome: 'Paleta de Cores',
    descricao: 'Cores primárias, secundárias e de suporte com códigos exatos (HEX, RGB, CMYK). Uso correto e incorreto documentado.',
  },
  {
    nome: 'Tipografia Estratégica',
    descricao: 'Famílias tipográficas escolhidas para reforçar a personalidade da marca. Hierarquia visual para títulos, subtítulos e corpo de texto.',
  },
  {
    nome: 'Elementos Visuais',
    descricao: 'Padrões, texturas, ícones e recursos gráficos que complementam a identidade e garantem flexibilidade criativa.',
  },
  {
    nome: 'Manual de Marca',
    descricao: 'Guia completo com todas as regras de uso. Qualquer designer, agência ou parceiro consegue aplicar sua marca corretamente.',
  },
  {
    nome: 'Aplicações Práticas',
    descricao: 'Mockups de cartão de visita, papel timbrado, perfil social e assinatura de e-mail. Você vê como fica na vida real antes de sair.',
  },
]

const etapas = [
  {
    numero: '01',
    titulo: 'Discovery & Posicionamento',
    descricao: 'Uma conversa profunda sobre quem você é, para quem você serve, o que você entrega e como quer ser percebido. A base de tudo que vem a seguir.',
  },
  {
    numero: '02',
    titulo: 'Pesquisa e Referências',
    descricao: 'Analisamos sua concorrência, benchmarks do setor e referências estéticas. Entendemos o que já existe para criar algo que realmente se destaque.',
  },
  {
    numero: '03',
    titulo: 'Conceituação Criativa',
    descricao: 'Definimos o arquétipo da marca, o território visual e o tom de voz. Aqui nasce a alma do que vamos criar.',
  },
  {
    numero: '04',
    titulo: '3 Propostas para Escolha',
    descricao: 'Apresentamos 3 direções criativas distintas. Você escolhe a que mais representa a visão da empresa — e refinamos juntos até a perfeição.',
  },
  {
    numero: '05',
    titulo: 'Entrega Completa',
    descricao: 'Todos os arquivos organizados, nomeados e prontos para uso. Manual de marca detalhado. Você sai com tudo que precisa para aplicar a identidade em qualquer lugar.',
  },
]

const porqueImporta = [
  {
    titulo: 'Marca fraca custa mais caro',
    descricao: 'Quando sua identidade não transmite confiança, você compete por preço. Com uma marca forte, você compete por valor — e cobra mais por isso.',
  },
  {
    titulo: 'Consistência gera confiança',
    descricao: 'Quem vê sua empresa no Instagram, no site e no cartão de visita precisa sentir que é a mesma empresa. Inconsistência gera dúvida. Dúvida mata venda.',
  },
  {
    titulo: 'Primeira impressão é definitiva',
    descricao: 'Levamos 7 segundos para formar uma opinião sobre uma marca. O que a sua está comunicando nesse tempo?',
  },
  {
    titulo: 'Diferenciação é sobrevivência',
    descricao: 'Em mercados saturados, quem não tem identidade clara desaparece. Branding é o que faz alguém lembrar de você e não do concorrente.',
  },
]

export default function BrandingPage() {
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
          Logo · Identidade Visual · Manual de Marca
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Sua marca falando<br />
          <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>antes de você.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
          Uma identidade visual forte não é luxo — é a diferença entre ser escolhido ou ser ignorado. A Memphis Growth constrói marcas que comunicam autoridade, geram confiança e fazem o cliente decidir antes mesmo de conversar com você.
        </p>

        <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10 font-medium">
          Produto igual ao do concorrente. A marca diferente. Adivinha quem o cliente escolhe?
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
          >
            Quero uma marca poderosa →
          </a>
          <a
            href="#processo"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/20 hover:border-[#F5A623]/50 transition-all duration-200"
          >
            Ver o processo
          </a>
        </div>
      </section>

      {/* Dores */}
      <section className="py-14 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">Seja honesto consigo mesmo:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dores.map((d) => (
              <div key={d.texto} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl">{d.emoji}</span>
                <p className="text-gray-300 font-medium leading-snug">{d.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F5A623] font-bold mt-8 text-lg">Se você respondeu sim para qualquer um desses, é hora de investir em branding.</p>
        </div>
      </section>

      {/* Por que importa */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Por que branding não é opcional</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Marca fraca = empresa invisível.<br />É simples assim.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {porqueImporta.map((item) => (
            <div key={item.titulo} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all duration-200">
              <h3 className="text-white font-bold mb-2 text-lg">{item.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O impacto do branding</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Números que justificam<br />o investimento.</h2>
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
        </div>
      </section>

      {/* Entregas */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">O que você recebe</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Tudo que sua marca precisa.<br />Nada que não precisa.</h2>
        <p className="text-gray-400 mb-12 max-w-xl">Sem pendências, sem pacotes incompletos. Você sai com uma identidade completa e pronta para uso.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entregas.map((e) => (
            <div key={e.nome} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F5A623]/40 transition-all duration-200 group">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{e.nome}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{e.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#F5A623] font-bold uppercase tracking-widest mb-4">Como criamos sua identidade</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Processo criativo.<br />Resultado estratégico.</h2>
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
            Cada projeto de branding é único. O escopo e o investimento são definidos após entender a fundo o momento da marca, objetivos e entregáveis necessários.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: 'Identidade', descricao: 'Logo, paleta de cores, tipografia e guia de aplicação básico. Ideal para marcas que estão começando.', detalhe: 'Entrega em até 15 dias úteis' },
              { titulo: 'Marca Completa', destaque: true, descricao: 'Tudo da Identidade + tom de voz, manual de marca completo, papelaria digital e templates de redes sociais.', detalhe: 'Entrega em até 25 dias úteis' },
              { titulo: 'Rebranding', descricao: 'Revisão completa de uma marca existente. Diagnóstico, reposicionamento e nova identidade visual completa.', detalhe: 'Prazo sob consulta' },
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
              <p className="text-white font-bold">Valor do projeto: sob consulta</p>
              <p className="text-gray-400 text-sm">Orçamento gratuito após briefing. Sem compromisso.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}
            >
              Quero meu orçamento →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">É hora de ter uma marca<br />à altura do que você entrega.</h2>
          <p className="text-black/70 text-lg mb-2">Fale com nossa equipe agora. Vamos entender seu negócio e mostrar como construir uma identidade que converte.</p>
          <p className="text-black/60 text-sm mb-10">⚡ Briefing inicial gratuito e sem compromisso</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-black text-white hover:bg-[#1A1A1A] transition-all duration-200 hover:scale-105"
          >
            Quero construir minha marca →
          </a>
        </div>
      </section>
    </main>
  )
}
