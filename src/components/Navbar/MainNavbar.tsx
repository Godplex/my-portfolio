"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "../Logo/index";
import { Switcher } from "../Theme";

export const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const menuItems = [
    { label: "Inicio", route: "/" },
    { label: "Sobre mí", route: "/about" },
    { label: "Proyectos", route: "/projects" },
    { label: "Contacto", route: "/contact" },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      style={{ padding: 0 }}
      maxWidth={"2xl"}
      className={"[&>header]:px-0 px-4 md:px-8 lg:px-16 xl:px-32"}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        {menuItems.map(({ label, route }, index) => (
          <NavbarItem
            className="hidden md:flex pe-4 border-r-1 border-black dark:border-white last:border-0"
            key={index}
          >
            <Link
              as={NextLink}
              href={`${route}`}
              className={`${
                pathName === `${route}`
                  ? "text-primary-500 border-b-2 border-primary-500 hover:text-primary-400 dark:hover:text-primary-400"
                  : "text-black dark:text-white hover:text-primary-400 dark:hover:text-primary-400"
              } `}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map(({ label, route }, index) => (
          <NavbarMenuItem key={index}>
            <Link
              as={NextLink}
              href={`${route}`}
              className={`${
                pathName === `${route}`
                  ? "border-b-2 border-primary-500 text-primary-500 hover:text-primary-400 dark:hover:text-primary-400"
                  : "text-black dark:text-white hover:text-primary-400 dark:hover:text-primary-400"
              }`}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Switcher />
    </Navbar>
  );
};
