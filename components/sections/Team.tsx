'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Scissors, Crown, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const barbers = [
  {
    id: 0,
    name: 'Neto',
    fullName: 'Neto Silva',
    role: 'Barbeiro',
    roleIcon: Scissors,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    fallbackBg: 'linear-gradient(160deg, #0d1520 0%, #1a2840 60%, #080d14 100%)',
    fallbackAccent: '#6699cc',
    initials: 'NS',
    specialties: ['Degradê', 'Corte Clássico', 'Barba Completa'],
    bio: 'Especialista em degradê e cortes modernos, Neto traz um olhar artístico único para cada cliente.',
    whatsapp: '5511988887777',
    rating: 4.9,
    cuts: '800+',
  },
  {
    id: 1,
    name: 'Ytamar',
    fullName: 'Ytamar Santos',
    role: 'Dono',
    roleIcon: Crown,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    specialties: ['Tesoura', 'Navalha', 'Degradê', 'Barba Artística'],
    fallbackBg: 'linear-gradient(160deg, #1a1000 0%, #2d1e00 60%, #0a0800 100%)',
    fallbackAccent: '#c9a84c',
    initials: 'YS',
    bio: 'Fundador da barbearia com mais de 8 anos de experiência. Ytamar é referência em cortes precisos e técnica apurada.',
    whatsapp: '5511999999999',
    rating: 5.0,
    cuts: '5k+',
  },
  {
    id: 2,
    name: 'Ezequiel',
    fullName: 'Ezequiel Costa',
    role: 'Barbeiro',
    roleIcon: Scissors,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    fallbackBg: 'linear-gradient(160deg, #0d150d 0%, #152015 60%, #080d08 100%)',
    fallbackAccent: '#66cc88',
    initials: 'EC',
    specialties: ['Afro', 'Black', 'Corte Crespo', 'Barba'],
    bio: 'Especialista em cabelos crespos e afro, Ezequiel domina técnicas únicas para realçar a beleza natural.',
    whatsapp: '5511977776666',
    rating: 4.8,
    cuts: '1.2k+',
  },
];

export const Team = () => {
  const [center, setCenter] = useState(1);

  const prev = () => setCenter((c) => (c - 1 + barbers.length) % barbers.length);
  const next = () => setCenter((c) => (c + 1) % barbers.length);

  const leftIndex = (center - 1 + barbers.length) % barbers.length;
  const getPosition = (index: number): 'left' | 'center' | 'right' => {
    if (index === center) return 'center';
    if (index === leftIndex) return 'left';
    return 'right';
  };

  return (
    <section
      id="team"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Badge variant="outline">Nossa Equipe</Badge>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Os Melhores Barbeiros
          </h2>
          <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.7 }}>
            Profissionais apaixonados pelo que fazem, prontos para transformar o seu visual.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '520px',
          }}
        >
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: 0,
              zIndex: 20,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#d1d1d1',
              transition: 'all 0.2s',
            }}
            className="hover:bg-white/15"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '0 64px',
              position: 'relative',
            }}
          >
            {barbers.map((barber, index) => {
              const pos = getPosition(index);
              const isCenter = pos === 'center';
              const RoleIcon = barber.roleIcon;

              return (
                <div
                  key={barber.id}
                  onClick={() => !isCenter && setCenter(index)}
                  style={{
                    flex: isCenter ? '0 0 340px' : '0 0 260px',
                    maxWidth: isCenter ? '340px' : '260px',
                    transition: 'all 0.4s ease',
                    opacity: isCenter ? 1 : 0.45,
                    transform: isCenter ? 'scale(1.05)' : 'scale(0.9)',
                    cursor: isCenter ? 'default' : 'pointer',
                    zIndex: isCenter ? 10 : 1,
                  }}
                >
                  <Card
                    style={{
                      overflow: 'hidden',
                      border: isCenter
                        ? '1px solid rgba(209,209,209,0.25)'
                        : '1px solid rgba(255,255,255,0.06)',
                      background: isCenter ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '3/4',
                        overflow: 'hidden',
                        background: barber.fallbackBg,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `radial-gradient(ellipse 70% 80% at 50% 30%, ${barber.fallbackAccent}30 0%, transparent 65%), repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(255,255,255,0.01) 25px, rgba(255,255,255,0.01) 26px)`,
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '20%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          background: `${barber.fallbackAccent}20`,
                          border: `2px solid ${barber.fallbackAccent}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: '28px',
                          fontWeight: 700,
                          color: barber.fallbackAccent,
                        }}
                      >
                        {barber.initials}
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={barber.image}
                        alt={barber.fullName}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          filter: isCenter ? 'none' : 'grayscale(60%)',
                          zIndex: 2,
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                          zIndex: 3,
                        }}
                      />

                      <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 4 }}>
                        <Badge variant={barber.role === 'Dono' ? 'gold' : 'silver'}>
                          <RoleIcon size={10} style={{ marginRight: '4px' }} />
                          {barber.role}
                        </Badge>
                      </div>

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          left: '16px',
                          right: '16px',
                          zIndex: 4,
                        }}
                      >
                        <div
                          style={{
                            color: 'white',
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: isCenter ? '22px' : '18px',
                            fontWeight: 700,
                          }}
                        >
                          {barber.name}
                        </div>
                        {isCenter && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              marginTop: '4px',
                            }}
                          >
                            <Star size={12} style={{ color: '#c9a84c', fill: '#c9a84c' }} />
                            <span style={{ color: '#aaa', fontSize: '13px' }}>
                              {barber.rating} · {barber.cuts} cortes
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {isCenter && (
                      <div style={{ padding: '20px' }}>
                        <p
                          style={{
                            color: '#888',
                            fontSize: '13px',
                            lineHeight: 1.6,
                            marginBottom: '16px',
                          }}
                        >
                          {barber.bio}
                        </p>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                            marginBottom: '16px',
                          }}
                        >
                          {barber.specialties.map((s) => (
                            <span
                              key={s}
                              style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                padding: '3px 10px',
                                fontSize: '11px',
                                color: '#aaa',
                                letterSpacing: '0.5px',
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Button
                          variant="whatsapp"
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(
                              `https://wa.me/${barber.whatsapp}?text=Olá ${barber.name}! Gostaria de agendar um horário.`,
                              '_blank'
                            )
                          }
                        >
                          <MessageCircle size={15} />
                          Agendar com {barber.name}
                        </Button>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: 0,
              zIndex: 20,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#d1d1d1',
              transition: 'all 0.2s',
            }}
            className="hover:bg-white/15"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};
