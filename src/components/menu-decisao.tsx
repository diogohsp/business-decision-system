import { useState } from "react";
import { BotaoMenu } from "./botao-menu-decisao";
import { TabelaListaSelecionada } from "./table-menu-decisao";

import { Container } from "./Container";

export function MenuDecisao() {
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

  return (
    <>
      <Container className="flex flex-col justify-center pt-16 gap-3">
        <h5 className="font-bold text-2xl">Selecione sua decisão</h5>

        <BotaoMenu
          decisoes={decisoes.map((decisao) => ({
            label: decisao.titulo,
            onSelect: () => setDecisaoSelecionada(decisao),
          }))}
        />

        <TabelaListaSelecionada decisaoSelecionada={decisaoSelecionada} />
      </Container>
    </>
  );
}
