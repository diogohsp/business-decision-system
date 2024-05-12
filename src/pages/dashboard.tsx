import { Helmet } from "react-helmet-async";

import { Header } from "../components/header";
import { Listagem } from "../components/listagem-decisoes";
import { Grid } from "../components/Grid";
import { Flex } from "../components/Flex";
import imgEngineers from "../assets/engineers.svg";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="bg-white">
        <Header />
        <Flex className="justify-center items-start">
          <Listagem />
          <img src={imgEngineers} className="w-[650px]" alt="aa" />
        </Flex>
      </div>
    </>
  );
}
