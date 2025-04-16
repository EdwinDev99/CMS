import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre requerido." })
    .min(3, { message: "Logitud minima de 3" }),
  lastname: z
    .string()
    .min(1, { message: "Nombre requerido." })
    .min(3, { message: "Logitud minima de 3" }),
  email: z
    .string()
    .min(1, { message: "correo requerido" })
    .email("Correo invalido"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type Contact = ContactFormData & { id: string };
