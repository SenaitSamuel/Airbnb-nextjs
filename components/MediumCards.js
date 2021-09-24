import Image from "next/image";
function MediumCards({ img, title }) {
  return (
    <div className=" m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transform transition  duration-300 ease-out">
      <div className=" flex items-center relative h-80 w-80 ">
        <Image
          className="w-2xl h-40 rounded-xl"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCards;
