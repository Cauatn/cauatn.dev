"use client";

import { useToast } from "@/lib/use-toast";
import IconArrowRightUp from "./shared/icons/arrow-right-up";

import { Mail } from "lucide-react";

export default function EmailToaster() {
  const { toast } = useToast();
  const currentDate = new Date();

  return (
    <div className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between">
      <button
        onClick={() => {
          navigator.clipboard.writeText("tavarescauacdev@gmail.com");
          toast({
            title: "Copiado e Transferido para a Área de Transferência",
            description: currentDate.toString(),
          });
        }}
        className="flex flex-row items-center justify-between w-full"
      >
        <div className="flex flex-row items-center">
          <Mail className="size-4" />
          <span className="ml-3">Email</span>
        </div>
        <IconArrowRightUp />
      </button>
    </div>
  );
}
