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
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMobileNav = (href: string) => {
    setSheetOpen(false);
    setTimeout(() => scrollTo(href), 200);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2'
          : 'bg-transparent py-3 md:py-4'
      )}
    >
      <div className="flex items-center justify-between gap-3 mx-auto px-4 md:px-6 max-w-[1200px]">

        {/* ── Logo ── */}
        <button
          className="flex items-center gap-2 cursor-pointer flex-shrink-0 bg-transparent border-none"
          onClick={() => scrollTo('#hero')}
        >
          {/* Icon circle – sempre compacto no mobile */}
          <div
            className={cn(
              'flex items-center justify-center rounded-full border-2 border-[#888] transition-all duration-500',
              'p-[6px] md:p-[8px]',
              scrolled && 'md:p-[6px]'
            )}
          >
            <Scissors
              className="text-silver-200 transition-all duration-500"
              size={18}
            />
          </div>
          {/* Text */}
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                color: '#d1d1d1',
                fontFamily: 'var(--font-playfair), serif',
                fontWeight: 700,
                letterSpacing: '2px',
                fontSize: 'clamp(13px, 3.5vw, 18px)',
                transition: 'all 0.4s',
              }}
            >
              YTAMAR
            </div>
            <div
              style={{
                color: '#888',
                fontSize: 'clamp(7px, 1.8vw, 10px)',
                letterSpacing: '3px',
                fontWeight: 600,
                textTransform: 'uppercase',
                transition: 'all 0.4s',
              }}
            >
              BarberShop
            </div>
          </div>
        </button>

        {/* ── Nav Desktop ── */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
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

        {/* ── WhatsApp CTA Desktop ── */}
        <div className="hidden md:flex flex-shrink-0">
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

        {/* ── Mobile Sheet ── */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden flex items-center justify-center w-9 h-9 text-silver-300 hover:text-white transition-colors cursor-pointer rounded-md hover:bg-white/5">
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] sm:w-72 pt-16 px-5">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleMobileNav(link.href)}
                  className="w-full text-left text-silver-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/5 text-base font-medium cursor-pointer transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-white/10">
              <Button
                variant="whatsapp"
                size="sm"
                className="w-full"
                onClick={() => {
                  setSheetOpen(false);
                  window.open(
                    'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.',
                    '_blank'
                  );
                }}
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
