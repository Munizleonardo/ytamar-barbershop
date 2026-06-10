'use client';

import { MapPin, Phone, Globe, Share2, MessageCircle, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const socials = [
  {
    icon: Globe,
    label: '@ytamarbarbershop (Instagram)',
    href: 'https://instagram.com/ytamarbarbershop',
  },
  {
    icon: Share2,
    label: 'Ytamar BarberShop (Facebook)',
    href: 'https://facebook.com/ytamarbarbershop',
  },
  {
    icon: Globe,
    label: 'Ytamar BarberShop (YouTube)',
    href: 'https://youtube.com/@ytamarbarbershop',
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
          Estamos localizados em um endereço de fácil acesso, no coração de São Paulo.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3!2d-46.633!3d-23.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzUyLjgiUyA0NsKwMzgn0!5e0!3m2!1spt-BR!2sbr!4v1"
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
                    Rua Exemplo, 123 – Bairro
                    <br />
                    São Paulo – SP, 01310-000
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
                  <div style={{ color: '#888', fontSize: '14px' }}>(11) 99999-9999</div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
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
