import classNames from "classnames";
import { PrivateSlider } from "../PrivateEvents/PrivateSlider";

export const AboutInfo = () => {
  const paragraphStyle = classNames(
    "px-2 pt-4 md:text-xl md:leading-10 md:px-8"
  );
  return (
    <>
      <div className="flex flex-col pb-4 md:w-50vw">
        <h1 className="self-center pb-2 text-xl tracking-widest uppercase border-b-2 border-b-white w-fit">
          About
        </h1>

        <p className={paragraphStyle}>
          Since its inception over two decades ago, Il Cafone has doubled in
          size while maintaining its commitment to excellent food and service.
          Our specialty is fostering a neighborhood atmosphere with rustic
          Italian dishes at reasonable prices. For your next celebration, we
          provide the same intimate feel and delicious food for special events
          and private parties.
        </p>
        <p className={paragraphStyle}>
          Il Cafone welcomes you to a warm and relaxed ambience. As you approach
          the restaurant you will discover a beautiful display of grapevines.
          Feel free to pluck them durning the spring time, for when they are
          most riped. Once you have entered inside, you suddenly feel the warmth
          and rustic smell of our brick pizza oven. While you wine and dine, our
          vintage Italian paintings bring a cozy and uplifting feel.
        </p>
      </div>

      <div className="flex flex-col md:w-50vw md:px-6">
        <h1 className="self-center pb-2 text-xl tracking-widest uppercase border-b-2 w-fit border-b-white">
          Hours of Operation
        </h1>
        <p className="pt-4 text-lg lg:text-xl">
          7 Ridge Road | Lyndhurst, New Jersey 07071 | 201.933.3355
        </p>
        <div className="flex justify-between py-8">
          <h2 className="text-lg tracking-wide uppercase">Tuesday - Friday</h2>
          <div className="flex flex-col items-end">
            <p>11:30AM - 2:30PM</p>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr className="w-full h-1 bg-white" />
        <div className="flex justify-between py-8">
          <h2 className="text-lg tracking-wide uppercase">Saturday</h2>
          <div>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr className="w-full h-1 bg-white" />

        <div className="flex justify-between py-8">
          <h2 className="text-lg tracking-wide uppercase">Sunday</h2>
          <div>
            <p>1PM - 9PM</p>
          </div>
        </div>
        <PrivateSlider />
      </div>
    </>
  );
};
