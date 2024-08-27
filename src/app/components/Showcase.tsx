import Link from "next/link";
import { MOTOR_BIKES } from "../constants";
import Image from "next/image";

function Showcase() {
  return (
    <section className="py-12 wrapper">
      <h2 className="text-2xl font-semibold mb-16 text-center">Our Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOTOR_BIKES.map((bike) => (
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-150 hover:duration-150"
            key={bike.id}
          >
            <Image
              src={bike.img}
              alt={bike.title}
              width={300}
              height={300}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{bike.title}</h3>
            <p className="italic font-medium opacity-90">{`${bike.quirk}`}</p>
            <p className="mb-4">{bike.descShort}</p>
            <Link href={`/models/${bike.id}`}>
              <button className="px-4 py-2 rounded">Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
