import Link from "next/link";

function Hero() {
  return (
    <section className="h-min-96 text-white relative py-28">
      <div className="absolute inset-0 bg-hero-img bg-center bg-no-repeat bg-cover -z-10"></div>
      <div className="absolute inset-0 bg-dark opacity-40 -z-10"></div>
      <div className="px-4 text-secondary dark:text-primary w-1/2 min-w-72">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight py-4">
          Welcome to ZimPak
        </h1>
        <p className="md:text-2xl">
          Where passion meets performance.
          <br />
          Pakistani motorcycles for Zimbabwean roads.
        </p>
        <Link href="/models">
          <button className="px-4 py-2 rounded mt-4">Explore Our Models</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
