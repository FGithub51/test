"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Project {
    id?: number;
    title: string;
    description: string;
    image: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([
        {
            title: "Waterproofing Atap Datar",
            description: "Proyek waterproofing atap gedung perkantoran menggunakan membran bakar.",
            image: "/images/project-roof.png",
        },
        {
            title: "Waterproofing Dinding Basement",
            description: "Perlindungan dinding basement dari rembesan air tanah.",
            image: "/images/project-basement.png",
        },
        {
            title: "Waterproofing Kolam Renang",
            description: "Aplikasi lapisan kedap air pada kolam renang sebelum pemasangan keramik.",
            image: "/images/project-pool.png",
        },
        {
            title: "Waterproofing Balkon Apartemen",
            description: "Pelapisan anti bocor pada area balkon untuk mencegah rembesan ke lantai bawah.",
            image: "/images/project_balcony_1763584963361.png",
        },
        {
            title: "Waterproofing Kamar Mandi",
            description: "Pengerjaan waterproofing area basah kamar mandi sebelum pemasangan keramik.",
            image: "/images/project_toilet_1763584972257.png",
        },
        {
            title: "Waterproofing Tangki Air Beton",
            description: "Pelapisan tangki air beton industrial untuk mencegah kebocoran dan kontaminasi.",
            image: "/images/project_tank_1763584980831.png",
        },
        {
            title: "Injeksi Beton Retak",
            description: "Perbaikan struktur beton yang retak dengan metode injeksi untuk menghentikan kebocoran aktif.",
            image: "/images/project_injection_1763584987681.png",
        },
        {
            title: "Protective Coating Gedung",
            description: "Aplikasi lapisan pelindung pada eksterior gedung untuk ketahanan terhadap cuaca ekstrem.",
            image: "/images/project_coating_1763584995338.png",
        },
    ]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('id', { ascending: false });

                if (data) {
                    // Map Supabase data to match Project interface
                    const dbProjects = data.map(p => ({
                        id: p.id,
                        title: p.title,
                        description: p.description,
                        image: p.image_url // Map image_url to image
                    }));
                    setProjects(prev => [...dbProjects, ...prev]);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Proyek Kami
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Lihat beberapa hasil kerja terbaik kami dalam melindungi properti klien.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
