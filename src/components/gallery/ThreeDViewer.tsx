"use client";

import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { X, Loader2, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface ThreeDViewerProps {
    src: string;
    onClose: () => void;
    title?: string;
}

export function ThreeDViewer({ src, onClose, title }: ThreeDViewerProps) {
    const [loading, setLoading] = useState(true);
    const viewerRef = useRef<any>(null);

    const moveCamera = (dir: 'up' | 'down' | 'left' | 'right' | 'reset') => {
        if (!viewerRef.current) return;

        const orbit = viewerRef.current.getCameraOrbit();
        let theta = orbit.theta;
        let phi = orbit.phi;
        let radius = orbit.radius;

        const step = 0.3;

        if (dir === 'reset') {
            viewerRef.current.cameraOrbit = "0deg 75deg 105%";
            return;
        }

        if (dir === 'left') theta -= step;
        if (dir === 'right') theta += step;
        if (dir === 'up') phi -= step;
        if (dir === 'down') phi += step;

        phi = Math.max(0.01, Math.min(Math.PI - 0.01, phi));
        viewerRef.current.cameraOrbit = `${theta}rad ${phi}rad ${radius}m`;
    };

    useEffect(() => {
        const viewer = viewerRef.current;
        if (!viewer) return;

        const handleLoad = () => {
            setLoading(false);
        };

        const handleError = (error: any) => {
            console.error("Model viewer error:", error);
            setLoading(false);
        };

        viewer.addEventListener('load', handleLoad);
        viewer.addEventListener('error', handleError);

        return () => {
            viewer.removeEventListener('load', handleLoad);
            viewer.removeEventListener('error', handleError);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl h-[80vh] bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
                    type="module"
                    crossOrigin="anonymous"
                />

                <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
                    <div className="flex flex-col">
                        <h3 className="text-white font-medium leading-none">{title || "3D View"}</h3>
                        <span className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Interaktives 3D-Modell</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 relative">
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center text-white gap-3 z-10 bg-[#111]">
                            <Loader2 className="animate-spin" size={32} />
                            <span className="text-lg font-medium">Laden...</span>
                        </div>
                    )}

                    <div className="absolute bottom-4 left-4 z-20 flex flex-col items-center gap-1 bg-black/40 p-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                        <button
                            onClick={() => moveCamera('up')}
                            className="p-2 hover:bg-white/20 rounded-lg text-white transition-colors"
                        >
                            <ChevronUp size={20} />
                        </button>
                        <div className="flex gap-1">
                            <button
                                onClick={() => moveCamera('left')}
                                className="p-2 hover:bg-white/20 rounded-lg text-white transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => moveCamera('reset')}
                                className="p-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg text-white transition-colors"
                            >
                                <RotateCcw size={16} />
                            </button>
                            <button
                                onClick={() => moveCamera('right')}
                                className="p-2 hover:bg-white/20 rounded-lg text-white transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <button
                            onClick={() => moveCamera('down')}
                            className="p-2 hover:bg-white/20 rounded-lg text-white transition-colors"
                        >
                            <ChevronDown size={20} />
                        </button>
                    </div>

                    {(() => {
                        const ModelViewer = 'model-viewer' as any;
                        return (
                            <ModelViewer
                                ref={viewerRef}
                                src={src}
                                alt={title || "3D Model"}
                                camera-controls
                                interaction-prompt="none"
                                shadow-intensity="1"
                                environment-image="neutral"
                                exposure="1"
                                loading="eager"
                                camera-target="auto auto auto"
                                bounds="tight"
                                min-polar-angle="0deg"
                                max-polar-angle="180deg"
                                interpolation-decay="200"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "transparent",
                                    "--poster-color": "transparent",
                                }}
                            >
                                <div slot="progress-bar" className="hidden"></div>
                            </ModelViewer>
                        );
                    })()}
                </div>

                <div className="p-4 text-center text-white/50 text-[11px] bg-black/50 border-t border-white/10">
                    Maus: Drehen • Scrollen: Zoom • Shift + Maus: Bewegen
                </div>
            </motion.div>
        </motion.div>
    );
}
