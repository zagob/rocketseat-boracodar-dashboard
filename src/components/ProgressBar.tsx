import { useEffect, useState } from "react";

interface ProgressBarProps {
  percent: number;
  speedAnimation?: number;
  startColor: string;
  endColor: string;
  idColorGradient: string;
}

export function ProgressBar({
  endColor,
  startColor,
  percent,
  idColorGradient,
  speedAnimation = 50,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (progress < percent) {
      const progress = setInterval(() => {
        setProgress((old) => old + 1);
      }, speedAnimation);

      return () => clearInterval(progress);
    }
  }, [progress]);

  return (
    <div className=" relative">
      <div className="w-[180px] h-[180px] flex items-center justify-center rounded-full bg-[#474556]">
        <div className="w-[140px] h-[140px] inset-0 rounded-full bg-card text-white flex flex-col leading-none items-center justify-center">
          <span className="relative text-[32px] font-bold">{progress}%</span>
          <span className="relative text-base">alcançada</span>
        </div>
      </div>

      <svg
        className="absolute top-0 left-0 rotate-[270deg]"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200px"
        height="200px"
      >
        <defs>
          <linearGradient id={idColorGradient}>
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <circle
          className="fill-none"
          stroke={`url(#${idColorGradient})`}
          strokeWidth={20}
          strokeDasharray={500}
          strokeDashoffset={490 - (490 * progress) / 100}
          cx="110"
          cy="90"
          r="80"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
