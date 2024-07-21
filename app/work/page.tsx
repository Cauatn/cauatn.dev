import type { Metadata } from "next";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function Work() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>Aqui está uma lista de projetos que atuei até agora.</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scasys</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          programador e pesquisador, set. 2023 — maio. 2024
        </p>
        <p>
          Entrei no projeto{" "}
          <a href="https://github.com/Cauatn/scasys">scasys</a> atuando como
          FullStack para o desenvolvimento de um aplicativo que auxilia cálculos
          para métricas de pesquisadores e entusiastas na área da química verde
          e ambiental ♻️.
        </p>
        <ul>
          <li>
            Implementei interfaces do painel de controle do usuário, incluindo
            todas as páginas relacionadas, para interação do usuário e
            visualização de dados.
          </li>
          <li>
            Constantimente construindo e modificando o banco de dados atingir a
            finalidade do projeto.
          </li>
          <li>
            Segui as tendências emergentes e das melhores práticas em front-end
            desenvolvimento, aprimorando continuamente habilidades e explorando
            inovações soluções para desafios técnicos.
          </li>
        </ul>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scan.ai</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Full-Stack, 2023 — 2024
        </p>
        <p>
          Entrei no projeto <a href="/">Scan.ai</a> como um dos desenvolvedores
          e coofundadores que atuam na criação desse produto.
        </p>
        <ul>
          <li>Software para o controle de produtos em vitivinícolas.</li>
          <li>
            Responsável pela construção do FrontEnd utilizando React.js e
            Tailwind CSS.
          </li>
          <li>
            Desenvolvimento de EndPoints e integração com SpringBoot para
            suportar as funcionalidades do software, utilizando Typescript.
          </li>
          <li>
            Interlocução com usuários para compreensão das necessidades e
            adaptação das soluções propostas.
          </li>
        </ul>
      </div>
    </Container>
  );
}
