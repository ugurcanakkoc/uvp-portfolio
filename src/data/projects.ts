import { Project } from "@/types/project";

// Supabase Public Storage URL
const SUPABASE_STORAGE_URL = "https://brxxmbmolsxalbysvsss.supabase.co/storage/v1/object/public/panels";

export const projects: Project[] = [
    {
        id: "e210",
        title: "Pano Montajı 4.0",
        description: "Dijital ikiz tabanlı modern pano montajı ve E-Plan entegrasyonu.",
        thumbnail: "/images/cover/e210_cover.png",
        images: [
            "/images/e210/mb13_038_e210_0.png",
            "/images/e210/mb13_038_e210_1.png",
            "/images/e210/mb13_038_e210_2.png",
            "/images/e210/mb13_038_e210_3.png",
            "/images/e210/mb13_038_e210_4.png",
            "/images/e210/mb13_038_e210_5.png",
            "/images/e210/mb13_038_e210_6.png",
            "/images/e210/mb13_038_e210_7.jpg",
            "/images/e210/mb13_038_e210_8.jpg",
            "/images/e210/mb13_038_e210_9.jpg",
            "/images/e210/mb13_038_e210_10.jpg",
            "/images/e210/mb13_038_e210_11.jpg"
        ],
        specs: {
            type: "E-Plan Montajı"
        },
        modelUrl: `${SUPABASE_STORAGE_URL}/e210_draco.glb`
    },
    {
        id: "e500",
        title: "Hassas Kabin İşleme",
        description: "Steinhauer Modcenter ile milimetrik hassasiyette mekanik işleme.",
        thumbnail: "/images/cover/e500_cover.png",
        images: [
            "/images/e500/e500_0.png",
            "/images/e500/e500_1.png",
            "/images/e500/e500_2.png",
            "/images/e500/e500_3.png",
            "/images/e500/e500_4.png",
            "/images/e500/e500_5.png",
            "/images/e500/e500_6.png",
            "/images/e500/e500_7.jpg",
            "/images/e500/e500_8.jpg",
            "/images/e500/e500_9.jpg",
            "/images/e500/e500_10.jpg"
        ],
        specs: {
            type: "Mekanik İşleme"
        },
        modelUrl: `${SUPABASE_STORAGE_URL}/e500_draco.glb`
    },
    {
        id: "j1",
        title: "Otomatik Kablolama",
        description: "Komax Zeta 640 ile tam otomatik kablo hazırlama ve markalama.",
        thumbnail: "/images/cover/j1_cover.png",
        images: [
            "/images/j1/j1_0.png",
            "/images/j1/j1_1.png",
            "/images/j1/j1_2.png",
            "/images/j1/j1_3.png",
            "/images/j1/j1_4.png",
            "/images/j1/j1_5.jpg",
            "/images/j1/j1_6.jpg",
            "/images/j1/j1_7.jpg"
        ],
        specs: {
            type: "Tam Otomatik"
        },
        modelUrl: `${SUPABASE_STORAGE_URL}/j1_draco.glb`
    },
    {
        id: "mcc1",
        title: "Endüstriyel Enerji",
        description: "Yüksek verimli alçak gerilim ve enerji dağıtım sistemleri.",
        thumbnail: "/images/cover/mcc1_cover.png",
        images: [
            "/images/mcc1/mb17_004_mcc1_0.png",
            "/images/mcc1/mb17_004_mcc1_1.png",
            "/images/mcc1/mb17_004_mcc1_2.png",
            "/images/mcc1/mb17_004_mcc1_3.png",
            "/images/mcc1/mb17_004_mcc1_4.png",
            "/images/mcc1/mb17_004_mcc1_5.png"
        ],
        specs: {
            type: "Güç Dağıtımı"
        },
        modelUrl: `${SUPABASE_STORAGE_URL}/mcc1_draco.glb`
    }
];
