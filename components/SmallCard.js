import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
      {/* left div */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* right div */}
      <div>
        <h1>{location}</h1>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
