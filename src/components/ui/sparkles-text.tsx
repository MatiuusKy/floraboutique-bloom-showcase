"use client";

import { CSSProperties, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: { first: string; second: string };
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#EFCEDA", second: "#97224A" },
  className,
  sparklesCount = 12,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateStar = (): Sparkle => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}-${Math.random()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    setSparkles(Array.from({ length: sparklesCount }, generateStar));
    const interval = setInterval(() => {
      setSparkles((curr) =>
        curr.map((s) => (s.lifespan <= 0 ? generateStar() : { ...s, lifespan: s.lifespan - 0.1 }))
      );
    }, 100);
    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ "--sparkles-first-color": colors.first, "--sparkles-second-color": colors.second } as CSSProperties}
    >
      <span className="relative inline-block">
        {sparkles.map((s) => (
          <SparkleIcon key={s.id} {...s} />
        ))}
        <span className="relative">{text}</span>
      </span>
    </span>
  );
};

const SparkleIcon: React.FC<Sparkle> = ({ x, y, color, delay, scale }) => (
  <motion.svg
    className="pointer-events-none absolute z-20"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, scale, 0], rotate: [75, 120, 150] }}
    transition={{ duration: 1.5, repeat: Infinity, delay }}
    style={{ left: x, top: y }}
    width="21"
    height="21"
    viewBox="0 0 21 21"
  >
    <path
      d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 14.5 7C16.5949 7.60757 18.808 7.59855 20.2802 8.13745L22.1565 8.82461C22.7852 9.05461 22.7852 9.94389 22.1565 10.1739L20.2801 10.861C18.808 11.3998 16.5949 11.3908 14.5 12C12.3916 12.5388 12.4006 14.731 11.8618 16.2031L11.1746 18.0795C10.9446 18.7081 10.0553 18.7081 9.82531 18.0795L9.13815 16.2031C8.59925 14.731 8.60827 12.5388 6.5 12C4.40573 11.3908 2.19208 11.3998 0.71995 10.861L-1.15648 10.1739C-1.78514 9.94389 -1.78514 9.05461 -1.15648 8.82461L0.71995 8.13745C2.19208 7.59855 4.40573 7.60757 6.5 7C8.60827 6.39157 8.59925 4.19229 9.13815 2.72026L9.82531 0.843845Z"
      fill={color}
    />
  </motion.svg>
);
