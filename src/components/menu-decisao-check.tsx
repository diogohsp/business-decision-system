import { useEffect, useState } from "react";
import { BotaoMenu } from "./botao-menu-decisao";
import { TabelaListaSelecionada } from "./table-menu-decisao";
import { Container } from "./Container";
import api from "@/services/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Grid } from "./Grid";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  classificacao1: z
    .string()
    .min(1, "O titulo da classificação é obrigatório")
    .max(100, "O titulo da classificação é muito longo"),
  classificacao2: z
    .string()
    .min(1, "O titulo da classificação é obrigatório")
    .max(100, "O titulo da classificação é muito longo"),
  classificacao3: z
    .string()
    .min(1, "O titulo da classificação é obrigatório")
    .max(100, "O titulo da classificação é muito longo"),
  cas: z
    .string()
    .min(1, "O titulo do cas é obrigatório")
    .max(100, "O titulo do cas é muito longo"),
});

export function MenuDecisaoCheck() {
  interface Decisao {
    id: string;
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formValues, setFormValues] = useState({
    classificacao1: "",
    classificacao2: "",
    classificacao3: "",
    cas: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!decisaoSelecionada) {
      Swal.fire({
        icon: "error",
        title: "Nenuma decisão foi selecionada!",
        text: "Selecione uma decisão",
      });
      return;
    }

    const data = {
      ...formValues,
      titulo: decisaoSelecionada.titulo,
    };

    try {
      schema.parse(formValues);

      await api.post("/decisoes", data);

      await api.delete(`/decisoesCheck/${decisaoSelecionada.id}`);

      setFormValues({
        classificacao1: "",
        classificacao2: "",
        classificacao3: "",
        cas: "",
      });

      const updatedDecisoes = await api.get("/decisoesCheck");
      setDecisoes(updatedDecisoes.data);

      setDecisaoSelecionada(null);

      Swal.fire({
        icon: "success",
        title: "Deu tudo certo",
        text: "Decisão enviada para listagem!",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
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
          text: "Preencha o formulario corretamente!",
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
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setErrors({ ...errors, [id]: "" }); // Limpar erros ao digitar
  };

  return (
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

      <Grid className="w-full justify-center">
        <form
          action="post"
          onSubmit={handleSubmit}
          className="w-full justify-self-center justify-center items-center"
        >
          <div className="flex flex-col w-[25rem] gap-y-6">
            <Input
              type="text"
              id="classificacao1"
              placeholder="Classificação 1"
              value={formValues.classificacao1}
              onChange={handleChange}
              className={errors.classificacao1 ? "border-red-500" : ""}
            />
            {errors.classificacao1 && (
              <p className="text-red-500">{errors.classificacao1}</p>
            )}
            <Input
              type="text"
              id="classificacao2"
              placeholder="Classificação 2"
              value={formValues.classificacao2}
              onChange={handleChange}
              className={errors.classificacao2 ? "border-red-500" : ""}
            />
            {errors.classificacao2 && (
              <p className="text-red-500">{errors.classificacao2}</p>
            )}
            <Input
              type="text"
              id="classificacao3"
              placeholder="Classificação 3"
              value={formValues.classificacao3}
              onChange={handleChange}
              className={errors.classificacao3 ? "border-red-500" : ""}
            />
            {errors.classificacao3 && (
              <p className="text-red-500">{errors.classificacao3}</p>
            )}
            <Input
              type="text"
              id="cas"
              placeholder="Cas"
              value={formValues.cas}
              onChange={handleChange}
              className={errors.cas ? "border-red-500" : ""}
            />
            {errors.cas && <p className="text-red-500">{errors.cas}</p>}
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </Grid>
    </Container>
  );
}
