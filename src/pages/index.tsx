import { Card } from "@/components/Card";
import { Inter } from "next/font/google";
import Image from "next/image";

import happySvg from "../assets/icons/happy.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="py-[112px] px-[123px] h-screen">
      <div className="flex flex-col gap-[59px] h-full">
        <div className="flex-1 grid grid-cols-3 gap-8">
          <Card title="NPS geral">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image src={happySvg} alt="Happy SVG" />
              <span className="font-semibold text-2xl text-green-500">
                Excelente!
              </span>
            </div>
          </Card>
          <Card title="Vendas fechadas">
            <div className="bg-white rounded-lg w-[420px] py-[50px] flex flex-col items-center">
              <div className="relative h-[250px] w-[250px] bg-pink-100 rounded-full gradient-circle">
                <span className="">0%</span>
              </div>

              <span className="">HTML & CSS</span>
            </div>
            {/* <div className="w-[197px] h-[197px] rounded-full bg-gradient-to-tr from-pink-100 to-pink-400">
              <div className="w"></div>
            </div> */}
          </Card>
          <Card title="Meta mensal">asdasd</Card>
        </div>
        <div className="bg-card h-[250px] rounded-2xl shadow-lg shadow-black/10">
          asd
        </div>
      </div>
    </div>
  );
}
