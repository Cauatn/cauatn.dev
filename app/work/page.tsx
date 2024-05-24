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
        <p>
          Com o objetivo de criar aplicações que engajem e facilitem interações
          com os úsuarios e tragam resultados para os projetos que atuo, aqui
          está um resumo do que fiz até agora.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scan.ai</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          frontend engineer, 2023 — 2024
        </p>
        <p>
          Entrei na <a href="/">Scan.ai</a> como FullStack e atuei no
          desenvolvimento de interfaces de usuário, incluindo páginas de marca,
          formulários, painéis de controle da empresa.
        </p>
        <ul>
          <li>
            Successfully converted wireframe designs into active working user
            interface components.
          </li>
          <li>Developed rule-based form builder for brands.</li>
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
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert text-justify">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Lapess</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          estudante e pesquisador, 2023 — 2024
        </p>
        <p>
          Entrei na <a href="https://utilify.xyz">Scan.ai</a> como FullStack e
          atuei no desenvolvimento de interfaces de usuário, incluindo páginas
          de marca, formulários, painéis de controle da empresa.
        </p>
        <ul>
          <li>
            Successfully converted wireframe designs into active working user
            interface components.
          </li>
        </ul>
      </div>
    </Container>
  );
}
