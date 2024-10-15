import { Instructor } from "@/services/instrutores";
import Image from "next/image";

interface InstructorCardProps {
  index: number;
  instrutor: Instructor;
}

export const InstructorCard = ({ index, instrutor }: InstructorCardProps) => {
  return (
    <div
      key={index}
      className="flex flex-row items-center justify-start gap-4 w-full border-2 border-[--blue-80] rounded-md p-4 md:w-[300px]"
    >
      <Image
        src={instrutor.picture}
        alt={instrutor.name}
        width={50}
        height={50}
      />
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-lg font-bold">{instrutor.name}</h2>
        <p className="text-sm text-gray-500">{instrutor.description}</p>
      </div>
    </div>
  );
};
