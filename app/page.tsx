import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Servicos } from '@/components/sections/Servicos'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { Metodo } from '@/components/sections/Metodo'
import { Cases } from '@/components/sections/Cases'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Sobre } from '@/components/sections/Sobre'
import { Contato } from '@/components/sections/Contato'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { EgyptianBackground, EgyptianDivider } from '@/components/ui/EgyptianElements'
import { ChessBackground } from '@/components/ui/ChessBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon-dark">
      <EgyptianBackground />
      <ChessBackground />
      <Navbar />
      <Hero />
      <EgyptianDivider />
      <Servicos />
      <EgyptianDivider />
      <Diferenciais />
      <EgyptianDivider />
      <Metodo />
      <Cases />
      <EgyptianDivider />
      <Depoimentos />
      <EgyptianDivider />
      <Sobre />
      <EgyptianDivider />
      <Contato />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
