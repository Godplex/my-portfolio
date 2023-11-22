"use client";
import { extendVariants } from "@nextui-org/react";
import { ButtonProps, Button } from "@nextui-org/button";
import { FC } from "react";

export const StyledButton: FC<ButtonProps> = extendVariants(Button, {
  variants: {
    color: {
      primary:
        "bg-gradient-to-r from-secondary-500 via-primary-500 to-primary-200 text-white shadow-lg font-bold",
    },
  },
});

