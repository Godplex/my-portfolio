import { Card, CardFooter } from "@nextui-org/card";
import React, { FC } from "react";
import DynamicImage from "../Dynamic/DynamicImage";
import { StyledButton } from "../Styled/StyledButton";
import { motion } from "framer-motion";
import DynamicIcon from "../Dynamic/DynamicIcon";
import { IProjects } from "@/interfaces/IProjects";
import Link from "next/link";

export const ProjectsItem: FC<IProjects> = ({
  img,
  title,
  description,
  repository,
  demo,
}) => {
  return (
    <div className="w-full col-span-12 sm:col-span-7">
      <Card
        isFooterBlurred
        className="border-3 border-primary-600 relative overflow-hidden group"
      >
        <DynamicImage
          width={300}
          height={300}
          style={{ minHeight: "250px" }}
          alt="Relaxing app background"
          className="z-5 w-full h-full object-cover group-hover:brightness-50 "
          imageName={`${img}`}
          folder={"projects"}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col justify-center items-center space-y-4 z-10 px-5 text-center"
        >
          <p className="text-xl text-white uppercase font-bold z-20">{title}</p>
          <h4 className="text-white font-medium z-20">{description}</h4>
        </motion.div>

        <CardFooter className="absolute bottom-0 left-0 right-0 z-20 bg-opacity-90 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex w-full justify-between">
            <StyledButton
              radius="full"
              color="primary"
              startContent={<DynamicIcon library={"fa"} iconName={"FaCode"} />}
              as={Link}
              target="_blank"
              href={repository}
            >
              Código
            </StyledButton>
            {
              demo &&
            <StyledButton
              radius="full"
              color="primary"
              endContent={<DynamicIcon library={"fa"} iconName={"FaRegEye"} />}
              as={Link}
              target="_blank"
              href={demo}
            >
              Demo
            </StyledButton>
            }
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
