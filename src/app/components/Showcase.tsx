import { MOTOR_BIKES } from "../constants";
import Card from "./Card";

function Showcase() {
  return (
    <section>
      {MOTOR_BIKES.map((bike) => (
        <Card title={bike.title} img={bike.img} key={bike.key} />
      ))}
    </section>
  );
}

export default Showcase;
