"use client";
import { IContact } from "@/interfaces/IContact";
import { Card, CardBody } from "@nextui-org/card";
import { FC } from "react";
import DynamicIcon from "../Dynamic/DynamicIcon";

export const ContactItem: FC<IContact> = ({
  name,
  icon,
  description,
  library,
}) => {
  return (
    <Card className="border-3 border-primary-600 flex-1 px-4">
      <CardBody>
        <div className="grid grid-cols-12 gap-3 items-center justify-center">
          <div className="col-span-3">
            <DynamicIcon
              library={library}
              iconName={icon}
              size='3rem'
              className="text-primary-500"
            />
          </div>
          <div className="flex flex-col col-span-9 text-start">
            <span className="text-lg font-semibold">{name}</span>
            <p>{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
