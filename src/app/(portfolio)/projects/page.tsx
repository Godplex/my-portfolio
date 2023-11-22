import { Projects } from "@/components/Projects/Projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-primary-600 font-bold text-2xl md:text-3xl text-center">
        Proyectos
      </p>
      <Projects/>
    </div>
  );
};

export default ProjectsPage;
