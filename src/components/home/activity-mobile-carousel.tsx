"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { spring } from "motion";
import { ACTIVITIES } from "./activity";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  bounce: 0,
  duration: 0.8,
};

export const ActivityMobileCarousel = () => {
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
          if (pv === ACTIVITIES.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < ACTIVITIES.length - 1) {
      setImgIndex((pv) => pv + 1);
      setIsInteracted(true);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
      setIsInteracted(true);
    }
  };

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
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {ACTIVITIES.map(({ imageSrc, desc, name }, idx) => {
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
            className="w-full shrink-0 rounded-[2.5rem] max-sm:rounded-[2rem]  flex flex-col gap-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={name}
              className="h-[230px] w-full rounded-[1.25rem] object-cover"
              loading="lazy"
              decoding="async"
            />

            <div className="border border-[#F3F3F3] rounded-[1.25rem] p-5 flex flex-col gap-4">
              <h3 className="font-satoshi font-bold text-xl leading-[1.2] text-[#1C1C1C]">
                {name}
              </h3>

              <p>{desc}</p>
            </div>
          </motion.div>
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
    <div className="mt-3 flex w-full justify-center gap-1.5">
      {ACTIVITIES.map((_, idx) => {
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
