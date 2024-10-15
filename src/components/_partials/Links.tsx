import Link from "next/link";

export const Links = () => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center gap-2">
      <Link
        href="#about"
        className="block px-4 py-2 text-sm xl:text-base text-black hover:text-[--blue-80]"
      >
        Sobre
      </Link>
      <Link
        href="#teachers"
        className="block px-4 py-2 text-sm xl:text-base text-black hover:text-[--blue-80]"
      >
        Instrutores
      </Link>
      <Link
        href="#services"
        className="block px-4 py-2 text-sm xl:text-base text-black hover:text-[--blue-80]"
      >
        Serviços
      </Link>
      <Link
        href="#contacts"
        className="block px-4 py-2 text-sm xl:text-base text-black hover:text-[--blue-80]"
      >
        Contactos
      </Link>
    </div>
  );
};
