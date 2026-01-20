"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { useRef, useState } from "react";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative w-full aspect-square group cursor-pointer overflow-hidden border border-white/5 bg-[#0a0a0a] rounded-sm transition-all duration-500 hover:border-white/20"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            ref={cardRef}
        >
            <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain object-center transition-all duration-1000 opacity-60 grayscale scale-100 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 p-2 md:p-3 lg:p-4"
                sizes="(max-width: 1024px) 100vw, 25vw"
            />

            {/* Glass Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-1" />

            {/* Dynamic Lighting Overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.12), transparent 60%)`
                }}
            />

            {/* Subtle Grid Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-20">
                <h3 className="text-sm md:text-base lg:text-lg font-black tracking-[0.2em] uppercase text-white transform transition-all duration-500 group-hover:tracking-[0.3em]">
                    {project.title}
                </h3>
                <div className="h-[1px] w-0 bg-white/40 transition-all duration-1000 group-hover:w-full mt-3" />
            </div>
        </motion.div>
    );
}
