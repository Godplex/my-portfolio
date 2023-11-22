import { FC } from "react";
import { CustomArrowProps } from "react-slick";
import DynamicIcon from "../Dynamic/DynamicIcon";

export const RightNavArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={`next-slick`}>
      <DynamicIcon
        library={"ri"}
        iconName={"RiArrowRightSLine"}
        className={"text-primary-500 text-xl"}
      />
    </button>
  );
};
