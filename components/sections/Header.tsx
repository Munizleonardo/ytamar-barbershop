'use client';

import { useEffect, useState } from 'react';
import { Scissors, MessageCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Horários', href: '#hours' },
  { label: 'Equipe', href: '#team' },
  { label: 'Localização', href: '#location' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          className={cn('transition-all duration-500', scrolled ? 'animate-float' : '')}
          onClick={() => scrollTo('#hero')}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '2px solid #888',
              padding: scrolled ? '6px' : '10px',
              transition: 'all 0.5s',
            }}
          >
            <Scissors
              style={{ color: '#d1d1d1', transition: 'all 0.5s' }}
              size={scrolled ? 18 : 26}
            />
          </div>
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                color: '#d1d1d1',
                fontFamily: 'var(--font-playfair), serif',
                fontWeight: 700,
                transition: 'all 0.5s',
                fontSize: scrolled ? '14px' : '18px',
                letterSpacing: '2px',
              }}
            >
              YTAMAR
            </div>
            <div
              style={{
                color: '#888',
                fontSize: scrolled ? '8px' : '11px',
                letterSpacing: '4px',
                fontWeight: 600,
                transition: 'all 0.5s',
                textTransform: 'uppercase',
              }}
            >
              BarberShop
            </div>
          </div>
        </div>

        {/* Nav Desktop */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flex: 1,
            justifyContent: 'center',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-silver-400 hover:text-white transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/5 text-sm font-medium tracking-wide cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA – Desktop */}
        <div style={{ flexShrink: 0 }} className="hidden md:flex">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={() =>
              window.open(
                'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.',
                '_blank'
              )
            }
          >
            <MessageCircle size={16} />
            Agendar
          </Button>
        </div>

        {/* Mobile menu – shadcn Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-silver-300 hover:text-white transition-colors cursor-pointer">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-14 px-6 flex flex-col gap-2">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            {navLinks.map((link) => (
              <SheetTrigger key={link.href} asChild>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-silver-300 hover:text-white text-left px-4 py-3 rounded-md hover:bg-white/5 text-base font-medium cursor-pointer transition-colors"
                >
                  {link.label}
                </button>
              </SheetTrigger>
            ))}
            <div className="mt-4">
              <Button
                variant="whatsapp"
                size="sm"
                className="w-full"
                onClick={() =>
                  window.open(
                    'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.',
                    '_blank'
                  )
                }
              >
                <MessageCircle size={16} />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
