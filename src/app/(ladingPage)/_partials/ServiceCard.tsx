import Image from "next/image";

interface ServiceCardProps {
  index: number;
  carta: any;
}

export const ServiceCard = ({ index, carta }: ServiceCardProps) => {
  return (
    <div
      key={index}
      className="flex flex-col items-start h-[310px] justify-between gap-4 md:w-[300px]"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={carta.image}
          alt={carta.category}
          width={200}
          height={133}
          className="h-[120px] w-[200px]"
        />
        <div>
          <h2 className="text-xl font-bold mb-2 text-start">
            {carta.category}
          </h2>
          <p className="text-gray-600 text-start text-sm">
            {carta.description}
          </p>
        </div>
      </div>
      <button className="bg-[--blue-80] text-white px-4 py-2 rounded-md">
        Contacte-nos
      </button>
    </div>
  );
};
