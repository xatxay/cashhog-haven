"use client";
import Image from "next/image";
// import Image from "next/image";
import StackImages from "../dragSlide/dragSlider";
import ImageSlider from "../dragSlide/imageSlide";
import useGetLargeScreenSize from "@/app/hooks/useGetLargeScreen";
import useGetMediumScreen from "@/app/hooks/useGetMdScreen";
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

  const isLargeScreenSize = useGetLargeScreenSize();
  const isMediumScreenSize = useGetMediumScreen();
  return (
    <div
      // style={{
      //   backgroundImage: `url('/about-background.png')`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className="flex h-screen w-full items-center justify-center border-t-2 border-t-black bg-gradient-to-b from-green-200 via-blue-300  to-pink-300"
    >
      {isLargeScreenSize ? (
        <StackImages pictures={pictures} />
      ) : isMediumScreenSize ? (
        <ImageSlider pictures={pictures} />
      ) : (
        <div className="m-2 flex h-full w-full flex-row flex-wrap items-center justify-between">
          {pictures.map((pic) => {
            return (
              <Image
                src={pic}
                key={pic}
                width={180}
                height={180}
                alt="gallery pictures"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
