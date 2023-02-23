import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-card h-full rounded-2xl shadow-lg shadow-black/10 py-7 px-12 flex flex-col gap-8 items-center">
      <h2 className="font-semibold text-2xl text-white">{title}</h2>
      <div className="flex flex-col items-center gap-8 h-full">{children}</div>
    </div>
  );
}
