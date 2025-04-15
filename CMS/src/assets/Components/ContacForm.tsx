import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

type Props = {};

function ContacForm({}: Props) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Emil</Input>
        <button>Enviar</button>
      </form>
    </FormProvider>
  );
}

export default ContacForm;
