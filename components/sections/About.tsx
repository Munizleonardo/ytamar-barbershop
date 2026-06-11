'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const carouselImages = [
  {
    src: '/img1.jpg',
    caption: 'Ambiente premium',
    bg: 'linear-gradient(135deg, #1a1208 0%, #2d2010 60%, #0a0a08 100%)',
    accent: '#c9a84c',
  },
  {
    src: '/img2.jpg',
    caption: 'Cortes precisos',
    bg: 'linear-gradient(135deg, #0d0d12 0%, #151520 60%, #080808 100%)',
    accent: '#8899dd',
  },
  {
    src: '/img3.jpg',
    caption: 'Tradição e estilo',
    bg: 'linear-gradient(135deg, #120d0d 0%, #201515 60%, #080808 100%)',
    accent: '#cc8877',
  },
  {
    src: '/img4.jpg',
    caption: 'Atendimento exclusivo',
    bg: 'linear-gradient(135deg, #0d120d 0%, #152015 60%, #080808 100%)',
    accent: '#77cc88',
  },
];

export const About = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 4000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="about"
      className="py-16 md:py-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Responsive two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── Carousel ── */}
          <div className="w-full lg:flex-1 relative">
            <div
              className="about-carousel"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: carouselImages[current].bg,
                  transition: 'opacity 0.3s ease',
                  opacity: animating ? 0 : 1,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 40%, ${carouselImages[current].accent}22 0%, transparent 70%), repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.015) 30px, rgba(255,255,255,0.015) 31px)`,
                  }}
                />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={carouselImages[current].src}
                alt={carouselImages[current].caption}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                  opacity: animating ? 0 : 1,
                  zIndex: 1,
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px 24px 24px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    color: '#d1d1d1',
                    fontWeight: 500,
                    fontSize: '14px',
                    letterSpacing: '1px',
                  }}
                >
                  {carouselImages[current].caption}
                </p>
              </div>

              {/* Nav arrows */}
              <button
                onClick={() => go(-1)}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#d1d1d1',
                  transition: 'all 0.2s',
                  zIndex: 3,
                }}
                className="hover:bg-white/20"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => go(1)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#d1d1d1',
                  transition: 'all 0.2s',
                  zIndex: 3,
                }}
                className="hover:bg-white/20"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: current === i ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: current === i ? '#d1d1d1' : '#444',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Text ── */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <Badge variant="outline">Nossa História</Badge>

            <h2
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(26px, 4vw, 44px)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              Mais que uma barbearia,{' '}
              <span className="silver-gradient">uma experiência.</span>
            </h2>

            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderLeft: '3px solid #555',
                borderRadius: '0 8px 8px 0',
                padding: '16px 20px',
              }}
            >
              <Quote size={20} style={{ color: '#555', marginBottom: '8px' }} />
              <p style={{ color: '#888', fontStyle: 'italic', lineHeight: 1.7 }}>
                &quot;Cada cliente merece sair daqui sentindo que é a melhor versão de si mesmo.&quot;
              </p>
              <p style={{ color: '#555', fontSize: '13px', marginTop: '8px' }}>
                — Ytamar, Fundador
              </p>
            </div>

            <Separator />

            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '15px' }}>
              Fundada em 2023, a <strong style={{ color: '#d1d1d1' }}>Ytamar BarberShop</strong>{' '}
              nasceu do sonho de criar um espaço onde tradição e modernidade se encontram. Com mais de
              8 anos de experiência, nos tornamos referência em cortes masculinos de alta qualidade no
              coração de São José – SC.
            </p>

            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '15px' }}>
              Nossa equipe de barbeiros altamente qualificados domina desde o clássico corte a navalha
              até as tendências mais contemporâneas. Cada visita é pensada para ser uma experiência
              completa de cuidado e estilo.
            </p>

            {/* Pricing */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                ['Corte', 'A partir de R$45'],
                ['Barba', 'A partir de R$30'],
                ['Combo', 'A partir de R$70'],
              ].map(([svc, price]) => (
                <div key={svc}>
                  <div style={{ color: '#d1d1d1', fontWeight: 600, fontSize: '15px' }}>{svc}</div>
                  <div style={{ color: '#666', fontSize: '12px', lineHeight: 1.5 }}>{price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
