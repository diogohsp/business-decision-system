import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BotaoMenuProps {
  decisoes: { label: string; onSelect: () => void }[];
}

export function BotaoMenu({ decisoes }: BotaoMenuProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[45rem]">
          <DropdownMenuLabel>Decisões</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {decisoes.map((decisao, index) => (
            <DropdownMenuCheckboxItem key={index} onSelect={decisao.onSelect}>
              {decisao.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
