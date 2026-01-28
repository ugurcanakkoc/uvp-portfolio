"use client";

import { useEffect, useState } from "react";

export function VersionBadge() {
    const [mounted, setMounted] = useState(false);

    // Versiyon ve Build Zamanı (Otomatik güncellenebilir veya manuel girilebilir)
    const VERSION = "v1.2.4";
    const BUILD_ID = "9eb382b"; // Son commit ID
    const MODE = process.env.NODE_ENV === "development" ? "DEV" : "PROD";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed bottom-2 right-2 z-[9999] pointer-events-none select-none">
            <div className="flex flex-col items-end gap-0.5 opacity-20 hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1.5 items-center bg-black/40 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-white/50">
                    <span className={`w-1 h-1 rounded-full ${MODE === 'DEV' ? 'bg-yellow-500 shadow-[0_0_5px_yellow]' : 'bg-green-500 shadow-[0_0_5px_green]'}`} />
                    <span>{MODE}</span>
                    <span className="w-px h-2 bg-white/10" />
                    <span>{VERSION}</span>
                    <span className="w-px h-2 bg-white/10" />
                    <span>{BUILD_ID}</span>
                </div>
                <div className="mr-1 text-[8px] text-white/20 font-light italic">
                    {new Date().toLocaleDateString('tr-TR')} {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
}
