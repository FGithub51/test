import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about-team.png"
                                alt="Our Waterproofing Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                            About WaterProof Pro
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With over 10 years of experience, WaterProof Pro is your trusted partner for all waterproofing needs. We specialize in delivering high-quality, long-lasting solutions for residential and commercial properties.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team of certified experts uses the latest technology and premium materials to ensure your property stays dry and secure. From roof leaks to basement dampness, we have the expertise to fix it all.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
