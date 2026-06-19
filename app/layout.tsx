import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  title: {
    default: 'Memphis Growth — Agência de Marketing Digital',
    template: '%s | Memphis Growth',
  },
  description:
    'Agência de marketing digital especializada em tráfego pago, social media e estratégia digital. Resultados reais para empresas que querem crescer de verdade.',
  keywords: [
    'agência de marketing digital',
    'tráfego pago',
    'social media',
    'Google Ads',
    'Meta Ads',
    'branding',
    'estratégia digital',
    'gestão de redes sociais',
    'marketing para empresas',
    'Memphis Growth',
    'agência de marketing',
  ],
  authors: [{ name: 'Memphis Growth' }],
  creator: 'Memphis Growth',
  publisher: 'Memphis Growth',
  metadataBase: new URL('https://memphisgrowth.com.br'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://memphisgrowth.com.br',
    siteName: 'Memphis Growth',
    title: 'Memphis Growth — Agência de Marketing Digital',
    description:
      'Tráfego pago, social media e estratégia digital para empresas que querem crescer de verdade.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Memphis Growth — Agência de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memphis Growth — Agência de Marketing Digital',
    description:
      'Tráfego pago, social media e estratégia digital para empresas que querem crescer de verdade.',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Memphis Growth',
  description: 'Agência de marketing digital especializada em tráfego pago, social media e estratégia digital.',
  url: 'https://memphisgrowth.com.br',
  logo: 'https://memphisgrowth.com.br/logo.png',
  sameAs: [
    'https://www.instagram.com/memphisgrowth/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  offers: {
    '@type': 'Offer',
    description: 'Serviços de marketing digital: tráfego pago, social media, branding e estratégia digital.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-carbon-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
