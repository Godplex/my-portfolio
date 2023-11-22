import { FC } from "react";
import { CustomArrowProps } from "react-slick";
import DynamicIcon from "../Dynamic/DynamicIcon";

export const LeftNavArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={`prev-slick`}>
      <DynamicIcon
        library={"ri"}
        iconName={"RiArrowLeftSLine"}
        className={"text-primary-500 text-xl"}
      />
    </button>
  );
};
