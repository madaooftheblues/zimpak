import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import Showcase from "./components/Showcase";
import Updates from "./components/Updates";
import Slider from "./components/Slider";
import { AWARDS, CERTS } from "./constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Updates />
      <Perks />
      <Slider title="Certifications" slides={CERTS} />
      <Slider title="Awards" slides={AWARDS} />
      <ContactForm id={"contact"} />
    </>
  );
}
