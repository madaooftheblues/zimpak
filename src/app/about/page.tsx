// pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const AboutPage: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Us - ZimPak</title>
        <meta
          name="description"
          content="Learn about our company's history, mission, and affiliation with N Stars Corporation in exporting motorcycles to Zimbabwe."
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden wrapper">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/ceo.jpg"
                alt="CEO Name"
                width={300}
                height={400}
                className="h-48 w-full object-contain md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">
                CEO&apos;s Message
              </h2>
              <p className="text-gray-700 mb-4">
                &ldquo;As the CEO of ZimPak, I am proud to lead a team dedicated
                to providing high-quality motorcycles to the vibrant market of
                Zimbabwe. Our commitment to excellence, reliability, and
                customer satisfaction drives everything we do. We believe in not
                just selling motorcycles, but in fostering a lasting
                relationship with our customers and contributing to the growth
                of Zimbabwe&apos;s transportation sector.&rdquo;
              </p>
              <p className="text-gray-700 font-semibold">
                - Shouban Akhtar, Chief Executive Officer
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg overflow-hidden wrapper">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            Our mission is to empower the people of Zimbabwe with motorcycles
            that are not only affordable but also built to withstand the unique
            challenges of the local terrain. We believe in creating long-lasting
            relationships with our customers by providing vehicles that offer
            unmatched durability, efficiency, and style.
          </p>
          <p className="mb-4">
            Zimbabwe is a country full of potential, and we at ZimPak are proud
            to contribute to its growth by providing transportation solutions
            that enhance mobility and fuel economic development.
          </p>
        </section>
        <section className="rounded-lg overflow-hidden wrapper">
          <h2 className="text-2xl font-semibold mb-4">
            Our Integrated Business Ecosystem
          </h2>
          <div className="md:flex items-center">
            <div className="md:w-3/4 pr-4">
              <p className="mb-4">
                ZimPak is proud to be an integral part of a comprehensive
                motorcycle business ecosystem, working in close partnership with
                N Stars Corporation, a leading Pakistani bike spare parts
                manufacturing company. Both companies are under the same
                visionary leadership, allowing for seamless integration of our
                operations and shared commitment to quality.
              </p>
              <p className="mb-4">
                This unique synergy between ZimPak and N Stars Corporation
                enables us to control every aspect of the motorcycle production
                and export process. From manufacturing high-quality components
                to assembling and exporting finished motorcycles, our integrated
                approach ensures unparalleled quality control and customer
                satisfaction.
              </p>
              <p className="mb-4">
                By leveraging the strengths of both companies, we&apos;re able
                to offer our customers in Zimbabwe not just motorcycles, but a
                complete package of reliability, performance, and exceptional
                after-sales support.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center mt-16 sm:mt-0">
              <a href="https://nstarscorp.com">
                <Image
                  src="/n-stars.png"
                  alt="N Stars Corporation Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden wrapper">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                We adhere to strict quality control measures, enhanced by our
                affiliation with N Stars Corporation, to ensure that every
                motorcycle we export meets the highest standards of performance
                and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-700">
                Our team is dedicated to understanding and meeting the unique
                needs of the Zimbabwean market, providing tailored solutions and
                comprehensive support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Extensive Experience
              </h3>
              <p className="text-gray-700">
                With years of experience in exporting to Zimbabwe and our strong
                partnership with N Stars Corporation, we have developed deep
                insights into both manufacturing and market dynamics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Commitment to Innovation
              </h3>
              <p className="text-gray-700">
                We continuously invest in research and development,
                collaborating with N Stars to bring the latest technology and
                features to our motorcycle models.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
