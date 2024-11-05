import React from "react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  IconAi,
  IconBarbell,
  IconBooks,
  IconBrandDjango,
  IconBrandFlutter,
  IconDeviceGamepad2,
  IconShoppingCart,
} from "@tabler/icons-react";

export function BentoGridSection() {
  return (
    <section id="projects">
      <BentoGrid className="mt-20">
        {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
          ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = (imagePath) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 group-hover/bento:translate-x-2 transition duration-200">
    <img className= "transition duration-200 object-cover rounded-xl w-full h-full" src={imagePath.imagePath} />
  </div>
);

const items = [
  {
    title: "Flutter social media app",
    description: "A full stack social media app build using flutter and firebase for real time database.",
    header: <Skeleton imagePath="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    icon: <IconBrandFlutter className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "AI Image Generator",
    description: "GAN Neural Network built with Pytorch that generates handwritten digit images.",
    header: <Skeleton imagePath="https://images.unsplash.com/photo-1717501218636-a390f9ac5957?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    icon: <IconAi className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "Django Social Media App",
    description: "Full stack social Media/Chat app made with Django and bootstrap, with features: chatting, creating posts, deleting, editing them, commenting, subscribing, liking and more.",
    header: <Skeleton imagePath="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    icon: <IconBrandDjango className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "Workout program",
    description: "Fully fledged workout application, where users can do what workout and exercises they desire, built with React, TailwindCSS and RapidAPI",
    header: <Skeleton imagePath="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    icon: <IconBarbell className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "RPG Game",
    description: "Functional RPG game made in Godot Engine, where user can attack enemies that spawn endlessly and collect coins.",
    header: <Skeleton imagePath="https://img.freepik.com/free-vector/gamers-play-video-game-different-hardware-platforms-cross-platform-play-cross-play-cross-platform-gaming-concept_335657-1819.jpg"/>,
    icon: <IconDeviceGamepad2 className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "Learning Platform",
    description: "Simple E-Learning mobile application made in Flutter where users can browse through various courses/videos and read/watch them.",
    header: <Skeleton imagePath="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    icon: <IconBooks className="h-8 w-8 text-neutral-600" />,
  },
  {
    title: "Ecommerce App",
    description: "Ecommerce website made with Next JS framework, with functionalities like adding/deleting from cart and page navigation.",
    header: <Skeleton imagePath="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"/>,
    icon: <IconShoppingCart className="h-8 w-8 text-neutral-600" />,
  },
];

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-md transition duration-200 shadow-input p-4 bg-white border border-neutral-200 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-lg text-neutral-800 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
