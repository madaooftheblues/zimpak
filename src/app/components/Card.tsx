import Image from "next/image";

function Card({ title, img }: { title: string; img: string }) {
  return (
    <div>
      <div className="relative">
        <Image src={img} alt={`Image of a ${title}`} fill />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
