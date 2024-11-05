import Link from "next/link";

export default function About() {
    return (
        <section className="py-24 relative border-b border-neutral-300 px-8" id="about">
        <div className="border-animation-wrapper">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div
                        className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className=" rounded-xl object-cover" src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about Us image" />
                        </div>
                        <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="about Us image" />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    About Me </h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Hi! I'm Maverick, a software developer passionate about creating intuitive, user-focused digital experiences. 
                                With expertise in JavaScript, Flutter, Python, Godot Engine, Django, Pytorch, Tensorflow, Spring React Native and React, I enjoy bringing creative solutions 
                                to life—from web interfaces to mobile apps. I believe in blending functionality with design, ensuring every project is as 
                                engaging as it is effective. Let’s connect and make something great together!</p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1+</h3>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">0</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="relative inline-flex items-center px-10 py-2 overflow-hidden 
                        text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full
                        hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute pl-2 right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative text-sm">Read More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
    )
}