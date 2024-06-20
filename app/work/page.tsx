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
          Entrei no projeto
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
          frontend engineer, 2023 — 2024
        </p>
        <p>
          Entrei no projeto <a href="/">Scan.ai</a> como um dos desenvolvedores
          e coofundadores que atuam na criação desse produto.
        </p>
        <ul>
          <li>Software para o controle de produtos em vitivinícolas.</li>
          <li>Em desenvolvimento.</li>
          {/*<li>Developed rule-based form builder for brands.</li>
          <li>
            Developed and implemented user and enterprise dashboard interface,
            including all related pages, for user interaction and data
            visualization.
          </li>
          <li>
            Stayed abreast of emerging trends and best practices in front-end
            development, continually honing skills and exploring innovative
            solutions to technical challenges.
          </li>
          <li>
            Developed the{" "}
            <a href="https://app.utilify.xyz/ucl">Campaign page</a> for the
            souvenir NFT distributed for the UCL final in partnership with
            Turkish Airlines.
          </li> */}
        </ul>
      </div>
    </Container>
  );
}
