'use client';

import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const schedule = [
  { day: 'Segunda', short: 'SEG', hours: '09:00 – 20:00', open: true },
  { day: 'Terça', short: 'TER', hours: '09:00 – 20:00', open: true },
  { day: 'Quarta', short: 'QUA', hours: '09:00 – 20:00', open: true },
  { day: 'Quinta', short: 'QUI', hours: '09:00 – 20:00', open: true },
  { day: 'Sexta', short: 'SEX', hours: '09:00 – 20:00', open: true },
  { day: 'Sábado', short: 'SAB', hours: '08:00 – 13:00', open: true },
  { day: 'Domingo', short: 'DOM', hours: 'Fechado', open: false },
];

const dayMap: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };

export const Hours = () => {
  const todayScheduleIndex = dayMap[new Date().getDay()];
  const today = schedule[todayScheduleIndex];

  return (
    <section id="hours" className="py-16 md:py-24" style={{ background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
          <Badge variant="outline">
            <Clock size={12} style={{ marginRight: '6px' }} />
            Funcionamento
          </Badge>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Horários de Atendimento
          </h2>
          <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.7 }}>
            Estamos abertos para te atender durante a semana. Confira os horários abaixo e agende o
            seu horário.
          </p>

          {/* Today highlight */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: today.open ? 'rgba(255,255,255,0.05)' : 'rgba(239,68,68,0.1)',
              border: `1px solid ${today.open ? 'rgba(255,255,255,0.1)' : 'rgba(239,68,68,0.3)'}`,
              borderRadius: '12px',
              padding: '12px 20px',
              marginTop: '8px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: today.open ? '#22c55e' : '#ef4444',
                animation: today.open ? 'pulse 2s infinite' : 'none',
                flexShrink: 0,
              }}
            />
            <span style={{ color: '#888', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Hoje ({today.day}):
            </span>
            <span
              style={{
                color: today.open ? '#d1d1d1' : '#ef4444',
                fontWeight: 600,
                fontSize: '14px',
                whiteSpace: 'nowrap',
              }}
            >
              {today.hours}
            </span>
          </div>
        </div>

        {/* Schedule grid — 2 cols mobile → 4 cols sm → 7 cols lg */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {schedule.map((item, i) => {
            const isToday = i === todayScheduleIndex;
            const isClosed = !item.open;

            return (
              <Card
                key={item.day}
                style={{
                  border: isToday
                    ? '1px solid rgba(209,209,209,0.5)'
                    : isClosed
                      ? '1px solid rgba(239,68,68,0.3)'
                      : '1px solid rgba(255,255,255,0.06)',
                  background: isToday
                    ? 'rgba(209,209,209,0.08)'
                    : isClosed
                      ? 'rgba(239,68,68,0.06)'
                      : 'rgba(255,255,255,0.02)',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className={cn(
                  'text-center py-4 px-2 md:py-5 md:px-3',
                  !isClosed && !isToday && 'hover:border-white/20'
                )}
              >
                {isToday && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#22c55e',
                    }}
                  />
                )}
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: isClosed ? '#ef4444' : isToday ? '#d1d1d1' : '#888',
                    marginBottom: '6px',
                  }}
                >
                  {item.short}
                </div>
                <div
                  className="hidden sm:block"
                  style={{
                    fontSize: '12px',
                    color: isClosed ? '#666' : isToday ? '#aaa' : '#555',
                    fontWeight: 500,
                    marginBottom: '4px',
                  }}
                >
                  {item.day}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: isClosed ? '#ef4444' : isToday ? '#d1d1d1' : '#666',
                    fontWeight: isClosed ? 600 : 400,
                    marginTop: '6px',
                    paddingTop: '6px',
                    borderTop: `1px solid ${isClosed ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)'}`,
                    lineHeight: 1.3,
                  }}
                >
                  {isClosed ? 'Fechado' : item.hours}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
