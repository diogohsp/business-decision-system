import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/services/api";

export function Listing() {
  const [nome, setNome] = useState("");
  const [decisoes, setDecisoes] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api
      .post("/decisoes", { titulo: nome })
      .then((response) => {
        // atualiza o estado com a nova lista de decisões
        setDecisoes(response.data);
        setNome(""); // limpar o campo de input após o envio
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <form
        action="post"
        onSubmit={handleSubmit}
        className="w-full justify-center items-center"
      >
        <div className="flex flex-col w-[25rem] gap-y-6">
          <Input
            type="text"
            id="novaDecisao"
            placeholder="Nova decisão"
            value={nome}
            onChange={handleChange}
          />
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
}
