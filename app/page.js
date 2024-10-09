import BgAnimation from "./components/BgAnimation";
import CoreAnimation from "./components/CoreAnimation";
import Forms from "./components/forms";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-black">
      <div className="w-1/2 h-full justify-center items-center md:block hidden">
        <CoreAnimation />
      </div>
      <div className="md:w-1/2 w-full h-full flex justify-center items-center z-10 overflow-auto">
        <Forms />
      </div>
      
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BgAnimation />
      </div>
    </div>

  );
}

