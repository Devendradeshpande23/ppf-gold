import React from 'react'
import { useState } from "react";
export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alice Johnson",
            avatar: "https://i.pravatar.cc/100?img=1",
            rating: 5,
            review: "Amazing service! Everything was handled with professionalism."
        },
        {
            id: 2,
            name: "Mark Thompson",
            avatar: "https://i.pravatar.cc/100?img=2",
            rating: 4,
            review: "Great support and quality work. Would use again!"
        },
        {
            id: 3,
            name: "Sophia Lee",
            avatar: "https://i.pravatar.cc/100?img=3",
            rating: 5,
            review: "Exceeded my expectations. Loved every bit of it!"
        },
        {
            id: 4,
            name: "Liam Smith",
            avatar: "https://i.pravatar.cc/100?img=4",
            rating: 4,
            review: "Fast delivery, clear communication, very reliable."
        },
        {
            id: 5,
            name: "Olivia Brown",
            avatar: "https://i.pravatar.cc/100?img=5",
            rating: 5,
            review: "Beautiful results. Friendly and helpful team."
        },
        {
            id: 6,
            name: "Noah Wilson",
            avatar: "https://i.pravatar.cc/100?img=6",
            rating: 4,
            review: "Really good experience overall, with minor delays."
        },
        {
            id: 7,
            name: "Emma Davis",
            avatar: "https://i.pravatar.cc/100?img=7",
            rating: 5,
            review: "Smooth and professional process from start to finish."
        },
        {
            id: 8,
            name: "James Miller",
            avatar: "https://i.pravatar.cc/100?img=8",
            rating: 3,
            review: "Good service but communication could be improved."
        },
        {
            id: 9,
            name: "Ava Garcia",
            avatar: "https://i.pravatar.cc/100?img=9",
            rating: 4,
            review: "Wonderful experience. Would definitely recommend."
        },
        {
            id: 10,
            name: "Lucas Martinez",
            avatar: "https://i.pravatar.cc/100?img=10",
            rating: 5,
            review: "Top-notch results and impeccable support!"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;

    const handleNext = () => {
        if (currentIndex + visibleCount < testimonials.length) {
            setCurrentIndex(currentIndex + visibleCount);
        }
    };

    const handlePrev = () => {
        if (currentIndex - visibleCount >= 0) {
            setCurrentIndex(currentIndex - visibleCount);
        }
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex,
        currentIndex + visibleCount
    );
    

    return (
        <div className='bg-neutral-600 pb-10'>
            <div className='bg-neutral-600 p-5 text-[clamp(1.2rem,2.5vw,2rem)] pt-10 font-bold text-center text-white' >
                <h1 className='' >Client Testimonials</h1>
            </div>
            <div className="max-w-7xl mx-auto p-4  ">
                
                <div className="flex justify-between items-center mb-4 ">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                        disabled={currentIndex === 0}
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                        disabled={currentIndex + visibleCount >= testimonials.length}
                    >
                        ▶
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {visibleTestimonials.map((t) => (
                        <div key={t.id} className="bg-white shadow p-6 rounded-md text-center">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold text-lg">{t.name}</h3>
                            <p className="text-yellow-400 mt-1">
                                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                            </p>
                            <p className="text-gray-600 mt-2">{t.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
