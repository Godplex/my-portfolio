import { DynamicIcon } from "@/components/Dynamic/index";
import { MainNavbar } from "@/components/index";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <MainNavbar />
      <div className="flex-1 w-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full container py-4">{children}</div>
      </div>
      {/* <div
        className={`w-full flex justify-center px-1 md:px-2 lg:px-4 xl:px-8 py-2 bg-gradient-to-r from-secondary-50 via-danger-50 to-transparent dark:from-secondary-500/30 dark:via-primary-500/30 dark:to-transparent`}
      >
        <div className="w-full flex justify-end">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            as={Link}
            href="/login"
          >
            <DynamicIcon
              library={"bi"}
              iconName={"BiSolidUserCircle"}
              className="text-primary-500 dark:text-white"
              size={"1.7em"}
            />
          </Button>
        </div>
      </div> */}
    </main>
  );
}
