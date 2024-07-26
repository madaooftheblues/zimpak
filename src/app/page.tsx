import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import Showcase from "./components/Showcase";
import Updates from "./components/Updates";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Updates />
      <Perks />
      <ContactForm />
    </>
  );
}
