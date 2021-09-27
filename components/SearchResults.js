import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className=" flex py-7 pr-4 px-2 border-b cursor-pointer hover:shadow-lg hover:opacity-80 transition duration-500 first:border-t">
      <div className="relative h-24 w-40  md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          className="border-2 rounded-2xl "
          src={img}
          layout="fill"
          objectFit="cover"
          alt="im"
        />
      </div>

      <div className="flex flex-col  flex-grow pl-5 space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-400"> {location}</p>
          <HeartIcon className=" h-7 cursor-pointer bg-white" />
        </div>

        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-sm text-gray-500 pt-2 flex-grow">{description}</p>

        <div className="flex pt-5 justify-between items-end ">
          <div className=" flex  items-center">
            <StarIcon className="h-5 text-red-400" />
            <p>{star}</p>
          </div>
          <div className="">
            <p className=" text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className=" text-right  font-extralight text-gray-400">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
