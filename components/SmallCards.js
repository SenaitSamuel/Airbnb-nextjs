import Image from "next/image";
function SmallCards({ img, location, distance }) {
  return (
    <div className="flex items-center m-5 mt-5 space-x-4  rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-150 transform transition  duration-200 ease-out">
      <div className=" relative h-16 w-16 ">
        <Image
          className="w-2xl h-40 rounded-lg"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500"> {distance} </h2>
      </div>
    </div>
  );
}

export default SmallCards;
