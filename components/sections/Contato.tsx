'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { WHATSAPP_NUMBER } from '@/lib/utils'

const servicos = [
  'Tráfego Pago',
  'Social Media',
  'Branding',
  'Estratégia Digital',
  'Não sei ainda',
]

export function Contato() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ nome: '', empresa: '', servico: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const texto = `Olá! Vim pelo site da Memphis Growth.\n\n*Nome:* ${form.nome}\n*Empresa:* ${form.empresa || 'Não informado'}\n*Serviço de interesse:* ${form.servico}\n\n*Mensagem:* ${form.mensagem}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  const inputClass = 'w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1'
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }
  const inputFocusStyle = 'focus:border-gold-primary/50'

  return (
    <section
      id="contato"
      ref={ref}
      className="section-padding relative"
      aria-labelledby="contato-title"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.2), transparent)' }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #F5A623 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Lado esquerdo — texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Fale com a gente
            </span>
            <h2
              id="contato-title"
              className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Pronto para<br />
              <span style={{ background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                crescer de verdade?
              </span>
            </h2>
            <p className="text-gray-light text-lg leading-relaxed mb-10">
              Preencha o formulário e vamos conversar. O diagnóstico é gratuito e sem compromisso — em até 1 hora no horário comercial você já tem uma resposta.
            </p>

            {/* Diferenciais */}
            <div className="space-y-4">
              {[
                { icone: '⚡', titulo: 'Resposta em até 1h', texto: 'No horário comercial, respondemos rápido.' },
                { icone: '🎯', titulo: 'Diagnóstico gratuito', texto: 'Sem compromisso. Só valor desde o primeiro contato.' },
                { icone: '🔒', titulo: 'Sem contrato longo', texto: 'Ficamos porque entregamos. Não porque você está preso.' },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(245,166,35,0.04)', border: '1px solid rgba(245,166,35,0.1)' }}>
                  <span className="text-2xl">{item.icone}</span>
                  <div>
                    <p className="text-white font-bold text-sm">{item.titulo}</p>
                    <p className="text-gray-mid text-xs mt-0.5">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lado direito — formulário */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl space-y-5"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Nome */}
              <div>
                <label className="block text-xs text-gray-mid font-semibold uppercase tracking-widest mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Como posso te chamar?"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-xs text-gray-mid font-semibold uppercase tracking-widest mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa (opcional)"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
              </div>

              {/* Serviço */}
              <div>
                <label className="block text-xs text-gray-mid font-semibold uppercase tracking-widest mb-2">
                  Serviço de interesse *
                </label>
                <select
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  required
                  className={`${inputClass} ${inputFocusStyle} cursor-pointer`}
                  style={{ ...inputStyle, color: form.servico ? '#fff' : '#4b5563' }}
                >
                  <option value="" disabled>Selecione um serviço</option>
                  {servicos.map((s) => (
                    <option key={s} value={s} style={{ background: '#1a1a1a', color: '#fff' }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs text-gray-mid font-semibold uppercase tracking-widest mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Fala um pouco sobre seu negócio e o que você precisa..."
                  className={`${inputClass} ${inputFocusStyle} resize-none`}
                  style={inputStyle}
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-base text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                style={{ background: enviado ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #F5A623, #D4AF37)', boxShadow: '0 8px 32px rgba(245,166,35,0.25)' }}
              >
                {enviado ? (
                  <>✓ Abrindo WhatsApp...</>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar via WhatsApp
                  </>
                )}
              </button>

              <p className="text-center text-gray-mid text-xs">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem pronta.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
