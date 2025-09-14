'use client'

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Community() {
    const [translateX, setTranslateX] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateX(prev => prev - 0.8) // Adjustable speed that works well
        }, 16) // 60fps smooth animation

        return () => clearInterval(interval)
    }, [])

    const images = [
        "/1.png?w=400&h=600&fit=crop",
        "/2.png?w=400&h=600&fit=crop",
        "/3.png?w=400&h=600&fit=crop",
        "/4.png?w=400&h=600&fit=crop",
        "/5.png?w=400&h=600&fit=crop"
    ]

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Header */}
            <Header />

            {/* Background Frame Image with Blur Effects */}
            <div className="absolute top-0 left-0 w-full h-[150vh] z-0 overflow-hidden">
                <Image
                    src="/gridlines.png"
                    alt="Background frame"
                    fill
                    className="object-cover"
                />
                {/* Blur overlay for entire background */}
                <div className="absolute inset-0 bg-gradient-radial from-white/60 via-white/30 to-transparent"></div>
                {/* Circular blur behind header/text area */}
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] bg-white/50 rounded-full blur-[120px]"></div>
                {/* Bottom circular blur */}
                <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[1400px] h-[400px] bg-white/60 rounded-full blur-[100px]"></div>
            </div>


            {/* Main Content */}
            <main className="relative px-6">
                <div className="relative max-w-[1536px] mx-auto">
                    <div className="absolute w-[587px] h-[740px] top-[142px] left-[427px] bg-app-primary rounded-[293.3px/369.87px] rotate-[-52.53deg] blur-[374.42px] opacity-[0.16]" />

                    {/* Hero Section */}
                    <div className="text-center pt-16 relative z-10">
                        <div className="absolute w-[587px] h-[740px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bf5925] rounded-[293.3px/369.87px] rotate-[-52.53deg] blur-[374.42px] opacity-[0.16] -z-10" />

                        <h1 className="text-5xl md:text-6xl font-cormorant text-[#353336] mb-6 leading-tight">
                            A Global Community of <br /> <span className="text-[#bf5925] italic">Immigrant Women</span> and Allies
                        </h1>
                        <p className="text-lg text-[#353336] mb-8 max-w-2xl mx-auto leading-relaxed">
                            Connect, collaborate, and grow together in a space built on trust, truth, and shared humanity.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Button
                                variant="outline"
                                className="border-[#bf5925] text-[#bf5925] hover:bg-[#bf5925] hover:text-white rounded-full px-8 py-3 bg-white"
                            >
                                Collaborate
                            </Button>
                            <Button className="bg-[#bf5925] hover:bg-[#bf5925]/90 text-white rounded-full px-8 py-3">Donate</Button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Portfolio Grid */}
            <div className="relative w-full h-[550px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="relative flex items-center justify-center"
                        style={{
                            perspective: "1200px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Create multiple cycles of the same 5 images */}
                        {Array.from({ length: 25 }, (_, i) => {
                            const imageIndex = i % images.length
                            const image = images[imageIndex]

                            // Calculate position in the original curved formation
                            const totalImages = 5
                            const center = (totalImages - 1) / 2
                            const cycleOffset = Math.floor(i / totalImages) - 2 // -2 to 2 for 5 cycles
                            const positionInCycle = i % totalImages
                            const offset = positionInCycle - center

                            // Apply the sliding offset to move the entire formation smoothly
                            const rawSlide = translateX * -0.02
                            const slideOffset = rawSlide % 5
                            const adjustedOffset = offset - slideOffset + (cycleOffset * 5)

                            // Render all images to avoid pop-in/pop-out effects
                            const absOffset = Math.abs(adjustedOffset)
                            const spacingMultiplier = 230 // Fixed to constant to avoid jumps

                            const translateXPos = adjustedOffset * spacingMultiplier

                            const rotateY = adjustedOffset * -25
                            const normalizedOffset = adjustedOffset / center
                            const translateZ = -200 + Math.abs(normalizedOffset * normalizedOffset * 200)

                            // Smooth opacity fade for images far from center
                            const opacity = Math.abs(adjustedOffset) > 4 ? 0 : 1
                            const transition = Math.abs(adjustedOffset) > 3 ? 'opacity 0.5s ease-out' : 'none'

                            return (
                                <div
                                    key={`${image}-${i}`}
                                    className="absolute w-[280px] h-[420px]"
                                    style={{
                                        transform: `
                                      translateX(${translateXPos}px)
                                      translateZ(${translateZ}px)
                                      rotateY(${rotateY}deg)
                                      scale(1)
                                    `,
                                        opacity: opacity,
                                        transition: transition,
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${imageIndex + 1}`}
                                        className="w-full h-full object-cover shadow-lg"
                                        loading="eager"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/1.png?w=400&h=600&fit=crop"
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}