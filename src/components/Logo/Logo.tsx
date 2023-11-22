"use client";
import dark from "@/assets/logo-dark.png";
import light from "@/assets/logo-light.png";
import { Image } from "@nextui-org/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Image
      width={"150px"}
      alt="Logo - IZIX"
      src={theme === "light" ? light.src : dark.src}
    />
  );
};
