"use client";
import { ICategoryProjects, IProjects } from "@/interfaces/index";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { ProjectsItem } from "./ProjectsItem";
import { Button } from "@nextui-org/button";

export const Projects = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    576: 1,
  };

  const projects: IProjects[] = [
    {
      img: "JDComics.png",
      title: "JDComics",
      description:
        "Web e-commerce de cómics y figuras de acción desarrollado en PHP y JavaScript",
      repository: "https://gitlab.com/keideriz1x/TiendaComic",
      type: "Web-Development",
    },
    {
      img: "IZ1X.png",
      title: "IZ1X",
      description:
        "Web e-commerce de videojuegos desarrollado en PHP y JavaScript",
      repository: "https://gitlab.com/keideriz1x/Games",
      type: "Web-Development",
    },
    {
      img: "MyHotel.jpg",
      title: "My Hotel",
      description:
        "Aplicación de hotel desarrollada en Android Studio y NodeJS",
      repository: "https://gitlab.com/keideriz1x/MyHotel",
      type: "App-Development",
    },
    {
      img: "Decoder.png",
      title: "Encriptador de texto",
      description: "Encriptador de texto desarrollado en React.",
      repository: "https://github.com/Godplex/decoder-izix",
      demo: "https://godplex.github.io/decoder-izix/",
      type: "Web-Development",
    },
    {
      img: "Hagman.png",
      title: "Juego de ahorcado",
      description: "Juego de ahorcado desarrollado en React.",
      repository: "https://github.com/Godplex/hangman-izix",
      demo: "https://godplex.github.io/hangman-izix/",
      type: "Web-Development",
    },
    {
      img: "AluraGeek.png",
      title: "AluraGeek",
      description:
        "Web e-commerce de cómics y figuras de acción desarrollado en React.",
      repository: "https://github.com/Godplex/alurageek-izix",
      demo: "https://godplex.github.io/alurageek-izix",
      type: "Web-Development",
    },
  ];

  const projectsButtonsItem: ICategoryProjects[] = [
    {
      id: "All-Works",
      name: "Todos los trabajos",
    },
    {
      id: "Web-Development",
      name: "Desarrollo web",
    },
    {
      id: "App-Development",
      name: "Desarrollo de apps",
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState("All-Works");

  function show(id: string) {
    setActiveIndex(id);
    if (id !== "All-Works") {
      const A = projects.filter((e: any) => e.type === id);
      setFilteredProjects(A);
    } else {
      const A = projects;
      setFilteredProjects(A);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-3">
        {projectsButtonsItem.map((item, index) => (
          <Button
            key={index}
            onClick={() => show(item.id)}
            color="primary"
            className={`${
              activeIndex === item.id
                ? "bg-gradient-to-r from-secondary-500 via-primary-500 to-primary-200 text-white shadow-lg font-bold"
                : ""
            }`}
            variant={`${activeIndex === item.id ? "solid" : "bordered"}`}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredProjects.reverse().map((item) => (
          <ProjectsItem key={item.title} {...item} />
        ))}
      </Masonry>
    </div>
  );
};
