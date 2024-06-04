import { Flex } from "@/components/Flex";
import { MenuDecisaoCheck } from "@/components/menu-decisao-check";
import { Helmet } from "react-helmet-async";

export function CheckDecision() {
  return (
    <>
      <div>
        <Helmet title="check" />
        <div>
          <Flex className="justify-center items-start">
            <MenuDecisaoCheck />
            <div className="text-center gap-4"></div>
          </Flex>
        </div>
      </div>
    </>
  );
}
