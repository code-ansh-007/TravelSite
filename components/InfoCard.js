import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({
  img,
  star,
  location,
  price,
  long,
  lat,
  total,
  title,
  description,
}) {
  return (
    <div className="flex my-2 items-center hover:scale-105 transition transform duration-200 ease-out hover:bg-gray-100 pl-3 p-2 rounded-md hover:shadow-lg border-b first:border-t last:mb-10 md:px-20">
      {/* the first:border-t tailwind utility class allows us to access the first child of the parent in the list */}
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-[10px] text-gray-600">{location}</p>
          <HeartIcon className="h-6 cursor-pointer" />
        </div>
        <div className="text-sm sm:text-xl md:text-xl lg:text-2xl">{title}</div>
        <div className="border-b pt-1 w-20" />
        <p className="text-xs hidden sm:inline-flex text-gray-600 flex-grow pt-2">
          {description}
        </p>
        <div className="flex justify-between mt-3">
          <div>
            <p className="flex items-center">
              <StarIcon className="h-5 text-green-400 pl-3" />
              <p className="pl-1 text-[10px]">{star}</p>
            </p>
          </div>
          <div>
            <p className="sm:text-lg text-[12px] lg:text-xl">{`$${price}/night`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
