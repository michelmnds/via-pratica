import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title: string;
  linePosition?: "left" | "right";
  id: string;
}

export const Section = ({
  children,
  id,
  title,
  linePosition,
}: SectionProps) => {
  return (
    <div id={id} className="flex flex-col gap-8 w-full">
      <div className="flex flex-row items-center justify-center gap-2 w-full">
        {linePosition === "left" && (
          <hr className="flex-grow border-t-2 border-[--blue-80] mr-1" />
        )}
        <h1 className="text-2xl font-bold whitespace-nowrap">{title}</h1>
        {linePosition === "right" && (
          <hr className="flex-grow border-t-2 border-[--blue-80] ml-1" />
        )}
      </div>
      {children}
    </div>
  );
};
