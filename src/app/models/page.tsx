// pages/models/index.tsx
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MOTOR_BIKES } from "../constants";

const ModelsPage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Our Motorcycle Models - ZimPak</title>
        <meta
          name="description"
          content="Explore our range of high-quality motorcycles for the Zimbabwean market."
        />
      </Head>

      <div className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Motorcycle Models
        </h1>

        <div className="space-y-8">
          {MOTOR_BIKES.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden wrapper"
            >
              <div className="md:flex justify-center items-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="h-48 w-full object-contain md:w-72"
                    src={model.img}
                    alt={model.title}
                    height={300}
                    width={300}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {model.quirk}
                  </div>
                  <h2 className="block mt-1 text-2xl leading-tight font-bold text-black">
                    {model.title}
                  </h2>
                  <p className="mt-2 text-gray-500">{model.descShort}</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Key Specs:
                    </h3>
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <li>
                        <span className="font-medium">Engine:</span>{" "}
                        {model.specs?.engine}
                      </li>
                      <li>
                        <span className="font-medium">Displacement:</span>{" "}
                        {model.specs?.displacement}
                      </li>
                      <li>
                        <span className="font-medium">Fuel Capacity:</span>{" "}
                        {model.specs?.petrolCapacity}
                      </li>
                      <li>
                        <span className="font-medium">Weight:</span>{" "}
                        {model.specs?.dryWeight}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/models/${model.id}`}
                      className="inline-block font-bold rounded transition duration-300"
                    >
                      <button className="px-4 py-2 rounded">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
