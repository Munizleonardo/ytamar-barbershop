'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Star, Users, Award, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80',
    alt: 'Barbeiro trabalhando',
    bg: 'linear-gradient(160deg, #0d0d0d 0%, #1a1510 40%, #0a0a08 100%)',
    accent: '#c9a84c',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80',
    alt: 'Corte moderno',
    bg: 'linear-gradient(160deg, #080810 0%, #10101a 40%, #060608 100%)',
    accent: '#8899cc',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1920&q=80',
    alt: 'Barbearia ambiente',
    bg: 'linear-gradient(160deg, #0a0a0a 0%, #181212 40%, #080808 100%)',
    accent: '#cc8899',
  },
];

const stats = [
  { icon: Star, value: '5.0', label: 'Avaliação' },
  { icon: Users, value: '2k+', label: 'Clientes' },
  { icon: Award, value: '8+', label: 'Anos' },
  { icon: Scissors, value: '3', label: 'Barbeiros' },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Background slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 1.5s ease',
            opacity: current === i ? 1 : 0,
            background: slide.bg,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage: `
                radial-gradient(ellipse 80% 60% at 70% 40%, ${slide.accent}18 0%, transparent 60%),
                repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)
              `,
            }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0, zIndex: 2 }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
          width: '100%',
        }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease 0.3s',
          }}
        >
          <Badge variant="outline" className="mb-6">
            Desde 2016 • São Paulo
          </Badge>

          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(40px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 1,
              color: 'white',
              marginBottom: '8px',
              letterSpacing: '-1px',
            }}
          >
            YTAMAR
          </h1>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(28px, 5vw, 64px)',
              fontWeight: 700,
              color: '#b0b0b0',
              letterSpacing: '8px',
              marginBottom: '24px',
            }}
          >
            BARBERSHOP
          </h2>

          <p
            style={{
              color: '#888',
              fontSize: 'clamp(14px, 2vw, 18px)',
              maxWidth: '480px',
              lineHeight: 1.7,
              marginBottom: '36px',
            }}
          >
            Arte, estilo e precisão em cada corte. Onde a tradição da barbearia encontra o design moderno.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open(
                  'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.',
                  '_blank'
                )
              }
            >
              Agendar Horário
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conhecer mais
            </Button>
          </div>

          <Separator className="mb-8 opacity-40" />

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon size={18} style={{ color: '#888' }} />
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ color: '#666', fontSize: '12px', letterSpacing: '1px' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '32px',
          zIndex: 4,
          display: 'flex',
          gap: '8px',
        }}
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: current === i ? '#d1d1d1' : '#555',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
        }}
        onClick={() =>
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <ChevronDown style={{ color: '#555' }} size={28} />
      </div>
    </section>
  );
};
