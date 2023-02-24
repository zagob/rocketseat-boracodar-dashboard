import { Card } from "@/components/Card";
import { GraphWeek } from "@/components/GraphWeek";
import { ProgressBar } from "@/components/ProgressBar";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

import happySvg from "../assets/icons/happy.svg";

const inter = Inter({ subsets: ["latin"] });

interface DataProps {
  day: number;
  value: number;
}

export default function Home() {
  const [data, setData] = useState<DataProps[]>([]);
  const [progressStartValue, setProgressStartValue] = useState(1);
  const progressEndValue = 90;
  const speed = 10;

  useEffect(() => {
    if (progressStartValue < progressEndValue) {
      var progress = setInterval(() => {
        setProgressStartValue((old) => old + 1);
      }, speed);
    }

    return () => clearInterval(progress);
  }, [progressStartValue, progressEndValue, speed]);

  useEffect(() => {
    const daysWeekData = Array.from({ length: 7 }).map((_, index) => ({
      day: index,
      value: Math.round(Math.random() * 100),
    }));

    setData(daysWeekData);
  }, []);

  return (
    <div className="py-[50px] px-[123px] h-screen" style={inter.style}>
      <div className="flex flex-col gap-[59px] h-full">
        <div className="flex-1 grid grid-cols-3 gap-8">
          <Card title="NPS geral" text="NPS Score 75">
            <div className="flex flex-col items-center gap-5">
              <Image src={happySvg} alt="Happy SVG" />
              <span className="font-semibold text-2xl text-green-500">
                Excelente!
              </span>
            </div>
          </Card>
          <Card
            title="Vendas fechadas"
            activeValuesGraph
            valueExpect="100"
            valueAchieved="70"
          >
            <ProgressBar
              startValue={progressStartValue}
              startColor="#CE9FFC"
              endColor="#7367F0"
            />
          </Card>
          <Card
            title="Meta mensal"
            activeValuesGraph
            valueExpect="R$ 70K"
            valueAchieved="R$ 63K"
          >
            <ProgressBar
              startValue={progressStartValue}
              startColor="#DF9780"
              endColor="#A66DE9"
            />
          </Card>
        </div>
        <div className="bg-card h-[250px] rounded-2xl shadow-lg shadow-black/10 px-12 py-8 flex flex-col gap-4">
          <h4 className="font-semibold text-2xl text-white">
            Vendas por dia da semana
          </h4>

          {data.length > 0 && <GraphWeek daysWeek={data} />}
        </div>
      </div>
    </div>
  );
}
