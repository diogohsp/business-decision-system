import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import api from "@/services/api";
import { z } from "zod";

const schema = z.object({
  nome: z
    .string()
    .min(1, "O titulo da decisão é obrigatório")
    .max(100, "O titulo da decisão é muito longo"),
});

export function Listing() {
  const [nome, setNome] = useState("");
  const [decisoes, setDecisoes] = useState([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // validação do esquema
      schema.parse({ nome });

      const response = await api.post("/decisoesCheck", { titulo: nome });
      setDecisoes(response.data);
      setNome(""); // limpar o campo de input após o envio

      Swal.fire({
        icon: "success",
        title: "Deu tudo certo",
        text: "Decisão enviada para análise!",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        // extrair e configurar erros de validação
        const fieldErrors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(fieldErrors);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Preencha o formulario!",
        });
      } else {
        console.error("Ops! Ocorreu um erro: " + err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Alguma coisa de errada aconteceu!",
        });
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
    setErrors({ ...errors, [event.target.id]: "" }); // limpar erros quando o usuário começar a digitar
  };

  return (
    <div className="flex h-full w-full grid justify-center">
      <form
        action="post"
        onSubmit={handleSubmit}
        className="w-full justify-center items-center"
      >
        <div className="flex flex-col w-[25rem] gap-y-6">
          <Input
            type="text"
            id="nome"
            placeholder="Nova decisão"
            value={nome}
            onChange={handleChange}
            className={errors.nome ? "border-red-500" : ""}
          />
          {errors.nome && <p className="text-red-500">{errors.nome}</p>}
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
}
