import Footer from "@/components/footer";
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
          Graduando em Engenharia de computação, atuo com pesquisa científica
          junto com a programação, especializado no desenvolvimento Front-End,
          me dedico na criação de aplicações focadas na experiências de usuário
          para trazer maior valor ao cliente.
        </p>
        <hr className="my-8" />
        <Footer />
      </div>
      <Social />
    </Container>
  );
}
