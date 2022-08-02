import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] m:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-sm sm:text-lg marker:border-2 rounded-full 
        px-10 py-4 shadow-md bg-white text-purple-500 font-bold my-3 hover:shadow-xl active:scale-90
        transition duration-150">
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Banner;