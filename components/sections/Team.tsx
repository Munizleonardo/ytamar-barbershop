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
    specialties: ['Degradê', 'Clássico', 'Barba'],
    bio: 'Especialista em degradê e cortes modernos, trazendo um olhar artístico único.',
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
    specialties: ['Tesoura', 'Navalha', 'Degradê'],
    fallbackBg: 'linear-gradient(160deg, #1a1000 0%, #2d1e00 60%, #0a0800 100%)',
    fallbackAccent: '#c9a84c',
    initials: 'YS',
    bio: 'Fundador com mais de 8 anos de experiência, referência em cortes precisos.',
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
    specialties: ['Afro', 'Black', 'Crespo'],
    bio: 'Especialista em cabelos crespos e afro, dominando técnicas únicas.',
    whatsapp: '5511977776666',
    rating: 4.8,
    cuts: '1.2k+',
  },
];

/* ── Card compacto para mobile ── */
function MobileBarberCard({ barber, onPrev, onNext }: {
  barber: (typeof barbers)[number];
  onPrev: () => void;
  onNext: () => void;
}) {
  const RoleIcon = barber.roleIcon;
  return (
    <Card
      style={{
        overflow: 'hidden',
        border: '1px solid rgba(209,209,209,0.25)',
        background: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Foto quadrada com setas sobrepostas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          overflow: 'hidden',
          background: barber.fallbackBg,
        }}
      >
        {/* Fallback pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse 70% 80% at 50% 30%, ${barber.fallbackAccent}30 0%, transparent 65%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: `${barber.fallbackAccent}20`,
            border: `2px solid ${barber.fallbackAccent}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '22px',
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
            zIndex: 2,
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
            zIndex: 3,
          }}
        />

        {/* Role badge */}
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 5 }}>
          <Badge variant={barber.role === 'Dono' ? 'gold' : 'silver'}>
            <RoleIcon size={9} style={{ marginRight: '3px' }} />
            {barber.role}
          </Badge>
        </div>

        {/* Name + rating overlay */}
        <div style={{ position: 'absolute', bottom: '12px', left: '14px', right: '14px', zIndex: 5 }}>
          <div style={{ color: 'white', fontFamily: 'var(--font-playfair), serif', fontSize: '18px', fontWeight: 700, lineHeight: 1.1 }}>
            {barber.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
            <Star size={11} style={{ color: '#c9a84c', fill: '#c9a84c' }} />
            <span style={{ color: '#ccc', fontSize: '12px' }}>{barber.rating} · {barber.cuts} cortes</span>
          </div>
        </div>

        {/* ── Setas sobre a foto ── */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90 hover:bg-white/25"
          style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)', zIndex: 6 }}
        >
          <ChevronLeft size={18} className="text-silver-200" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90 hover:bg-white/25"
          style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)', zIndex: 6 }}
        >
          <ChevronRight size={18} className="text-silver-200" />
        </button>
      </div>

      {/* ── Info compacta ── */}
      <div style={{ padding: '14px' }}>
        {/* Bio – máx 2 linhas */}
        <p
          style={{
            color: '#999',
            fontSize: '12px',
            lineHeight: 1.5,
            marginBottom: '10px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {barber.bio}
        </p>

        {/* Especialidades – inline, máx 3 tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' }}>
          {barber.specialties.slice(0, 3).map((s) => (
            <span
              key={s}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '2px 8px',
                fontSize: '10px',
                color: '#aaa',
                letterSpacing: '0.3px',
                whiteSpace: 'nowrap',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <Button
          variant="whatsapp"
          size="sm"
          className="w-full text-sm py-2"
          onClick={() =>
            window.open(
              `https://wa.me/${barber.whatsapp}?text=Olá ${barber.name}! Gostaria de agendar um horário.`,
              '_blank'
            )
          }
        >
          <MessageCircle size={14} />
          Agendar com {barber.name}
        </Button>
      </div>
    </Card>
  );
}

/* ── Card completo para desktop ── */
function DesktopBarberCard({
  barber,
  isCenter,
}: {
  barber: (typeof barbers)[number];
  isCenter: boolean;
}) {
  const RoleIcon = barber.roleIcon;
  return (
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
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            zIndex: 3,
          }}
        />
        <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 4 }}>
          <Badge variant={barber.role === 'Dono' ? 'gold' : 'silver'}>
            <RoleIcon size={10} style={{ marginRight: '4px' }} />
            {barber.role}
          </Badge>
        </div>
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 4 }}>
          <div style={{ color: 'white', fontFamily: 'var(--font-playfair), serif', fontSize: isCenter ? '22px' : '18px', fontWeight: 700 }}>
            {barber.name}
          </div>
          {isCenter && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <Star size={12} style={{ color: '#c9a84c', fill: '#c9a84c' }} />
              <span style={{ color: '#aaa', fontSize: '13px' }}>{barber.rating} · {barber.cuts} cortes</span>
            </div>
          )}
        </div>
      </div>

      {isCenter && (
        <div style={{ padding: '20px' }}>
          <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
            {barber.bio}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
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
  );
}

/* ── Seção principal ── */
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
      className="py-16 md:py-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header da seção */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
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

        {/* ─── MOBILE: card único compacto com setas ─── */}
        <div className="md:hidden">
          <MobileBarberCard
            barber={barbers[center]}
            onPrev={prev}
            onNext={next}
          />

          {/* Dots indicadores */}
          <div className="flex gap-2 justify-center mt-4">
            {barbers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCenter(i)}
                className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
                style={{
                  width: center === i ? '24px' : '8px',
                  background: center === i ? '#d1d1d1' : '#444',
                }}
              />
            ))}
          </div>
        </div>

        {/* ─── DESKTOP: carrossel 3 cards ─── */}
        <div className="hidden md:block">
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '520px',
            }}
          >
            {/* Seta esquerda */}
            <button
              onClick={prev}
              className="absolute left-0 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-silver-200 hover:bg-white/15 transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Cards */}
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
                    <DesktopBarberCard barber={barber} isCenter={isCenter} />
                  </div>
                );
              })}
            </div>

            {/* Seta direita */}
            <button
              onClick={next}
              className="absolute right-0 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-silver-200 hover:bg-white/15 transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
