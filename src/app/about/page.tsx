import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Tentang Kami
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about-team.png"
                                alt="Tim Waterproofing Kami"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            USA Waterproofing: Mitra Terpercaya Anda
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Dengan pengalaman lebih dari 10 tahun, USA Waterproofing adalah mitra terpercaya Anda untuk semua kebutuhan waterproofing. Kami mengkhususkan diri dalam memberikan solusi berkualitas tinggi dan tahan lama untuk properti residensial dan komersial.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Tim ahli bersertifikat kami menggunakan teknologi terbaru dan bahan premium untuk memastikan properti Anda tetap kering dan aman. Dari kebocoran atap hingga kelembapan basement, kami memiliki keahlian untuk memperbaiki semuanya.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                                <p className="text-gray-600">Tahun Pengalaman</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
                                <p className="text-gray-600">Proyek Selesai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
