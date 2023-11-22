"use client";
import { ISkills } from "@/interfaces/ISkills";
import { settingSlick } from "@/utils/index";
import Slider from "react-slick";
import SkillsItem from "./SkillsItem";
import { Suspense } from "react";
import Loading from "../../app/loading";

const Skills = () => {
  const skills: ISkills[] = [
    {
      name: "JavaScript",
      library: "ri",
      icon: "RiJavascriptFill",
    },
    {
      name: "HTML5",
      library: "ai",
      icon: "AiFillHtml5",
    },
    {
      name: "CSS",
      library: "fa",
      icon: "FaCss3Alt",
    },
    {
      name: "React",
      library: "fa",
      icon: "FaReact",
    },
    {
      name: "SASS",
      library: "fa",
      icon: "FaSass",
    },
    {
      name: "Bootstrap",
      library: "fa",
      icon: "FaBootstrap",
    },
    {
      name: "Git",
      library: "bs",
      icon: "BsGit",
    },
    {
      name: "Java",
      library: "fa",
      icon: "FaJava",
    },
    {
      name: "Android",
      library: "ai",
      icon: "AiFillAndroid",
    },
    {
      name: "Flutter",
      library: "bi",
      icon: "BiLogoFlutter",
    },
    {
      name: "NodeJS",
      library: "bi",
      icon: "BiLogoNodejs",
    },
    {
      name: "PHP",
      library: "fa",
      icon: "FaPhp",
    },
    {
      name: "Python",
      library: "fa",
      icon: "FaPython",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-primary-600 font-bold text-2xl md:text-3xl text-center">
        Habilidades
      </p>
      <div className="px-5 pb-5">
        <Slider {...settingSlick}>
          {
            skills.map((item, index) => (
              <Suspense fallback={<Loading />} key={index}>
                <SkillsItem {...item} />
              </Suspense>
            )) as any
          }
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
