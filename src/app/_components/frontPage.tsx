import NavBar from "./navBar";
import welcomePic from "../../styles/welcomePic.jpg";
import Image from "next/image";

const FrontPage = () => {
  return (
    <div className="flex h-screen w-full bg-sky-200">
      <NavBar />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-3/4">
          <h3 className="text-6xl">Bank on Us, Not on Runs</h3>
        </div>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex h-3/4 w-3/4 items-center justify-center">
          <Image
            src={welcomePic}
            alt="Welcome page pic"
            className="w-3/5 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
