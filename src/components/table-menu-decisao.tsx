import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Decisao {
  titulo: string;
  classificacao1: string;
  classificacao2: string;
  classificacao3: string;
  cas: string;
}

interface TabelaProps {
  decisaoSelecionada: Decisao | null;
}

export function TabelaListaSelecionada({ decisaoSelecionada }: TabelaProps) {
  return (
    <>
      <Table>
        <TableCaption>Decisão</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Titulo</TableHead>
            <TableHead className="text-center">Classificação 1</TableHead>
            <TableHead className="text-center">Classificação 2</TableHead>
            <TableHead className="text-center">Classificação 3</TableHead>
            <TableHead className="text-center">CAS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {decisaoSelecionada && (
            <TableRow key={decisaoSelecionada.titulo}>
              <TableCell className="font-medium">
                {decisaoSelecionada.titulo}
              </TableCell>
              <TableCell className="text-center">
                {decisaoSelecionada.classificacao1}
              </TableCell>
              <TableCell className="text-center">
                {decisaoSelecionada.classificacao2}
              </TableCell>
              <TableCell className="text-center">
                {decisaoSelecionada.classificacao3}
              </TableCell>
              <TableCell className="text-center">
                {decisaoSelecionada.cas}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
