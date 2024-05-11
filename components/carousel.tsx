"use client";
import { motion as m, useMotionValue } from "framer-motion";
import { Circle, CircleDot } from "lucide-react";
import { useEffect, useState } from "react";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const ImageCarousel = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImageIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, [dragX, images.length]);

  function onDragStart() {
    setDragging(true);
    console.log("start");
  }

  function onDragEnd() {
    setDragging(false);
    const x = dragX.get();
    const dragDistance = Math.abs(x);

    if (dragDistance >= DRAG_BUFFER) {
      if (x > 0 && imageIndex > 0) {
        setImageIndex((prev) => prev - 1);
      } else if (x < 0 && imageIndex < images.length - 1) {
        setImageIndex((prev) => prev + 1);
      }
    }
  }

  return (
    <div className=" relative min-h-screen overflow-hidden w-full">
      <m.div
        className="flex items-center cursor-grab active:cursor-grabbing w-full"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        animate={{
          translateX: `-${imageIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{
          x: dragX,
        }}
      >
        {images.map(({ url, alt }, index) => (
          <m.div
            key={index}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            // animate={{ does not look nice for this partical animation
            //   scale: imageIndex === index ? 1 : 0.95,
            // }}
            transition={SPRING_OPTIONS}
            className=" aspect-video w-screen shrink-0 bg-neutral-100 object-cover "
          />
        ))}
      </m.div>
      <div className=" absolute bottom-0 w-full flex justify-center gap-x-1 p-5">
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <div className=" bg-white h-3 w-3 rounded-full transition-colors"></div>
            ) : (
              <div className=" bg-neutral-200 h-3 w-3 rounded-full transition-colors"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
