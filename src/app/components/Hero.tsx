function Hero() {
  return (
    <section className="h-min-96 text-white relative py-28">
      <div className="absolute inset-0 bg-hero-img bg-center bg-no-repeat bg-cover -z-10"></div>
      <div className="absolute inset-0 bg-dark opacity-40 -z-10"></div>
      <div className="px-4 text-secondary dark:text-primary w-1/2 min-w-72">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight py-4 animate-pulse">
          Welcome to ZimPak
        </h1>
        <p className="md:text-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          placeat nesciunt sapiente minus cumque temporibus error eveniet
          distinctio eum ipsam?
        </p>
      </div>
    </section>
  );
}

export default Hero;
