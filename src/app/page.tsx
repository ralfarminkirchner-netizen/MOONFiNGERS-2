'use client';
import { cosmic } from '@/lib/cosmic';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-r from-amber-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
          🌌 MOONFiNGERS 2
        </h1>
        <p className="mt-4 text-xl text-zinc-400">Celestial Codex • Block 4 done • Ready for the first real 3D world</p>
        <p className="mt-8 text-emerald-400">Du bestimmst den nächsten Schritt.</p>
      </div>
    </main>
  );
}
