"use client";

import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { projects } from "@/data/projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen lg:h-screen w-screen smoke-bg flex flex-col pt-[120px] md:pt-[160px] overflow-x-hidden">
      {/* Global Spotlight */}
      <div className="fixed inset-0 pointer-events-none spotlight-global z-0" />

      {/* Title / Info Bar */}
      <div className="flex-grow flex flex-col px-6 md:px-12 z-10 max-w-screen-2xl mx-auto w-full">
        <div className="flex justify-between items-end py-8 md:py-16">
          <div className="flex flex-col gap-2 md:gap-4">
            <span className="luxury-heading text-[8px] md:text-[10px]">SCHALTSCHRANKBAU LÖSUNGEN</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              BEISPIELE
            </h1>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3 text-right">
            <span className="text-[12px] text-neutral-700 tracking-[0.8em] font-black italic uppercase">
              HÖCHSTE PRÄZISION
            </span>
            <div className="h-[2px] w-48 bg-neutral-800" />
          </div>
        </div>

        {/* The 4-card Grid */}
        <div className="flex-grow mb-12 md:mb-16 flex flex-col">
          <ProjectGallery projects={projects.slice(0, 4)} />
        </div>

        {/* Status Area / Footer Integrated */}
        <div className="pb-8 md:pb-12 flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4 sm:gap-0">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
            <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] text-neutral-500 uppercase">
              UVP SCHALTSCHRANKBAU GMBH // SYSTEM AKTIV
            </span>
          </div>
          <div className="text-[8px] md:text-[10px] text-neutral-700 tracking-[0.3em] md:tracking-[0.5em] font-medium uppercase">
            &copy; {new Date().getFullYear()} ALLE RECHTE VORBEHALTEN
          </div>
        </div>
      </div>
    </div>
  );
}
