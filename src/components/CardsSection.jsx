"use client"

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export const GlareCard = ({
  children,
  className
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);
  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });
  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)"
  };

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow":
      "repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
    }
  };
  return (
    (<div
      style={containerStyle}
      className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[320px] [aspect-ratio:17/21]"
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current?.style.setProperty("--r-x", `0deg`);
          refElement.current?.style.setProperty("--r-y", `0deg`);
        }
      }}>
      <div
        className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden">
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div className={cn("h-full w-full bg-slate-950", className)}>
            {children}
          </div>
        </div>
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
          style={{ ...backgroundStyle }} />
      </div>
    </div>)
  );
};


export default function GlareCardsContainer() {
  return (
    (
    <section id="blog">
        <div className="relative mt-6 mb-10 mx-auto">
        <div className="absolute overflow-hidden right-20 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-indigo-300 to-indigo-600 opacity-70 blur-3xl"></div>
        <svg className="w-full h-28 opacity-50 -z-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <marker id="cross" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8">
              <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="2"/>
            </marker>
          </defs>
          <path d="M0,50 Q250,0 500,50 T1000,50" fill="none" stroke="currentColor" strokeWidth="2"
                markerStart="url(#cross)" markerEnd="url(#cross)" />
        </svg>


        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10 font-semibold">
        Future Blog
        <span className="bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text">
          {" "}
          Posts
        </span>
      </h2>
        <div className="flex flex-wrap justify-center gap-8 ">
        <GlareCard className="relative flex flex-col items-center justify-center overflow-hidden">
          {/* Floating squares */}
          <div className="absolute inset-0 ">
            <div className="floating-square top-10 left-10"></div>
            <div className="floating-square top-20 right-16"></div>
            <div className="floating-square top-36 right-28"></div>
            <div className="floating-square bottom-10 left-20"></div>
            <div className="floating-square bottom-16 right-10"></div>
            <div className="floating-square bottom-28 right-28"></div>
          </div>

          {/* Main Content */}
          <h1 className="mt-8 text-2xl text-white font-semibold">
            View 
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
              {" "}Projects
            </span>
          </h1>
        </GlareCard>
        <GlareCard className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          {/* Background Image */}
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="https://img.freepik.com/free-photo/minimalistic-home-desk-design_23-2148991432.jpg?t=st=1730792718~exp=1730796318~hmac=e599b1193515f470a46db067c78f8f28f389f8bcbe184f05e466d0fa8b6eed42&w=996"
            alt="Background image"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

          {/* Glare Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 transform -rotate-45 translate-x-0 transition duration-500 hover:translate-x-full pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 p-6 text-center">
            <h2 className="text-white text-2xl font-bold">Open communication</h2>
            <p className="text-neutral-200 mt-2 text-sm">
              Discussing project briefly.
            </p>
          </div>
        </GlareCard>

          <GlareCard className="relative flex items-center justify-center overflow-hidden">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://media.istockphoto.com/id/1335852418/vector/modern-world-map-made-of-lines-and-dots-on-dark-blue-background.jpg?s=612x612&w=0&k=20&c=XfJWcVZDH4MSZgS187PtdL3UNC00u4x6CQr2YQBSAzA="
              alt="World map background"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-center ml-4 mr-4 mb-4 flex flex-col items-center justify-center">
              <p className="text-white font-semibold text-lg leading-8">
                Tech enthusiasts with passion for development.
              </p>
            </div>
          </GlareCard>

          <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6 overflow-hidden">
            {/* Decorative gradient overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 w-2/3 h-2/3 pointer-events-none" style={{ top: '20%', left: '20%' }}></div> */}
            <div className="absolute inset-0 left-12 -top-28 w-[5rem] h-[40rem] rounded-2xl bg-gradient-to-br from-red-100 to-red-400 opacity-20 blur-2xl pointer-events-none"></div>

            {/* Content */}
            <p className="font-bold text-white text-lg z-10">The greatest trick</p>
            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
              The greatest trick programming languages
              to learn in 2025.
            </p>
          </GlareCard>
          <GlareCard className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl transform transition duration-500 hover:scale-105 shadow-glow">
            {/* Background Image */}
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?t=st=1730792481~exp=1730796081~hmac=f44b7ac5ab27bf5a662ad997b37d28545416de231be5d62adb3457c161e9cc16&w=996"
              alt="Background image"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-neutral-500 opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 p-6 text-center">
              <h2 className="text-white text-2xl font-bold">Explore the World</h2>
              <p className="text-neutral-200 mt-2 text-sm">
                Discover breathtaking destinations and travel tips to make the most of your journey.
              </p>
            </div>
          </GlareCard>

        </div>
        </div>
    </section>)
  );
}
