"use client";
import { FC } from "react";
import { IconBaseProps } from "react-icons";
import loadable from "@loadable/component";
import { Skeleton } from "@nextui-org/skeleton";

interface DynamicIconProps extends IconBaseProps {
  library: string;
  iconName: string;
}

const DynamicIcon: FC<DynamicIconProps> = ({ library, iconName, ...props }) => {
  const LoadableIconComponent = loadable(
    () =>
      import(`react-icons/${library}/index.js`).then((mod) => mod[iconName]),
    {
      fallback: (
        <Skeleton
          className="rounded-full"
          style={{ width: props.size ?? "1rem", height: props.size ?? "1rem" }}
        />
      ),
    }
  );

  const IconComponent: FC<IconBaseProps> = (iconProps) => (
    <LoadableIconComponent {...iconProps} />
  );

  return <IconComponent {...props} />;
};

export default DynamicIcon;
