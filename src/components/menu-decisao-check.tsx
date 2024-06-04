import { useEffect, useState } from "react";
import { BotaoMenu } from "./botao-menu-decisao";
import { TabelaListaSelecionada } from "./table-menu-decisao";

import { Container } from "./Container";
import api from "@/services/api";

export function MenuDecisaoCheck() {
  interface Decisao {
    titulo: string;
    classificacao1: string;
    classificacao2: string;
    classificacao3: string;
    cas: string;
  }

  const [decisoes, setDecisoes] = useState<Decisao[] | null>(null);

  useEffect(() => {
    api
      .get("/decisoesCheck")
      .then((response) => setDecisoes(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  }, []);

  const [decisaoSelecionada, setDecisaoSelecionada] = useState<Decisao | null>(
    null
  );

  return (
    <>
      <Container className="flex flex-col justify-center pt-16 gap-3">
        <h5 className="font-bold text-2xl">Selecione sua decisão</h5>

        {decisoes && (
          <BotaoMenu
            decisoes={decisoes.map((decisao) => ({
              label: decisao.titulo,
              onSelect: () => setDecisaoSelecionada(decisao),
            }))}
          />
        )}

        <TabelaListaSelecionada decisaoSelecionada={decisaoSelecionada} />
      </Container>
    </>
  );
}
