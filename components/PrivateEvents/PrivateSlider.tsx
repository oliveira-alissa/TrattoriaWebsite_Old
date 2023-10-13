import { data } from "./Images";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export const PrivateSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) => (current === data.length - 1 ? 0 : current + 1)),
      6000
    );

    return () => clearInterval(interval);
  }, [index, data]);

  return (
    <div className="pt-8">
      <div className="max-w-md m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="whitespace-nowrap"
        >
          {data.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Trattoria Restaurant"
              width={500}
              height={500}
              className="inline-block mx-2 my-2 rounded-3xl"
              priority
            />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center pt-4">
        {data.map((dot, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className={classNames(
              "mx-2",
              "w-4",
              "h-4",
              "bg-header",
              "rounded-lg",
              "cursor-pointer",
              "inline-block",
              { "bg-active": index === idx }
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
