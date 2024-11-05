"use client";
import React from "react";


const CardList = () => {
  const cards = [
    {
      title: "Dart",
      image: "https://pbs.twimg.com/profile_images/993555605078994945/Yr-pWI4G_400x400.jpg",
      description: "Used for mobile app development along with Flutter.",
      techs: ["Flutter", "Hive", "Firebase", "Bloc", "Supabase"],
    },
    {
      title: "JavaScript",
      image: "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=720&h=480&fit=clip&auto=format",
      description: "Used for Full-Stack Web Development.",
      techs: ["React", "Next.js", "Tailwind CSS", "Express", "Three JS", "Node", "TypeScript"],
    },
    {
      title: "Python",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=256",
      description: "Used for Backend Web Development, Data Science and Machine Learning.",
      techs: ["TensorFlow", "PyTorch", "Django", "Flask", "PyQT", "Numpy", "Pandas", "OpenCV"],
    },
    {
      title: "C++",
      image: "https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png",
      description: "For solving particular problems, critical thinking and desktop app development.",
      techs: ["Winforms", "OpenCV"],
    },
    {
      title: "Java",
      image: "https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png",
      description: "Use for problem solving and for desktop app development",
      techs: ["JavaFX", "Spring"],
    },
    {
      title: "PHP",
      image: "https://www.cdnlogo.com/logos/p/79/php.svg",
      description: "Utilized for web development, though not often.",
      techs: ["MySQL", "Backend"],
    },
    {
      title: "Godot",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1200px-Godot_icon.svg.png",
      description: "Helpful when creating multiplatform and functional games.",
      techs: [],
    },
    {
      title: "Go",
      image: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
      description: "Used for creating simple console applications and servers.",
      techs: [],
    },
  ];

  return (
    <section id="workflow">
    <div className="relative mt-24 tracking-wide mb-36">
        <div className="absolute -left-52 -top-28 w-[30rem] h-[30rem] rounded-2xl bg-gradient-to-r from-red-200 to-red-400 opacity-20 blur-3xl -z-30"></div>
        <div className="absolute overflow-hidden right-0 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-green-300 to-green-500 opacity-20 blur-3xl -z-30"></div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-semibold">
        View our
        <span className="bg-gradient-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text">
          {" "}
          workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <div className="bg-transparent border border-neutral-300 rounded-lg p-8 hover:border-neutral-700">
              {/* Row 1: Image and Title */}
              <div className="flex items-center mb-6 mr-2">
                <img
                  src={card.image}
                  alt={`${card.title} Logo`}
                  className="w-20 h-20 object-contain rounded-full shadow-sm mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-neutral-800">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{card.description}</p>
                </div>
              </div>

              {/* Row 2: Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {card.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium items-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CardList;
