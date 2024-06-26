"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/theme-toggle";
import IconGithub from "./shared/icons/github";
import { Badge } from "./ui/badge";
import LinkedIn from "./shared/icons/linkedin";

const NAV_ITEMS = {
  sobre: "/",
  experiências: "/work",
  //blog: "/blog",
  projetos: "/projects",
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="mx-auto px-0 sm:px-6 lg:px-8 w-full sm:max-w-screen-lg">
      <nav
        className="flex flex-col fade items-center md:items-start justify-start tracking-tight w-full sm:pr-0 md:pr-6 lg:pr-0"
        aria-label="Main navigation"
      >
        <div className="flex flex-row justify-between w-full h-full">
          <div className="flex flex-row items-center justify-center">
            <Link href="Cauatn.png">
              <img
                className="rounded-full"
                src="https://github.com/Cauatn.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="sr-only">Cauã Tavares</span>
            </Link>
            <div className="flex flex-col ml-4">
              <span className="text-medium inline-block font-medium">
                Cauã Tavares
              </span>
              <span className="opacity-60">Desenvolvedor de Software</span>
            </div>
          </div>
          <div className="flex sm:flex-row space-x-2 justify-center items-end flex-col">
            <div className="flex flex-row space-x-2 justify-center items-end">
              <a href="https://github.com/Cauatn">
                <IconGithub size={20} className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/cauatn/">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between sm:justify-end w-full mt-8 sm:mt-4 mb-0 sm:mb-4 tracking-tight">
          <div className="inline-flex items-center">
            {Object.entries(NAV_ITEMS).map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  pathname === href ? "font-semibold" : "font-normal",
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
