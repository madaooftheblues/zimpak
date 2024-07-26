import Image from "next/image";

const Perks = () => {
  return (
    <section className="wrapper grid grid-cols-1 sm:grid-cols-2 ">
      <div className="bg-primary text-secondary p-8 ">
        <ul className="grid gap-4">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            quisquam.
          </li>
          <li>
            Quo amet iusto eveniet cum, corporis illum animi quasi. Explicabo.
          </li>
          <li>
            Illo et sit esse veritatis, necessitatibus nulla obcaecati
            reprehenderit fugit!
          </li>
          <li>
            Provident possimus repellat optio, iure animi molestias minima
            dolorem a?
          </li>
        </ul>
      </div>
      <div className="bg-secondary text-primary text-center order-first sm:order-last">
        <Image
          src={"/bike.jpg"}
          alt="photograph of a motorcycle"
          height={100}
          width={300}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Perks;
