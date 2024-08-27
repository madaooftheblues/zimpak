import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MOTOR_BIKES } from "../../constants";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function ModelPage({ params }: { params: { id: number } }) {
  const { id } = params;
  const model = MOTOR_BIKES.find((bike) => bike.id == id);
  if (!model) return <div>No such Model</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{model.title} - ZimPak</title>
        <meta name="description" content={model.desc} />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <section className="md:flex wrapper">
            <div className="md:flex-shrink-0">
              <Image
                className="min-h-48 w-full object-cover md:w-96"
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
              <h1 className="mt-1 text-4xl font-bold text-gray-900">
                {model.title}
              </h1>
              <p className="mt-2 text-gray-600">{model.desc}</p>
            </div>
          </section>

          <section className="px-8 py-6 border-t border-gray-200 wrapper">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Specifications
            </h2>
            <dl className="grid grid-cols-2 gap-4">
              {Object.entries(model.specs).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="px-8 py-6 border-t border-gray-200 wrapper">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {model.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="px-8 py-6 border-t border-gray-200 wrapper">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h2>
            <p className="mb-4">
              Interested in the {model.title}? Get in touch with us for pricing
              and availability.
            </p>
            <Link href={"/#contact"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Contact
              </button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
