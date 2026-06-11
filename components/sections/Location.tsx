'use client';

import { MapPin, Phone, Globe, MessageCircle, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const socials = [
  {
    icon: Globe,
    label: '@barbearia_ytamarbarbeshop (Instagram)',
    href: 'https://www.instagram.com/barbearia_ytamarbarbeshop/',
  },
];

export const Location = () => (
  <section id="location" className="py-16 md:py-24" style={{ background: '#0a0a0a' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
        <Badge variant="outline">
          <MapPin size={12} style={{ marginRight: '6px' }} />
          Localização
        </Badge>
        <h2
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: 'white',
          }}
        >
          Como Chegar
        </h2>
        <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.7 }}>
          Estamos localizados em Barreiros, São José – SC. Fácil acesso, venha nos visitar!
        </p>
      </div>

      {/* Map + info — stacked on mobile, side-by-side on lg */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Map */}
        <div
          className="w-full lg:flex-1"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            minHeight: '320px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.677463179783!2d-48.607349400000004!3d-27.572518799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749b7de97c5e7%3A0xb2014bab24702eb0!2sR.%20Cap.%20Pedro%20Leite%2C%20220%20-%20Barreiros%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088117-600!5e0!3m2!1spt-BR!2sbr!4v1781179398187!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              minHeight: '320px',
              filter: 'invert(90%) hue-rotate(180deg)',
              display: 'block',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ytamar BarberShop"
          />
        </div>

        {/* Info */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          <Card>
            <CardContent
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {/* Address */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '10px',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} style={{ color: '#d1d1d1' }} />
                </div>
                <div>
                  <div style={{ color: '#d1d1d1', fontWeight: 600, marginBottom: '4px' }}>
                    Endereço
                  </div>
                  <div style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>
                    R. Cap. Pedro Leite, 220 – Barreiros
                    <br />
                    São José – SC, 88117-600
                  </div>
                </div>
              </div>

              <Separator />

              {/* Phone */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '10px',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} style={{ color: '#d1d1d1' }} />
                </div>
                <div>
                  <div style={{ color: '#d1d1d1', fontWeight: 600, marginBottom: '4px' }}>
                    Telefone
                  </div>
                  <div style={{ color: '#888', fontSize: '14px' }}>(48) 98860-5995</div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open('https://wa.me/5548988605995', '_blank')}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open('https://maps.google.com/maps?q=R.+Cap.+Pedro+Leite,+220,+Barreiros,+S%C3%A3o+Jos%C3%A9+-+SC', '_blank')}
                >
                  <Navigation size={15} />
                  Rotas
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Socials */}
          <Card>
            <CardContent style={{ padding: '24px' }}>
              <div
                style={{
                  color: '#d1d1d1',
                  fontWeight: 600,
                  marginBottom: '16px',
                  fontSize: '15px',
                }}
              >
                Redes Sociais
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#888',
                      textDecoration: 'none',
                      padding: '10px',
                      borderRadius: '8px',
                      transition: 'all 0.2s',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    className="hover:bg-white/5 hover:text-silver-200"
                  >
                    <Icon size={18} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '13px' }}>{label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
