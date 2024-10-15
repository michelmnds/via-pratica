import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="xl:flex-row xl:justify-between xl:px-20 border-t border-black border-opacity-20 flex items-start justify-center px-3 py-5 flex-col gap-6">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/icons/logo.png" alt="Via Prática" width={20} height={20} />
        <Link
          href="/about"
          className="pl-2 text-sm border-r pr-2 border-black text-black border-opacity-20 hover:bg-gray-100"
        >
          Serviços
        </Link>
        <Link
          href="/about"
          className="text-sm  border-r pr-2 border-black text-black border-opacity-20 hover:bg-gray-100"
        >
          Instrutores
        </Link>
        <Link
          href="/contact"
          className="text-sm  border-r pr-2 border-black text-black border-opacity-20 hover:bg-gray-100"
        >
          Contacto
        </Link>
      </div>
      <h1 className="text-sm">© 2024 Via Prática. Direitos reservados.</h1>
    </footer>
  );
};
