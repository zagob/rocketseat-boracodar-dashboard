import { useEffect, useState } from "react";

interface ProgressBarProps {
  percent: number;
  speedAnimation?: number;
  startColor: string;
  endColor: string;
}

export function ProgressBar({
  endColor,
  startColor,
  percent,
  speedAnimation = 20,
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
    <div
      style={{
        background: `conic-gradient(${startColor}, ${endColor} ${
          progress * 3.6
        }deg, #474556 0deg)`,
      }}
      className="relative h-[197px] w-[197px] shadow-2xl shadow-black/40 rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[140px] before:w-[140px] before:bg-[#363447] before:rounded-full"
    >
      <div className="text-white flex flex-col items-center">
        <span className="relative text-[34px] font-bold">{progress}%</span>
        <span className="relative text-base">alcançada</span>
      </div>
    </div>
  );
}
