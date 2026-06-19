'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { cn, WHATSAPP_URL } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/Button'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Método', href: '#metodo' },
  { label: 'Cases', href: '#cases' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-carbon-dark/90 backdrop-blur-md border-b border-white/5 shadow-card'
          : 'bg-transparent'
      )}
    >
      {/* Barra de progresso de scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #F5A623, #D4AF37)',
        }}
      />

      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Memphis Growth">
            <Image
              src="/logo.png"
              alt="Memphis Growth"
              width={180}
              height={72}
              className="object-contain h-14 w-auto"
              style={{ mixBlendMode: 'lighten' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegacao principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 relative group',
                    isActive ? 'text-gold-primary' : 'text-gray-light hover:text-gold-primary'
                  )}
                >
                  {link.label}
                  {/* Underline animado */}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-gold-primary transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                  {/* Ponto ativo */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-primary"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <ButtonLink
              href={WHATSAPP_URL}
              external
              variant="primary"
              size="sm"
              className="text-sm"
            >
              Falar com especialista
            </ButtonLink>
          </div>

          {/* Hamburger Mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className={cn('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'opacity-0 scale-x-0')} />
            <span className={cn('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && '-translate-y-2 -rotate-45')} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-carbon-dark/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="section-container py-6 flex flex-col gap-4" aria-label="Menu mobile">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'text-base font-medium transition-colors py-2 border-b border-white/5 flex items-center justify-between',
                      isActive ? 'text-gold-primary' : 'text-gray-light hover:text-gold-primary'
                    )}
                  >
                    {link.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />}
                  </motion.a>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <ButtonLink
                  href={WHATSAPP_URL}
                  external
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  Falar com especialista
                </ButtonLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
