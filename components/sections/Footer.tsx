'use client';

import { Scissors, MessageCircle, Heart, Globe, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Horários', href: '#hours' },
  { label: 'Equipe', href: '#team' },
  { label: 'Localização', href: '#location' },
];

const socials = [
  { Icon: Globe, href: 'https://instagram.com/ytamarbarbershop', label: 'Instagram' },
  { Icon: Share2, href: 'https://facebook.com/ytamarbarbershop', label: 'Facebook' },
  { Icon: Globe, href: 'https://youtube.com/@ytamarbarbershop', label: 'YouTube' },
  { Icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
];

export const Footer = () => (
  <footer
    style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 0 32px',
    }}
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'space-between',
          marginBottom: '48px',
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '280px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ border: '2px solid #555', borderRadius: '50%', padding: '8px' }}>
              <Scissors size={20} style={{ color: '#d1d1d1' }} />
            </div>
            <div>
              <div
                style={{
                  color: '#d1d1d1',
                  fontFamily: 'var(--font-playfair), serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '2px',
                }}
              >
                YTAMAR
              </div>
              <div style={{ color: '#555', fontSize: '9px', letterSpacing: '4px', fontWeight: 600 }}>
                BARBERSHOP
              </div>
            </div>
          </div>
          <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.7 }}>
            Arte, estilo e precisão em cada corte. Desde 2016 transformando visuais em São Paulo.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '8px',
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                className="hover:bg-white/10 hover:text-silver-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <div
            style={{
              color: '#d1d1d1',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1px',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Navegação
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ color: '#555', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                className="hover:text-silver-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              color: '#d1d1d1',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1px',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Contato
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: '#555', fontSize: '14px' }}>Rua Exemplo, 123 – SP</div>
            <div style={{ color: '#555', fontSize: '14px' }}>(11) 99999-9999</div>
            <div style={{ color: '#555', fontSize: '14px' }}>contato@ytamarbarbershop.com.br</div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#22c55e',
                fontSize: '13px',
                textDecoration: 'none',
                marginTop: '4px',
                fontWeight: 500,
              }}
            >
              <MessageCircle size={14} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ color: '#444', fontSize: '13px' }}>
          © 2024 Ytamar BarberShop. Todos os direitos reservados.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#333',
            fontSize: '12px',
          }}
        >
          Feito com{' '}
          <Heart size={12} style={{ color: '#ef4444', fill: '#ef4444', margin: '0 2px' }} />{' '}
          em São Paulo
        </div>
      </div>
    </div>
  </footer>
);
