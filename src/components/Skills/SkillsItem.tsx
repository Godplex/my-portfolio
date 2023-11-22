"use client";
import { FC, useState } from "react";
import { DynamicIcon } from "../Dynamic/index";
import { ISkills } from "../../interfaces/ISkills";
import { Card, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: [1, 1.1, 1],
    rotateY: [0, 360],
    transition: {
      repeat: 1, 
      duration: 2,
    }
  },
  rest: {
    scale: 1,
    rotateY: 0
  },
};


const SkillsItem: FC<ISkills> = ({ name, icon, library }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-2 flex">
      <div
        className="w-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="w-full border-3 border-primary-600 group-hover:bg-primary-500">
          <CardBody className="text-center">
            <motion.div
              className="w-full flex justify-center"
              variants={iconVariants}
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
            >
              <DynamicIcon
                library={library}
                iconName={icon}
                size={'4.5rem'}
                className={
                  "fa-3x text-primary-500 group-hover:text-white"
                }
              />
            </motion.div>
            <p className="pt-3 whitespace-nowrap group-hover:text-white">{name}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SkillsItem;
