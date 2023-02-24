import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  text?: string;
  activeValuesGraph?: boolean;
  valueExpect?: string;
  valueAchieved?: string;
}

export function Card({
  title,
  text = "",
  activeValuesGraph = false,
  valueExpect,
  valueAchieved,
  children,
}: CardProps) {
  return (
    <div className="bg-card h-full rounded-2xl shadow-lg shadow-black/10 py-7 px-12 flex flex-col gap-8 items-center justify-between">
      <h2 className="font-semibold text-2xl text-white">{title}</h2>
      <div>{children}</div>
      {!activeValuesGraph && text.length > 0 && (
        <span className="text-sm font-medium text-white">{text}</span>
      )}
      {activeValuesGraph && (
        <div className="flex items-center gap-3 text-sm text-white font-medium">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="bg-gray-600 w-[15px] h-[15px] rounded-full" />
              <span>Esperado</span>
            </div>
            <span>{valueExpect}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="bg-purple-400 w-[15px] h-[15px] rounded-full" />
              <span>Alcançado</span>
            </div>

            <span>{valueAchieved}</span>
          </div>
        </div>
      )}
    </div>
  );
}
