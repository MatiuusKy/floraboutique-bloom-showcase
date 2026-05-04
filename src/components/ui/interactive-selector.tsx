import { useState } from "react";

export interface SelectorItem {
  title: string;
  subtitle?: string;
  image: string;
}

interface InteractiveSelectorProps {
  items: SelectorItem[];
  className?: string;
}

const InteractiveSelector = ({ items, className = "" }: InteractiveSelectorProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className={`flex w-full gap-2 md:gap-3 h-[420px] md:h-[560px] ${className}`}>
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <button
            key={item.title}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden rounded-2xl transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] focus:outline-none focus:ring-2 focus:ring-primary ${
              isActive ? "flex-[5]" : "flex-[1]"
            }`}
            aria-label={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transform: isActive ? "scale(1.05)" : "scale(1.15)" }}
              loading="lazy"
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive
                  ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  : "bg-black/55"
              }`}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 text-left transition-all duration-500 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {item.subtitle && (
                <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
                  {item.subtitle}
                </span>
              )}
              <h3 className="font-display text-2xl md:text-4xl text-primary-foreground mt-1 drop-shadow-lg">
                {item.title}
              </h3>
            </div>
            {!isActive && (
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <span className="font-display text-primary-foreground/90 text-sm md:text-base [writing-mode:vertical-rl] rotate-180 tracking-[0.3em] uppercase">
                  {item.title}
                </span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default InteractiveSelector;
