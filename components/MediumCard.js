import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-lg mt-3 pl-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
