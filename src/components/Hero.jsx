"use client";

import { ReactTyped } from "react-typed";

export default function HeroSection(){
    const scrollToSection = (sectionName) => {
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section id="hero" className="overflow-x-hidden">
            <div className='absolute inset-0 blur-xl h-[600px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)", pointerEvents: "none" }} ></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full transform translate-x-10 translate-y-16 opacity-10"></div> {/* Decorative shape */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full transform -translate-x-4 translate-y-4 opacity-20"></div> {/* Decorative shape */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-300 rounded-md transform rotate-45 -translate-x-10 translate-y-16 opacity-20"></div> {/* Decorative shape */}

            <div className="max-w-screen-xl mx-auto px-4 py-2 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                        Maverick Polymath
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-6xl">
                        Crafting Digital Applications  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"> that inspire and innovate.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-4xl">
                        <ReactTyped 
                        strings={['Let\'s create a website', 'Let\'s develop brains.', 'Let\'s create mobile apps.', "Let\'s do some math.", "Let\'s design something.", "Let\'s create together.", "Let\'s work with AI"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                            />
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-0 flex">
                        <button onClick={() => scrollToSection("projects")} className="cursor-pointer block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg hover:shadow-none rounded-md">
                            View Projects
                        </button>
                        <button onClick={() => scrollToSection("workflow")} className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg cursor-pointer">
                            View workflow
                        </button>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-gradient-border">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            className="w-full h-full object-cover rounded-full border-3 border-white"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

