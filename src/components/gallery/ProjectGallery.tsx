"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGalleryProps {
    projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const openLightbox = (project: Project) => {
        setActiveProject(project);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 h-full">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={idx}
                        onClick={() => openLightbox(project)}
                    />
                ))}
            </div>

            {activeProject && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={activeProject.images.map((src) => ({ src }))}
                    plugins={[Zoom, Captions, Thumbnails]}
                    styles={{
                        container: { backgroundColor: "rgba(0, 0, 0, .95)" },
                    }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        scrollToZoom: true,
                    }}
                    captions={{ showToggle: true, descriptionTextAlign: 'center' }}
                />
            )}
        </>
    );
}
