import Image from 'next/image';

export default function ProjectsPage() {
    const projects = [
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
    ];

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
