import DynamicIcon from "@/components/Dynamic/DynamicIcon";
import { StyledButton } from "@/components/index";
import { Skills } from "@/components/Skills/index";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div>
        <p className="text-primary-600 font-bold text-2xl md:text-3xl text-center">
          Sobre mí
        </p>
        <p className="text-2xl md:text-1xl">
          Soy un desarrollador Frontend con un fuerte compromiso hacia el éxito
          de cada proyecto. Mi experiencia me ha dotado de una rápida capacidad
          de aprendizaje y habilidad para aplicar mis conocimientos de manera
          efectiva. Soy responsable, adaptable y con un enfoque de trabajo en
          equipo, siempre buscando excelencia en todo lo que hago.
        </p>
      </div>
      <div className="flex justify-center">
        <StyledButton
          color="primary"
          size="lg"
          as={Link}
          target="_blank"
          href="/cv.pdf"
          startContent={
            <DynamicIcon
              library="bs"
              iconName="BsFillFileTextFill"
              size={"1.7em"}
            />
          }
        >
          Descargar HV
        </StyledButton>
      </div>
      <Skills />
    </div>
  );
};

export default AboutPage;
