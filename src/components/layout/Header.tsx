"use client";

import { useTranslation } from "@/lib/i18n";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const { t, lang, setLang } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleLang = () => {
        setLang(lang === 'tr' ? 'de' : 'tr');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex justify-between items-center bg-black/40 backdrop-blur-2xl border border-white/5 p-6 rounded-sm shadow-2xl relative overflow-hidden group">

                    {/* Logo Section - Dual Brand */}
                    <div className="flex items-center gap-8 relative z-10">
                        {/* UVP Logo - Enlarged */}
                        <div className="relative group/logo w-48 md:w-64 h-12 md:h-16">
                            <Image
                                src="/logo.png"
                                alt="UVP Schaltschrankbau"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-12 relative z-10">
                        {/* Navigation / Text */}
                        <span className="text-xs font-black tracking-widest text-white uppercase">
                            {t.common.examples || "PROJE PORTFÖYÜ"}
                        </span>

                        {/* Controls */}
                        <div className="flex items-center gap-6 pl-8 border-l border-white/10">
                            {/* Language Switcher */}
                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-3 group/lang"
                            >
                                <span className={`text-xs font-black tracking-widest ${lang === 'tr' ? 'text-white' : 'text-neutral-500'} group-hover/lang:text-white transition-colors`}>TR</span>
                                <div className="w-8 h-4 rounded-full border border-white/20 relative p-0.5">
                                    <div className={`w-2.5 h-2.5 bg-blue-500 rounded-full transition-all duration-300 ${lang === 'de' ? 'translate-x-4' : 'translate-x-0'}`} />
                                </div>
                                <span className={`text-xs font-black tracking-widest ${lang === 'de' ? 'text-white' : 'text-neutral-500'} group-hover/lang:text-white transition-colors`}>DE</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-10 p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-6 right-6 mt-2 bg-black border border-white/10 p-6 rounded-sm flex flex-col gap-6 lg:hidden shadow-2xl z-50"
                    >
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-between w-full p-4 bg-white/5 rounded-sm"
                        >
                            <span className="text-sm font-bold text-neutral-400">LANGUAGE</span>
                            <div className="flex items-center gap-3">
                                <span className={lang === 'tr' ? 'text-white' : 'text-neutral-600'}>TR</span>
                                <span className="text-neutral-600">/</span>
                                <span className={lang === 'de' ? 'text-white' : 'text-neutral-600'}>DE</span>
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
