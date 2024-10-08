import Image from "next/image";

const Perks = () => {
  return (
    <section className="wrapper grid grid-cols-1 lg:grid-cols-2 ">
      <div className="bg-primary text-secondary p-8 ">
        <ul className="grid gap-4 list-disc">
          <li>
            Crafted with Precision
            <br />
            Our motorcycles are crafted with precision and care, using the best
            materials and manufacturing processes.
          </li>
          <li>
            Affordable Prices
            <br />
            Our goal is to make reliable transportation accessible to everyone
            in Zimbabwe, without compromising on standards.
          </li>
          <li>
            Expertise and Experience
            <br />
            With years of experience in the motorcycle industry, we understand
            the needs of our customers.
          </li>
        </ul>
      </div>
      <div className="bg-secondary text-primary text-center order-first sm:order-last">
        <Image
          src={"/bike.jpg"}
          alt="photograph of a motorcycle"
          height={200}
          width={400}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Perks;
