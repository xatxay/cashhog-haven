import Image from "next/image";

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
      style={{
        backgroundImage: `url('/gallery-background.jpeg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full"
    >
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-4">
        {pictures.map((pic) => {
          return <ImageCard pic={pic} key={pic} />;
        })}
      </div>
    </div>
  );
};

const ImageCard = ({ pic }: { pic: string }) => {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-black">
      <Image
        src={pic}
        alt="first"
        width={325}
        height={325}
        className="rounded-3xl"
      />
    </div>
  );
};

export default Gallery;
