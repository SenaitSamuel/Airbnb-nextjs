import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className=" flex relative cursor-pointer">
      <div className=" realtive h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32  w-full left-12">
        <h3 className="text-4xl pb-3 w-64 font-bold ">{title}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="px-4 py-2 mt-5 test-sm bg-gray-900 text-white shadow-md rounded-lg  cursor-pointer  hover:bg-gray-200 hover:text-black "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
