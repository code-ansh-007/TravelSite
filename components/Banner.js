import Image from "next/image";
import fallPic from "../images/fall_4.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image src={fallPic} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg lg:text-4xl text-white font-bold ">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-5 py-2 rounded-full mt-3 font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
