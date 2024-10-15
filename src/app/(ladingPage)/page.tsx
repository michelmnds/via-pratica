import { cartas } from "@/services/cartas";
import { Section } from "./components/Section";
import { ServiceCard } from "./_partials/ServiceCard";
import { instrutores } from "@/services/instrutores";
import { InstructorCard } from "./_partials/InstructorCard";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

export default function LadingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-3 lg:px-6 gap-10 w-full">
      <Section id="about" title="Quem somos?" linePosition="right">
        <p className="text-start text-md">
          A Via Prática é uma escola de condução que oferece cursos de condução
          para todas as categorias de veículos. <br /> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </p>
      </Section>
      <Section id="teachers" title="Instrutores" linePosition="left">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap">
          {instrutores.map((instrutor, index) => (
            <InstructorCard key={index} index={index} instrutor={instrutor} />
          ))}
        </div>
      </Section>
      <Section id="services" title="Serviços" linePosition="right">
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row md:flex-wrap lg:justify-evenly">
          {cartas.map((carta, index) => (
            <ServiceCard key={index} index={index} carta={carta} />
          ))}
        </div>
      </Section>

      <Section id="contacts" title="Contactos" linePosition="left">
        <div className="flex flex-col items-start justify-center gap mb-10 gap-8">
          <Link
            target="_blank"
            href="https://wa.me/123123123"
            className="flex flex-row items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp size={30} />
            <h1 className="text-lg font-bold text-[--blue-80]">
              +351 123 123 123
            </h1>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com"
            className="flex flex-row items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaInstagram size={30} />
            <h1 className="text-lg font-bold text-[--blue-80]">@instagram</h1>
          </Link>
          <Link
            target="_blank"
            href="mailto:email@mail.com"
            className="flex flex-row items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <MdAlternateEmail size={30} />
            <h1 className="text-lg font-bold text-[--blue-80]">
              email@mail.com
            </h1>
          </Link>
        </div>
      </Section>
    </div>
  );
}

