import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant leading-tight mb-8">
                        <span className="text-black">Amplifying Voices. Empowering</span>
                        <br />
                        <span className="text-[#bf5925] italic">Immigrant Women.</span>
                        <span className="text-black"> Changing Lives.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Her Immigrant Tales is a global social impact movement dedicated to sharing stories, fostering community,
                        and creating opportunities for immigrant women.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-[#bf5925] text-[#bf5925] hover:bg-[#bf5925] hover:text-white px-8 py-3 rounded-full bg-transparent"
                        >
                            Collaborate
                        </Button>
                        <Button size="lg" className="bg-[#bf5925] hover:bg-[#a04920] text-white px-8 py-3 rounded-full">
                            Donate
                        </Button>
                    </div>

                    {/* Hero Images with Dynamic Layout */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Background Orange Shapes */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -left-20 top-10 w-80 h-60 bg-[#bf5925] rounded-3xl transform -rotate-12 opacity-80"></div>
                            <div className="absolute -right-16 top-20 w-72 h-56 bg-[#d4661f] rounded-3xl transform rotate-12 opacity-70"></div>
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-40 bg-[#e8742a] rounded-3xl transform rotate-6 opacity-60"></div>
                        </div>

                        {/* Images Container */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            {/* Left Image - Brave */}
                            <div className="relative transform md:-rotate-6 md:translate-y-8">
                                <div className="relative">
                                    <img
                                        src="/woman-traditional-dress.jpg"
                                        alt="Woman in traditional colorful dress"
                                        className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                                    />
                                    <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                        Brave
                                    </div>
                                </div>
                            </div>

                            {/* Center Image - Main */}
                            <div className="relative md:scale-110 z-20">
                                <img
                                    src="/two-women-yellow-smiling.jpg"
                                    alt="Two women in yellow clothing smiling together"
                                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                                />
                            </div>

                            {/* Right Image - Beautiful */}
                            <div className="relative transform md:rotate-6 md:translate-y-12">
                                <div className="relative">
                                    <img
                                        src="/woman-red-top-portrait.jpg"
                                        alt="Woman in red top"
                                        className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                                    />
                                    <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                        Beautiful
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="px-4 py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant leading-tight text-black">
                                Who We Are And What We Stand For
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                HIT is more than a platform, it's a movement where immigrant women share their stories, connect, and are
                                celebrated for their courage and impact.
                            </p>
                        </div>
                    </div>

                    {/* Portrait Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Image - Green Background */}
                        <div className="relative">
                            <div className="bg-green-600 rounded-3xl p-8 h-80 flex items-end">
                                <img
                                    src="/woman-beige-arms-crossed.jpg"
                                    alt="Woman in beige top with arms crossed"
                                    className="w-full h-full object-cover object-center rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Center Image - Orange Background */}
                        <div className="relative">
                            <div className="bg-[#bf5925] rounded-3xl p-8 h-80 flex items-end">
                                <img
                                    src="/black-woman-smiling-black-top.jpg"
                                    alt="Black woman smiling in black top"
                                    className="w-full h-full object-cover object-center rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Image - Blue Background with Rotation */}
                        <div className="relative">
                            <div className="bg-blue-600 rounded-3xl p-8 h-80 flex items-end transform rotate-3">
                                <img
                                    src="/asian-woman-blue-top.jpg"
                                    alt="Asian woman in blue top"
                                    className="w-full h-full object-cover object-center rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, and Goals Section */}
            <section className="px-4 py-16 md:py-20 bg-[#f8f6f3]">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Section Header */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant leading-tight text-black mb-8">
                        Our Mission, Vision, and Goals
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
                        At HIT, our mission drives us, our vision inspires us, and our goals keep us focused on empowering immigrant
                        women worldwide.
                    </p>

                    {/* Cards Container */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Vision Card - Orange */}
                        <div className="absolute left-0 top-0 transform -rotate-6 z-10">
                            <div className="bg-[#bf5925] text-white p-8 rounded-3xl w-80 h-96 shadow-2xl">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-[#bf5925]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    A world where every immigrant woman feels seen, heard, and valued and where her story becomes a source
                                    of healing, pride, and power as we envision Her Immigrant Tales - the global voice of immigrant women
                                    - a platform where stories heal, creations inspire, and opportunities grow.
                                </p>
                            </div>
                        </div>

                        {/* Mission Card - White */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 rotate-3 z-20 top-8">
                            <div className="bg-white border-2 border-[#bf5925] p-8 rounded-3xl w-80 h-96 shadow-2xl">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-[#bf5925] rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-serif mb-4 text-[#bf5925]">Our Mission</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    To amplify the voices and lived experiences of immigrant women through storytelling, healing spaces,
                                    and culturally inspired creations - building community, fostering belonging, and empowering women in a
                                    world that too often overlooks them.
                                </p>
                            </div>
                        </div>

                        {/* Goal Card - White */}
                        <div className="absolute right-0 top-0 transform rotate-6 z-10">
                            <div className="bg-white border-2 border-[#bf5925] p-8 rounded-3xl w-80 h-96 shadow-2xl">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-[#bf5925] rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-serif mb-4 text-[#bf5925]">Our Goal</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    To collaborate for impact by partnering with organizations, creators, and institutions to amplify
                                    immigrant voices through meaningful projects.
                                </p>
                            </div>
                        </div>

                        {/* Spacer for overlapping cards */}
                        <div className="h-96 md:h-80"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
