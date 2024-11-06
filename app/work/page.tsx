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
          Aqui está uma lista de projetos profissionais que atuei até agora.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scan.ai</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Front-End, Setembro 2023 — Novembro 2024
        </p>
        <p>
          Entrei no projeto <a href="/">Scan.ai</a> como um dos desenvolvedores
          e coofundadores que atuam na criação e desenvolvimento desse software
          para o controle da rastreabilidade de produtos em vitivinícolas.
        </p>
        <ul>
          <li>
            Desenvolvimento de EndPoints e integração com SpringBoot para
            suportar as funcionalidades do software, utilizando React e React
            Native.
          </li>
          <li>
            Responsável pela construção do FrontEnd Web utilizando React.js e
            Tailwind CSS.
          </li>
          <li>
            Interlocução com usuários para compreensão das necessidades e
            adaptação das soluções propostas.
          </li>
        </ul>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Farmalibras
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Front-End, Setembro — Presente
        </p>
        <p>
          <a href="https://farma-libra.vercel.app/">Farmalibras</a> é uma
          plataforma inovadora que busca facilitar a comunicação entre
          farmacêuticos e pessoas surdas, garantindo acessibilidade e eficiência
          no atendimento.
        </p>
        <ul>
          <li>
            Aplicação utilizada na universidade e farmácias totalizando{" "}
            <span className="font-bold">120+ usuários.</span>
          </li>
          <li>
            Trabalhou no FrontEnd utilizando React, Javascript/Typescript,
            Tailwind CSS e Zustand, seguindo as normas WCAG para garantir
            acessibilidade.
          </li>
          <li>
            Implementou a lógica do servidor usando Django e Flask, garantindo
            que as APIs REST interajam de forma eficiente e segura, e utilizando
            Django/Admin e Login com OAuth para administração e gerenciamento do
            projeto.
          </li>
          <li>
            Configurou hospedagem utilizando a instância EC2 e outras soluções
            AWS.
          </li>
        </ul>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scasys</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          programador e pesquisador, set. 2023 — maio. 2024
        </p>
        <p>
          <a href="https://github.com/Cauatn/scasys">Scasys</a> uma plataforma
          de avaliação de sustentabilidade aplicada à Química Verde, projetada
          para auxiliar na implementação e monitoramento de processos químicos
          sustentáveis ♻️.
        </p>
        <ul>
          <li>
            Trabalhou no FrontEnd utilizando React, Remix,
            Javascript/Typescript, Tailwind Css e Zustand.
          </li>
          <li>
            Implementou e integrou serviços Django, utilizando Tan Stack Query
            para receber e manipular dados vindo da API.
          </li>
          <li>
            Configurou e otimizou queries MySQL para suportar métricas
            ambientais e garantir indicadores de impacto. Interagiu com químicos
            e especialistas p
          </li>
          <li>
            Interagiu com químicos e especialistas para entender necessidades
            específicas e adaptar a solução da melhor maneira.
          </li>
        </ul>
      </div>
    </Container>
  );
}
