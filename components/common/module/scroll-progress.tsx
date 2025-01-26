"use client";

import { motion, SpringOptions, useScroll, useSpring } from "motion/react";
import { cn } from "@/libs/utils";
import { RefObject } from "react";

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

function ScrollProgressAnimate({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: Boolean(containerRef?.current),
  });

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn("inset-x-0 top-0 h-2 origin-left", className)}
      style={{
        scaleX,
      }}
    />
  );
}

const ScrollProgress = (props: ScrollProgressProps) => {
  return (
    <div className={`fixed top-0 w-full z-50`}>
      <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900" />
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <div className="absolute left-0 top-0 h-1 w-full" />
        <ScrollProgressAnimate {...props} className="absolute top-0 bg-theme" />
      </div>
    </div>
  );
};

export default ScrollProgress;
