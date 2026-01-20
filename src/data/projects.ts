import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "e210",
        title: "Schaltschrank 1",
        description: "Industrielle Projektlösung",
        thumbnail: "/images/kapak/e210_kapak.png",
        images: [
            "/images/kapak/e210_kapak.png",
            "/images/E210/MB13_038_E210_1.png",
            "/images/E210/MB13_038_E210_2.png",
            "/images/E210/MB13_038_E210_3.png",
            "/images/E210/MB13_038_E210_4.png",
            "/images/E210/MB13_038_E210_5.png",
            "/images/E210/MB13_038_E210_6.png"
        ],
        specs: {
            type: "Steuerungsbau"
        }
    },
    {
        id: "e500",
        title: "Schaltschrank 2",
        description: "Energieverteilungssystem",
        thumbnail: "/images/kapak/e500_kapak.png",
        images: [
            "/images/kapak/e500_kapak.png",
            "/images/E500/E500_1.png",
            "/images/E500/e500_2.png",
            "/images/E500/e500_3.png",
            "/images/E500/e500_4.png",
            "/images/E500/e500_5.png",
            "/images/E500/e500_6.png"
        ],
        specs: {
            type: "Energieverteilung"
        }
    },
    {
        id: "j1",
        title: "Schaltschrank 3",
        description: "Präzisionsmontage",
        thumbnail: "/images/kapak/j1_kapak.png",
        images: [
            "/images/kapak/j1_kapak.png",
            "/images/J1/j1_1.png",
            "/images/J1/j1_2.png",
            "/images/J1/j1_3.png",
            "/images/J1/j1_4.png"
        ],
        specs: {
            type: "Anschlusslösung"
        }
    },
    {
        id: "mcc1",
        title: "Schaltschrank 4",
        description: "Zentrale Motorsteuerung",
        thumbnail: "/images/kapak/mcc1_kapak.png",
        images: [
            "/images/kapak/mcc1_kapak.png",
            "/images/MCC1/MB17_004_MCC1_1.png",
            "/images/MCC1/MB17_004_MCC1_2.png",
            "/images/MCC1/MB17_004_MCC1_3.png",
            "/images/MCC1/MB17_004_MCC1_4.png",
            "/images/MCC1/MB17_004_MCC1_5.png",
            "/images/MCC1/MB17_004_MCC1_6.png"
        ],
        specs: {
            type: "MCC"
        }
    }
];
