import Container from "@/components/shared/container";
import Social from "@/components/social";

export default function About() {
  return (
    <Container size="large">
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        Oi, eu sou Cauã Tavares.
      </p>
      <div className="prose prose-zinc dark:prose-invert text-zinc-800 dark:text-zinc-200 text-justify">
        <p>
          Graduando em Engenharia de computação, trabalho na área de pesquisa
          científica junto com a programação, especializado no desenvolvimento
          de software, minha dedicação está na criação de aplicações focadas em
          qualidade e experiências de usuário para trazer maior valor ao
          cliente.
        </p>
        <hr />
        <p>
          Impulsionado pelo amor a criação software, fico feliz ao receber
          feedback dos usuários e melhorar a experiência. É gratificante
          otimizar a soluçaão e focar no processo da construção de algo novo.
        </p>
        <p className="mb-8">
          Fora do trabalho, gosto de criar coisas que resolvem desafios
          relacionados à web e simplificam o fluxo de trabalho de empresas ou
          pessoas.
        </p>
      </div>
      <Social />
    </Container>
  );
}
