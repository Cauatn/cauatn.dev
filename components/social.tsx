import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconGithub from "./shared/icons/github";
import IconCv from "./shared/icons/cv";

import Link from "next/link";
import { Mail } from "lucide-react";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      {children}
      <IconArrowRightUp />
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <SocialButton href="">
        <div className="flex flex-row items-center">
          <Mail className="size-4" />
          <span className="ml-3">Email</span>
        </div>
      </SocialButton>
      <SocialButton href="https://github.com/Cauatn">
        <div className="flex flex-row items-center">
          <IconGithub />
          <span className="ml-3">Github</span>
        </div>
      </SocialButton>
      <SocialButton href="">
        <div className="flex flex-row items-center">
          <IconCv />
          <span className="ml-3">Curriculo</span>
        </div>
      </SocialButton>
    </div>
  );
}
