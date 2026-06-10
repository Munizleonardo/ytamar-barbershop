import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Hours } from '@/components/sections/Hours';
import { Team } from '@/components/sections/Team';
import { Location } from '@/components/sections/Location';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e8e8e8' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Hours />
        <Team />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
