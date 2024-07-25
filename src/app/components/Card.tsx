import Image from "next/image";

function Card({ title, img }: { title: string; img: string }) {
  return (
    <div className="py-10 min-w-72 flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg hover:scale-105 duration-150 hover:duration-150">
      <div className="relative min-h-52 max-w-sm w-full">
        <Image src={img} alt={`Image of a ${title}`} fill />
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}

export default Card;
