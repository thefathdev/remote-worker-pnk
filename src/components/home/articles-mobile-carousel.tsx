"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { spring } from "motion";
import { ArticleCard } from "./articles";
import { POSTS_QUERYResult } from "../../../sanity.types";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  bounce: 0,
  duration: 0.8,
};

type ArticlesMobileCarouselProps = {
  data: POSTS_QUERYResult;
};

export const ArticlesMobileCarousel = ({
  data,
}: ArticlesMobileCarouselProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  const [isInteracted, setIsInteracted] = useState(false);

  const dragX = useMotionValue(0);

  useEffect(() => {
    if (isInteracted) {
      return;
    }

    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === data.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [isInteracted]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < data.length - 1) {
      setImgIndex((pv) => pv + 1);
      setIsInteracted(true);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
      setIsInteracted(true);
    }
  };

  if (!data) return null;

  return (
    <div className="relative overflow-hidden">
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
        <Images imgIndex={imgIndex} data={data} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} data={data} />
      {/* <GradientEdges /> */}
    </div>
  );
};

type ImagesProps = {
  imgIndex: number;
  data: POSTS_QUERYResult;
};

const Images = ({ imgIndex, data }: ImagesProps) => {
  return (
    <>
      {data.map((article, idx) => {
        return (
          <motion.div
            key={idx}
            style={
              {
                // backgroundImage: `url(${imageSrc})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // height: height,
              }
            }
            animate={{
              scale: imgIndex === idx ? 1 : 0.85,
              // filter: imgIndex === idx ? "blur(0px)" : "blur(10px)",
              opacity: imgIndex === idx ? 1 : 0.25,
            }}
            transition={SPRING_OPTIONS}
            className="w-full shrink-0"
          >
            <ArticleCard article={article} />
          </motion.div>
        );
      })}
    </>
  );
};

type DotsProps = {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  data: POSTS_QUERYResult;
};

const Dots = ({ imgIndex, setImgIndex, data }: DotsProps) => {
  return (
    <div className="mt-3 flex w-full justify-center gap-1.5">
      {data.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 rounded-full transition-all duration-[800ms]  ${
              idx === imgIndex ? "bg-[#DFE2E4] w-10" : "bg-[#EEF0F2] w-3"
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
