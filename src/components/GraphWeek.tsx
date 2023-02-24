import { CaretDown, CaretUp } from "phosphor-react";
import { motion } from "framer-motion";

const daysOfWeekName = [
  "Domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sabádo",
];

interface GraphWeekProps {
  daysWeek: {
    day: number;
    value: number;
  }[];
}

export function GraphWeek({ daysWeek }: GraphWeekProps) {
  const maxValue = daysWeek?.reduce((prev, current) =>
    prev?.value > current.value ? prev : current
  );

  const minValue = daysWeek.reduce((prev, current) =>
    prev.value < current.value ? prev : current
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-8 text-sm text-white font-medium">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1">
            <CaretUp size={15} weight="fill" className="text-green-500" /> Dia
            com mais vendas
          </span>
          <span className="text-2xl">{daysOfWeekName[maxValue.day]}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1">
            <CaretDown size={15} weight="fill" className="text-red-600" /> Dia
            com menos vendas
          </span>
          <span className="text-2xl">{daysOfWeekName[minValue.day]}</span>
        </div>
      </div>
      <div className="h-full flex items-end relative gap-16">
        <div className="absolute w-full h-[3px] bg-[#4A4556] top-1/2 z-0" />
        {daysWeek?.map((dayWeek) => {
          return (
            <motion.div
              key={dayWeek.day}
              className="flex flex-col justify-end items-center gap-1 z-10 h-full"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${dayWeek.value}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`w-[15px] bg-gradient-to-b from-[#90F7EC] to-[#32CCBC] rounded-full`}
              />
              <span className="text-white font-medium text-sm">
                {daysOfWeekName[dayWeek.day].slice(0, 3)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
