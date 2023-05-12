import Image from "next/image";
import React from "react";

function LargeCard({ img, title, desc, buttonText }) {
  return (
    <section className="py-10 cursor-pointer relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-40 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="font-semibold">{desc}</p>
        <button className="text-sm text-white bg-black rounded-lg px-3 py-2 mt-3 shadow-lg active:scale-105 transition transform duration-125">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
