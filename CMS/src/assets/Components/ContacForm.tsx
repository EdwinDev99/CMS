import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { ContactFormData, contactSchema } from "./Schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function ContacForm({}: Props) {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Emil</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default ContacForm;
