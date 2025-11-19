import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">WaterProof Pro</h3>
                        <p className="text-gray-400">
                            Solusi waterproofing profesional untuk rumah dan bisnis Anda. Kualitas yang dapat Anda percaya.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Layanan
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                    Proyek
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-400">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="https://wa.me/+6281337127132" className="hover:text-white transition-colors">
                                    +62 813 3712 7132
                                </a>
                            </p>
                            <p className="flex items-center text-gray-400">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Jakarta, Indonesia
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} WaterProof Pro. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}
