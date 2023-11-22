import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <div className="flex-1 w-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full container py-4">{children}</div>
      </div>
    </main>
  );
}
