import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Waterproofing Services"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                    Professional Waterproofing Solutions
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-gray-200 drop-shadow-md">
                    Protect your property from water damage with our expert services. Reliable, durable, and affordable.
                </p>
                <div className="mt-10">
                    <a
                        href="https://wa.me/+6281337127132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        <svg
                            className="mr-2 h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-.984-.47-.149-.669.049-.198.198-.744.744-1.141 1.141-.396.396-.793.842-.793 1.735 0 .893.496 1.786 1.488 2.977.992 1.19 2.529 2.579 5.952 3.968 2.378.943 3.276.943 4.466.744 1.19-.198 2.628-1.091 2.975-2.132.348-1.042.348-1.935.248-2.133z" />
                        </svg>
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
