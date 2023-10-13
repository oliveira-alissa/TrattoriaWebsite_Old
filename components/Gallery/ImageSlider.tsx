import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import imageData from "./ImageData";
import { GalleryLeftArrow } from "../UI/GalleryLeftArrow";
import GalleryRightArrow from "../UI/GalleryRightArrow";

export const ImageSlider = () => {
  const [index, setIndex] = useState<number>(0);

  const onSlideRightHandler = () => {
    setIndex(index === imageData.length - 1 ? 0 : index + 1);
  };

  const onSlideLeftHandler = () => {
    setIndex(index === 0 ? imageData.length - 1 : index - 1);
  };

  return (
    <AnimatePresence>
      <div className="relative flex items-center justify-evenly">
        <GalleryLeftArrow slideLeft={onSlideLeftHandler} />
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-80 sm:w-50vw"
        >
          <div className="mx-auto lg:w-35vw">
            <Image
              src={imageData[index].src}
              alt={imageData[index].title}
              layout="responsive"
              width={350}
              height={300}
              className="rounded-xl"
              priority
            />
            <motion.p
              className="pt-4 leading-6 text-md md:text-lg lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {imageData[index].title}
            </motion.p>
          </div>
        </motion.div>
        <GalleryRightArrow slideRight={onSlideRightHandler} />
      </div>
    </AnimatePresence>
  );
};
