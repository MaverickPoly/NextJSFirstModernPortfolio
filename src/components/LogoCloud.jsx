"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const logoItems = [
  {
    alt: "facebook",
    src: "https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png",
  },
  {
    alt: "google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
  },
  {
    alt: "apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
  },
  {
    alt: "spotify",
    src: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
  },
  {
    alt: "microsoft",
    src: "https://www.tramatm.com/_next/image?url=https%3A%2F%2Ftrama-static.s3.eu-central-1.amazonaws.com%2Fimages%2Fhall-of-fame%2Flogos%2F2-logo.png&w=3840&q=75",
  },
  {
    alt: "activision",
    src: "https://1000logos.net/wp-content/uploads/2020/09/Activision-logo.png",
  },
  {
    alt: "openai",
    src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
  },
]

export const InfiniteMovingLogoCloud = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((logo) => {
        const duplicatedLogo = logo.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedLogo);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <section id="logo">
      <div className="mt-20">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold justify-center text-center tracking-wide">
          Favourite tech 
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            {" "} companies.
          </span>
        </h2>
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
            )}
            >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
              )}
              >
            {logoItems.map((logo, idx) => (
              <li
              className="w-[150px] max-w-full relative flex-shrink-0 flex items-center justify-center"
              key={idx}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-auto w-full object-contain p-6"
                  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
