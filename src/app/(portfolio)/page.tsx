import { StyledButton } from "../../components/Styled/StyledButton";
import { Image } from "@nextui-org/image";
import profile from "@/assets/profile.png";
import { Link } from "@nextui-org/link";
import { DynamicIcon } from "@/components/Dynamic/index";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:basis-3/4 order-2 md:order-1 flex flex-col justify-center">
          <p className="text-primary-600 font-bold text-4xl md:text-6xl">
            ¡Hola!, soy Julián Rincón
          </p>
          <p className="font-bold text-3xl md:text-4xl">
            Desarrollador frontend
          </p>
          <div className="flex gap-7 items-center mt-10">
            <StyledButton
              color="primary"
              size="lg"
              endContent={
                <DynamicIcon
                  library={"ai"}
                  iconName={"AiFillLinkedin"}
                  size={"1.7em"}
                />
              }
              href="https://www.linkedin.com/in/izix"
              as={Link}
              target="_blank"
            >
              LinkedIn
            </StyledButton>
            <StyledButton
              color="primary"
              size="lg"
              endContent={
                <DynamicIcon
                  library={"ai"}
                  iconName={"AiFillGithub"}
                  size={"1.7em"}
                />
              }
              href="https://github.com/Godplex"
              as={Link}
              target="_blank"
            >
              GitHub
            </StyledButton>
            <StyledButton
              color="primary"
              size="lg"
              endContent={
                <DynamicIcon
                  library={"bi"}
                  iconName={"BiLogoGitlab"}
                  size={"1.7em"}
                />
              }
              href="https://gitlab.com/keideriz1x"
              as={Link}
              target="_blank"
            >
              GitLab
            </StyledButton>
          </div>
        </div>
        <div className="md:basis-1/4 order-1 md:order-2 mt-6 md:mt-0 flex justify-center">
          <Image width={"250px"} alt="Profile - IZIX" src={profile.src} />
        </div>
      </div>
    </div>
  );
}
