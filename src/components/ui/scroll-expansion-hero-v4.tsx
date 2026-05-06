'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  mediaSrc: string;
  bgImages: string[];
  bgInterval?: number;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandHeroV4 = ({
  mediaSrc,
  bgImages,
  bgInterval = 4500,
  subtitle,
  scrollToExpand,
  children,
}: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bgImages.length <= 1 || mediaFullyExpanded) return;
    const id = setInterval(() => setBgIndex((i) => (i + 1) % bgImages.length), bgInterval);
    return () => clearInterval(id);
  }, [bgImages.length, bgInterval, mediaFullyExpanded]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const newProgress = Math.min(Math.max(scrollProgress + e.deltaY * 0.0009, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) setShowContent(false);
      }
    };
    const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const newProgress = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) setShowContent(false);
        setTouchStartY(e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={bgImages[bgIndex]}
                src={bgImages[bgIndex]}
                alt="Fondo"
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: 'linear' } }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0,0,0,0.3)',
                }}
              >
                <div className="relative w-full h-full">
                  <img src={mediaSrc} alt="Flora Boutique" className="w-full h-full object-cover rounded-xl" />
                  <motion.div
                    className="absolute inset-0 bg-black/60 rounded-xl"
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 0.85 - scrollProgress * 0.6 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 mt-4 px-4">
                <div className="flex flex-col items-center gap-2 w-full">
                  <motion.h1
                    className="font-seasons text-5xl md:text-7xl lg:text-8xl text-primary-foreground italic drop-shadow-lg leading-none"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    Flora
                  </motion.h1>
                  <motion.div
                    className="flex flex-col items-center"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    <h2 className="font-seasons not-italic tracking-[0.35em] md:tracking-[0.5em] text-2xl md:text-4xl lg:text-5xl text-primary-foreground drop-shadow-lg">
                      BOUTIQUE
                    </h2>
                    {/* Flourish ornament inspired by logo */}
                    <svg
                      className="mt-2 md:mt-3 w-56 md:w-80 text-primary-foreground/90"
                      viewBox="0 0 320 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    >
                      <path d="M10 12 C 40 2, 60 22, 90 12 S 140 2, 160 12 S 220 22, 250 12 S 300 2, 310 12" />
                      <circle cx="160" cy="12" r="1.6" fill="currentColor" />
                      <path d="M40 12 c -4 -4, -10 -4, -12 0 c 2 4, 8 4, 12 0 z" fill="currentColor" opacity="0.6" />
                      <path d="M280 12 c 4 -4, 10 -4, 12 0 c -2 4, -8 4, -12 0 z" fill="currentColor" opacity="0.6" />
                    </svg>
                  </motion.div>
                </div>
                {subtitle && (
                  <p
                    className="text-lg md:text-xl text-primary-foreground/90 mt-6 drop-shadow font-seasons italic"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {subtitle}
                  </p>
                )}
                {scrollToExpand && (
                  <p
                    className="text-primary-foreground/80 font-medium mt-4 animate-pulse"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHeroV4;
