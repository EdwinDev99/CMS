import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import {
  Contact,
  ContactFormData,
  contactSchema,
  contactTypeOption,
} from "./Schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContacForm({ onSubmit }: Props) {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) =>
          onSubmit({ ...data, id: crypto.randomUUID() })
        )}
      >
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Emil</Input>
        <Select
          name="type"
          label="tipo"
          defaultMessage="--selecciona tipo--"
          options={contactTypeOption}
        />
        <Button type="submit">Enviar</Button>
        <Button onClick={() => methods.reset()} variant="secondary">
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContacForm;
