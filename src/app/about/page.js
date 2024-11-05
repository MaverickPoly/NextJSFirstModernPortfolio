import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';


const AboutPage = () => {
    return (
        <section className="p-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto max-w-screen-md">
                <img
                    src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team work"
                    className="mb-4 h-[28rem] w-full rounded-xl object-cover"
                />
                <h2
                    className="block antialiased tracking-normal font-sans text-blue-gray-900 my-4 font-black text-4xl !leading-snug text-purple-700"
                >
                    About...
                </h2>
                <p
                    className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500"
                >
                    Welcome to my world, where ideas come to life and passions drive every project. As you scroll through, you'll discover more than just skills
                    and accomplishments – you’ll see the essence of what drives me. I’m dedicated to creating great programs and applications that make everyday life better,
                    bridging creativity and functionality for people in every line of code. Every project tells a background, and each one is a testament to my hard work in this precious sphere.<br /><br />

                    If you're interested in working with me, please don't hesitate to reach out. I'm always looking for new clients and opportunities to share my passion for technology with others, via helping them to build new applications.
                    I can help you build anything you want, from websites and mobile applications, to powerful AI models and games.
                </p>
            </div>
            <div className='flex justify-start mt-10 mx-auto max-w-screen-md'>
                <Link href="/">
                    <ArrowLeftIcon className='text-neutral-600 w-8 h-8 cursor-pointer hover:ml-1 duration-500' />
                </Link>
                <h3 className='ml-6 text-neutral-600 font-bold'>Back</h3>
            </div>
        </section>
    );
}

export default AboutPage;
