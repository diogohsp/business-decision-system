import { Helmet } from "react-helmet-async";

import { Listagem } from "../components/listagem-decisoes";
import { Flex } from "../components/Flex";
import imgEngineers from "../assets/engineers.svg";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div >
        <Flex className="justify-center items-start">
          <Listagem />
          <div className="text-center gap-4">
            <img src={imgEngineers} className="w-[950px]" alt="ilustração de um homem e uma mulher engenheiros trabalhando" />
            <p className="text-3xl font-bold">Seu melhor gerenciador de decisões</p>
          </div>
        </Flex>
      </div>
    </>
  );
}
