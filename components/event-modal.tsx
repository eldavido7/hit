"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { QRCodeComponent } from "@/components/qrcode"
import { X } from "lucide-react"

interface Event {
    id: string
    title: string
    date: string
    day: string
    dayNumber: string
    location: string
    description: string
    image: string
    meetingLink: string
    featured?: boolean
    barcode: string
}

interface EventModalProps {
    event: Event | null
    isOpen: boolean
    onClose: () => void
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
    if (!isOpen || !event) return null

    return (
        <>
            {/* Backdrop with blur */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-4xl max-w-2xl w-full md:max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex justify-end md:absolute md:right-96 md:items-center">
                        <Button
                            onClick={onClose}
                            className="md:bg-gray-100 md:hover:bg-gray-200 rounded-full md:mt-0 mt-4 transition-colors"
                        >
                            <X className="w-4 h-4 " />
                        </Button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Event Image */}
                        <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
                            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="rounded-4xl object-cover" />
                        </div>

                        {/* Event Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                {event.featured && (
                                    <span className="inline-block bg-[#bf5925]/10 border-[#bf5925] border text-[#bf5925] px-3 py-1 rounded-full text-sm">
                                        Featured
                                    </span>
                                )}
                                <div className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                                        />
                                    </svg>
                                    {event.date}
                                </div>
                            </div>

                            <h3 className="text-3xl font-cormorant font-semibold text-[#353336] leading-tight">{event.title}</h3>

                            <div className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {event.location}
                            </div>

                            <p className="text-gray-700 leading-relaxed">{event.description}</p>

                            {/* QR Code */}
                            <div className="flex justify-left py-4">
                                <QRCodeComponent value={event.meetingLink} size={120} />
                            </div>

                            {/* Join Button */}
                            <div className="flex justify-left pt-4">
                                <Button
                                    className="bg-[#bf5925] hover:bg-[#bf5925]/90 text-white px-8 py-3 rounded-full"
                                    onClick={() => window.open(event.meetingLink, "_blank")}
                                >
                                    Join Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
