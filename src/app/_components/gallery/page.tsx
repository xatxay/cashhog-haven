"use client";
// import Image from "next/image";
import StackImages from "../dragSlide/dragSlider";
// import ImageSlider from "../_components/dragSlide/imageSlide";

const Gallery = () => {
  const pictures = [
    "/galleryPicture/1.png",
    "/galleryPicture/2.png",
    "/galleryPicture/3.png",
    "/galleryPicture/4.png",
    "/galleryPicture/5.png",
    "/galleryPicture/6.png",
  ];
  return (
    <div
      // style={{
      //   backgroundImage: `url('/about-background.png')`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className="h-screen w-full border-t-2 border-t-black bg-gradient-to-b from-green-200 via-blue-300  to-pink-300"
    >
      {/* <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-4">
        {pictures.map((pic) => {
          return <ImageCard pic={pic} key={pic} />;
        })}
      </div> */}
      <StackImages pictures={pictures} />
      {/* <ImageSlider pictures={pictures} /> */}
    </div>
  );
};

export default Gallery;
