import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Memphis Growth — Agência de Marketing Digital'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid de fundo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(245,166,35,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.06) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Glow dourado centro */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,166,35,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Linha topo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #F5A623, #D4AF37, #F5A623, transparent)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 24px',
            borderRadius: '999px',
            background: 'rgba(245,166,35,0.1)',
            border: '1px solid rgba(245,166,35,0.3)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#F5A623',
            }}
          />
          <span style={{ color: '#F5A623', fontSize: '18px', fontWeight: 700, letterSpacing: '0.1em' }}>
            AGÊNCIA DE MARKETING DIGITAL
          </span>
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 900,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '8px',
          }}
        >
          Memphis
        </div>
        <div
          style={{
            fontSize: '80px',
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '36px',
          }}
        >
          Growth
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
            marginBottom: '48px',
          }}
        >
          Tráfego pago, social media e estratégia digital para empresas que querem crescer de verdade.
        </div>

        {/* Pills de serviços */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Tráfego Pago', 'Social Media', 'Branding', 'Estratégia Digital'].map((s) => (
            <div
              key={s}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Linha fundo */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)',
          }}
        />

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '40px',
            color: 'rgba(245,166,35,0.5)',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          memphisgrowth.com.br
        </div>
      </div>
    ),
    { ...size }
  )
}
