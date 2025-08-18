import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="py-12">
        <h1 className="text-3xl font-semibold capitalize text-center">
          A Place where you stay updated{" "}
          <sup className="text-base border-b border-amber-500 text-amber-800">
            and you update others
          </sup>
        </h1>
        <p className="w-3/5 text-center py-2 m-auto italic">
          Avoid all the pressure that you need to go through all social media to
          find all the news you need. Artizone is fixed with all the news you
          need, posted by all trusted sources you can imagine.
        </p>
        <div className="flex justify-center py-8">
          <Button className="border border-amber-600 cursor-pointer md:px-12 md:py-4 hover:bg-amber-600 hover:text-white hover:tracking-wider">
            Click To Update Others
          </Button>
        </div>
      </div>
      <div className="bg-amber-50 pt-4">
        <h1 className="text-center text-2xl tracking-wider py-2">
          Why Trust ArtiZones To Stay Updated
        </h1>
        <div className="py-8 px-12 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/news.png"
              alt="newspapr image"
              width={100}
              height={120}
            />
            <h2 className="w-4/5 p-2">
              You'll be able to get the latest news across all sectors, let it
              be political, economical, socially or even sports
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/price.png"
              alt="free-price image"
              width={100}
              height={120}
            />
            <h2 className="w-4/5 p-2">
              Funny part ArtiZone is all Free, no need to pay anything to acess
              all news on the platform. Yet!!,, just kidding with you
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/secure.png"
              alt="secure image"
              width={100}
              height={120}
            />
            <h2 className="w-4/5 p-2">
              A secure website following all ICT act of Information Technology
              2018 from the constitution of Kenya. Keeping Users information
              secure and protected.
            </h2>
          </div>
        </div>
      </div>
      <div className="py-6">
        <h1 className="text-center text-2xl tracking-wider py-2 px-12">
          Some Articles Written By Our Authors
        </h1>
      </div>
    </div>
  );
};

export default Hero;
