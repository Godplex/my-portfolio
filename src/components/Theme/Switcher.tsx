"use client";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DynamicIcon } from "../Dynamic/index";

export const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <Switch
      isDisabled={!mounted}
      isSelected={theme === "light"}
      size="lg"
      color="primary"
      onChange={handleChange}
      thumbIcon={({ _, className }: any) =>
        theme !== "light" ? (
          <DynamicIcon
            library="pi"
            iconName="PiSunDimFill"
            className={className}
          />
        ) : (
          <DynamicIcon
            library="bi"
            iconName="BiSolidMoon"
            className={className}
          />
        )
      }
    />
  );
};
