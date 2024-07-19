"use client";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="b-primary text-primary-foreground flex justify-center">
      {children}
    </nav>
  );
}

export function Navlink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-sky-950 hover:text-white focus-visible:bg-secondary focus-visible:text-secondary-foreground ",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
