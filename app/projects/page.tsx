import Container from "@/components/shared/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Projects() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>
          Alguns dos projetos pessoais do qual me orgulho, não necessariamente
          são os mais complexos, mas que me trouxeram experiência e aprendizado.
        </p>
        <hr className="my-2 border-neutral-200 dark:border-neutral-800" />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base">
            Zen FlipDown Clock
          </AccordionTrigger>
          <AccordionContent>
            <a
              href="https://flipdown-clock.vercel.app/"
              className="flex space-x-1"
            >
              <label htmlFor="">demo: </label>
              <p className="underline-offset-2 underline">
                https://flipdown-clock.vercel.app/
              </p>
            </a>
            <br />
            <p>
              Projeto feito para minha namorada, um crônometro para auxiliar nos
              estudos. Utilizando{" "}
              <span className="bg-gray-200 border rounded-sm px-1 dark:bg-slate-600">
                React
              </span>
              ,{" "}
              <span className="bg-gray-200 border rounded-sm px-1 dark:bg-slate-600">
                Typescript
              </span>{" "}
              e{" "}
              <span className="bg-gray-200 border rounded-sm px-1 dark:bg-slate-600">
                Web Workers
              </span>
              , fui capaz de reproduzir o comportamento esperado mesmo quando o
              usuário está com o aplicativo minimizado e/ou fecha sem querer a
              aba do navegador, o ultimo tempo continua salvo. <br />
              Mesmo sendo um projeto simples, foi extremamente gratificante
              produzir esse trabalho para ela e ver feedbacks sinceros sobre
              pontos que poderiam melhorar na aplicação, bem como aprender novos
              conceitos como o Multi-Treading no navegador, para suportar essas
              diversas funcionalidades.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base">
            Solar-system
          </AccordionTrigger>
          <AccordionContent>
            Em breve atualizando essa descrição.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base">EvoGym</AccordionTrigger>
          <AccordionContent>
            Em breve atualizando essa descrição.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
