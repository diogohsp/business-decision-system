import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Container } from "../components/Container";
import { Flex } from "./Flex";
import { useState } from "react";

export function Listagem() {
  interface Decisao {
    titulo: string;
    classificacao1: string;
    classificacao2: string;
    classificacao3: string;
    cas: string;
  }

  const decisoes: Decisao[] = [
    {
      titulo: "Melhor horario para o vestibular",
      classificacao1: "Programada",
      classificacao2: "Academica",
      classificacao3: "Tática",
      cas: "Cordenação Geral",
    },
    {
      titulo: "Chamado de problemas",
      classificacao1: "Não Programada",
      classificacao2: "Administrativa",
      classificacao3: "Estratégica",
      cas: "Secretaria",
    },
    {
      titulo: "Sujestão de projeto",
      classificacao1: "Não Programada",
      classificacao2: "Administrativa",
      classificacao3: "Tática",
      cas: "Cordenação Geral",
    },
    {
      titulo: "Definição de roteiro de aula",
      classificacao1: "Programada",
      classificacao2: "Academica",
      classificacao3: "Operacional",
      cas: "Professor",
    },
  ];

  const [decisaoSelecionada, setDecisaoSelecionada] = useState<Decisao | null>(
    null
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    console.log("selected index:", index);
    setDecisaoSelecionada(decisoes[index]);
  };

  return (
    <>
      <Container className="flex justify-center pt-16">
        <Select
          id="listagem"
          onChange={handleSelectChange}
          value={
            decisaoSelecionada
              ? decisoes.indexOf(decisaoSelecionada).toString()
              : ""
          }
        >
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Selecione uma decisão" />
          </SelectTrigger>
          <SelectContent>
            {decisoes.map((decisao, index) => (
              <SelectItem value={index.toString()} key={index}>
                {decisao.titulo}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Flex>
          <Flex className="flex-col">
            <h5>Titulo</h5>
            {decisaoSelecionada && (
              <>
                <p>Titulo: {decisaoSelecionada.titulo}</p>
                <p>Classificacao1: {decisaoSelecionada.classificacao1}</p>
                <p>Classificacao2: {decisaoSelecionada.classificacao2}</p>
                <p>Classificacao3: {decisaoSelecionada.classificacao3}</p>
                <p>CAS: {decisaoSelecionada.cas}</p>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
