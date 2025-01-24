"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { spring } from "motion";

const imgs = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  bounce: 0,
  duration: 0.8,
};

export const HeroCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const [wrapperHeight, setWrapperHeight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const dragX = useMotionValue(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperHeight(wrapperRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden" ref={wrapperRef}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} height={wrapperHeight} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex, height }: { imgIndex: number; height: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: height,
            }}
            animate={{
              scale: imgIndex === idx ? 1 : 0.85,
              // filter: imgIndex === idx ? "blur(0px)" : "blur(10px)",
              opacity: imgIndex === idx ? 1 : 0.25,
            }}
            transition={SPRING_OPTIONS}
            className="_aspect-square w-full shrink-0 rounded-[2.5rem] bg-[#FBFBFB] object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="absolute flex w-full justify-center gap-1.5 z-20 bottom-6">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 rounded-full transition-all duration-[800ms]  ${
              idx === imgIndex
                ? "bg-white w-10 opacity-100"
                : "bg-[#DFE2E4] w-3 opacity-80"
            }`}
            style={{
              transitionTimingFunction: `${spring(0.8, 0)}`,
            }}
          />
        );
      })}
    </div>
  );
};
