'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NextImage from 'next/image'

interface GalleryItem {
  src: string
  alt: string
  label: string
  sub: string
  titulo: string
  abordagem: string
  resultado: string
  landscape?: boolean
}

const items: GalleryItem[] = [
  {
    src: '/cases/gabriel-campos/post-bora.png',
    alt: 'Gabriel Campos — Bora!',
    label: 'Conteúdo de Conexão',
    sub: 'Engajamento e identificação',
    titulo: 'Como abordamos Conteúdo de Conexão',
    abordagem: 'Conteúdo de conexão não é sobre o produto — é sobre a pessoa. Trabalhamos para que o Gabriel mostrasse quem ele é antes de mostrar o que ele vende. Momentos autênticos, linguagem direta e uma energia que faz o público sentir: "esse cara é como eu." Quando o seguidor se identifica com quem está na tela, ele ouve. E quando ouve, ele confia.',
    resultado: 'Posts de conexão respondem por mais de 60% do crescimento orgânico de audiência fiel.',
  },
  {
    src: '/cases/gabriel-campos/post-contou.png',
    alt: 'O que ninguém te contou',
    label: 'Conteúdo Educativo',
    sub: 'Posicionamento e valor',
    titulo: 'Como abordamos Conteúdo Educativo',
    abordagem: 'Educar é a forma mais poderosa de posicionar. Cada conteúdo educativo foi construído com uma premissa clara: o que o público precisa saber que ainda não sabe? Roteirizamos com gancho forte, desenvolvimento com densidade real e CTA que gera ação. Não ensinamos por ensinar — ensinamos para ser lembrado como referência.',
    resultado: 'Vídeos educativos atingiram até 22 mil visualizações, gerando reconhecimento de autoridade no segmento.',
  },
  {
    src: '/cases/gabriel-campos/post-vegas.png',
    alt: 'Gabriel Campos — Vegas',
    label: 'Lifestyle & Aspiração',
    sub: 'Construção de desejo',
    titulo: 'Como abordamos Lifestyle & Aspiração',
    abordagem: 'Vender um resultado começa por mostrar que esse resultado existe. Conteúdo de lifestyle não é exibicionismo — é prova social em forma de narrativa. Usamos momentos reais da vida do Gabriel para construir desejo no público: "eu quero chegar onde ele chegou." Isso cria identificação com o sucesso, não inveja. E identificação vende.',
    resultado: 'Conteúdo aspiracional aumentou em 3x o número de mensagens diretas de pessoas querendo mentoria.',
  },
]

const podcastItem: GalleryItem = {
  src: '/cases/gabriel-campos/post-podcast.jpg',
  alt: 'Gabriel Campos no ContaCast',
  label: 'Presença em Podcasts',
  sub: 'Autoridade off-feed',
  titulo: 'Por que Podcasts são estratégicos',
  abordagem: 'Aparecer em podcast não é só exposição — é validação. Quando o Gabriel é convidado para falar sobre Shopee e e-commerce em programas de terceiros, ele deixa de ser "mais um criador de conteúdo" e passa a ser tratado como especialista convocado. Isso muda a percepção do público de forma profunda: quem é convidado para falar sabe mais do que quem apenas publica. Trabalhamos para posicionar o Gabriel como voz de referência dentro e fora das suas próprias redes — expandindo o alcance para audiências que nunca o seguiriam de outra forma.',
  resultado: 'Aparições em podcasts aumentam em até 4x a percepção de autoridade e geram seguidores de altíssimo nível de confiança.',
  landscape: true,
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10 group hover:border-[#F5A623]/40 transition-all duration-200 cursor-pointer"
      style={{ height: '400px' }}
      onClick={onClick}
    >
      <NextImage src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-sm font-bold">{item.label}</p>
        <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
          Clique para saber mais
        </span>
      </div>
    </div>
  )
}

export function ContentGallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      {/* Grid 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <GalleryCard key={item.src} item={item} onClick={() => setSelected(item)} />
        ))}
      </div>

      {/* Card de podcast em destaque — full width */}
      <div
        className="relative mt-4 rounded-2xl overflow-hidden bg-[#111111] border border-white/10 group hover:border-[#F5A623]/40 transition-all duration-200 cursor-pointer"
        style={{ height: '320px' }}
        onClick={() => setSelected(podcastItem)}
      >
        <NextImage
          src={podcastItem.src}
          alt={podcastItem.alt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

        {/* Conteúdo à esquerda */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-lg">
          <span className="text-xs font-bold px-3 py-1 rounded-full border w-fit mb-4"
            style={{ background: 'rgba(245,166,35,0.15)', borderColor: 'rgba(245,166,35,0.4)', color: '#F5A623' }}>
            {podcastItem.label}
          </span>
          <h3 className="text-white font-black text-2xl mb-2 leading-tight">
            Presença além do feed.<br />
            <span style={{ background: 'linear-gradient(135deg, #F5A623, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Autoridade em todo lugar.
            </span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Ser convidado para falar é diferente de simplesmente publicar. É validação de mercado — e isso constrói autoridade que nenhum algoritmo apaga.
          </p>
          <span className="text-sm text-[#F5A623] font-semibold flex items-center gap-2">
            Ver a estratégia por trás
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
          </span>
        </div>

        {/* Hint */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Clique para saber mais
          </span>
        </div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Card do modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`relative z-10 w-full rounded-3xl overflow-hidden bg-[#0F0F0F] border border-white/10 ${selected.landscape ? 'max-w-2xl flex flex-col' : 'max-w-3xl flex flex-col md:flex-row'}`}
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.landscape ? (
                /* Layout vertical — foto paisagem em cima, texto embaixo */
                <>
                  <div className="relative w-full shrink-0" style={{ aspectRatio: '3/2' }}>
                    <NextImage src={selected.src} alt={selected.alt} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full border"
                        style={{ background: 'rgba(245,166,35,0.2)', borderColor: 'rgba(245,166,35,0.5)', color: '#F5A623', backdropFilter: 'blur(8px)' }}>
                        {selected.label}
                      </span>
                    </div>
                    <button onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                      ✕
                    </button>
                  </div>
                  <div className="p-7 overflow-y-auto">
                    <h3 className="text-xl font-black text-white mb-3 leading-tight">{selected.titulo}</h3>
                    <p className="text-gray-400 leading-relaxed mb-5 text-sm">{selected.abordagem}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl mb-5"
                      style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
                      <span className="text-[#F5A623] text-lg shrink-0">→</span>
                      <div>
                        <p className="text-xs text-[#F5A623] font-bold uppercase tracking-widest mb-1">Impacto</p>
                        <p className="text-white text-sm font-medium">{selected.resultado}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)}
                      className="w-full py-3 rounded-xl text-sm font-bold text-gray-400 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200">
                      Fechar
                    </button>
                  </div>
                </>
              ) : (
                /* Layout horizontal — foto retrato à esquerda, texto à direita */
                <>
                  <div className="relative md:w-[45%] shrink-0" style={{ minHeight: '300px' }}>
                    <NextImage src={selected.src} alt={selected.alt} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full border"
                        style={{ background: 'rgba(245,166,35,0.2)', borderColor: 'rgba(245,166,35,0.5)', color: '#F5A623', backdropFilter: 'blur(8px)' }}>
                        {selected.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-7 overflow-y-auto">
                    <button onClick={() => setSelected(null)}
                      className="self-end w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors mb-4 shrink-0">
                      ✕
                    </button>
                    <h3 className="text-xl font-black text-white mb-4 leading-tight">{selected.titulo}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm flex-1">{selected.abordagem}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl mb-5"
                      style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
                      <span className="text-[#F5A623] text-lg shrink-0 mt-0.5">→</span>
                      <div>
                        <p className="text-xs text-[#F5A623] font-bold uppercase tracking-widest mb-1">Impacto</p>
                        <p className="text-white text-sm font-medium">{selected.resultado}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)}
                      className="w-full py-3 rounded-xl text-sm font-bold text-gray-400 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200 shrink-0">
                      Fechar
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
