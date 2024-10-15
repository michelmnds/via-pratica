import Link from "next/link";

export const Dropdown = ({ isDropdownOpen }: { isDropdownOpen: boolean }) => {
  return (
    <div
      className={`absolute right-0 mt-2 w-48 bg-white border border-[--primary-color] rounded-md shadow-lg py-1 z-10 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
        isDropdownOpen
          ? "opacity-100 scale-y-100 max-h-[1000px]"
          : "opacity-0 scale-y-0 max-h-0"
      }`}
    >
      <Link
        href="#about"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
      >
        Sobre
      </Link>
      <Link
        href="#teachers"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
      >
        Instrutores
      </Link>
      <Link
        href="#services"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
      >
        Serviços
      </Link>
      <Link
        href="#contacts"
        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
      >
        Contactos
      </Link>
    </div>
  );
};
