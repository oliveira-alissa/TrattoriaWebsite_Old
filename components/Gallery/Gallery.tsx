import { ImageSlider } from "./ImageSlider";

export const Gallery = () => {
  return (
    <section id="Gallery" className="flex flex-col py-20">
      <h1 className="self-center py-2 mb-8 text-xl tracking-widest uppercase border-b-2 border-b-lightGrayOne">
        Gallery
      </h1>
      <ImageSlider />
    </section>
  );
};
