"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";
import { instagramIcon, linkedinIcon } from "@/public/assets";
import { IconButton } from "@/src/components/ui";

const contactFormSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome."),
  email: z.string().trim().email("Informe um e-mail válido."),
  telefone: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Informe um telefone válido."),
  empresa: z.string().trim().min(2, "Informe sua empresa."),
  cidadeUf: z.string().trim().min(4, "Informe cidade e UF."),
  assunto: z.string().trim().min(3, "Informe o assunto."),
  mensagem: z.string().trim().min(10, "Descreva sua necessidade."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactFormField = keyof ContactFormData;

const inputBaseClass =
  "h-[77px] w-full rounded-lg border border-Pp3 bg-P1 px-4 py-6 font-montserrat text-[20px] text-W6 outline-none placeholder:text-W2 transition-colors focus:border-Pp3 xl:text-[24px]";

const fieldLabelClass =
  "font-montserrat text-[20px] font-bold leading-none text-W6 xl:text-[24px]";

export const ContactSection = () => {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const controls = form.elements as typeof form.elements & {
      [key in ContactFormField]: HTMLInputElement | HTMLTextAreaElement;
    };

    Object.keys(contactFormSchema.shape).forEach((fieldName) => {
      controls[fieldName as ContactFormField].setCustomValidity("");
    });

    const formData = new FormData(event.currentTarget);
    const values = {
      nome: String(formData.get("nome") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      cidadeUf: String(formData.get("cidadeUf") ?? ""),
      assunto: String(formData.get("assunto") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
    };

    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as ContactFormField | undefined;

        if (fieldName && !controls[fieldName].validationMessage) {
          controls[fieldName].setCustomValidity(issue.message);
        }
      });

      setSent(false);
      form.reportValidity();
      return;
    }

    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="w-full bg-BackGround px-5 pt-16 pb-40 text-W6 sm:px-6 lg:px-10 xl:px-60 xl:pt-28 xl:pb-40">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-21">
        <div className="contents xl:flex xl:h-auto xl:w-full xl:max-w-[404px] xl:flex-col">
          <h1 className="order-1 w-full font-quantico text-[40px] font-bold leading-[48px] opacity-100 xl:h-[112px] xl:w-[766px] xl:text-[48px] xl:leading-[56px]">
            Solicite um orçamento para seu projeto digital criar forma.
          </h1>
          <div className="order-2 hidden h-[151px] xl:block" />

          <div className="order-3 flex h-auto w-full max-w-[404px] flex-col gap-8 font-montserrat text-[20px] text-W2 xl:h-[516px] xl:w-[404px] xl:text-[24px]">
            <p className="font-bold leading-tight text-W5">
              Sinta-se a vontade para entrar em contato com a nossa equipe,
              estamos a disposição para trazer realidade as suas ideias.
            </p>

            <div className="flex flex-col gap-4">
              <strong className="text-W6">Nosso E-mail</strong>
              <span>knex@contato.com</span>
            </div>

            <div className="flex flex-col gap-4">
              <strong className="text-W6">Nosso Telefone</strong>
              <span>(00) 00000-0000</span>
            </div>

            <div className="flex flex-col gap-4">
              <strong className="text-W6">Nossa Localização</strong>
              <span>Rua ali Perto, 12, Centro - Patos/PB</span>
            </div>

          </div>

          <div className="order-4 flex gap-4 xl:mt-16">
            <IconButton src={instagramIcon} label="Instagram" />
            <IconButton src={linkedinIcon} label="LinkedIn" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="order-2 grid h-auto min-h-[997px] w-full max-w-[952px] grid-cols-1 content-start gap-x-11 gap-y-8 bg-BackGround xl:mt-[263px] xl:h-[997px] xl:w-[952px] xl:grid-cols-2"
        >
          <FormField
            className="xl:col-span-2"
            label="Nome"
            name="nome"
            placeholder="Seu nome"
          />

          <FormField
            inputClassName="xl:w-[464px]"
            label="E-mail"
            name="email"
            placeholder="email@contato.com"
          />

          <FormField
            inputClassName="xl:w-[464px]"
            label="Telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
          />

          <FormField
            inputClassName="xl:w-[464px]"
            label="Empresa"
            name="empresa"
            placeholder="Sua empresa"
          />

          <FormField
            inputClassName="xl:w-[464px]"
            label="Cidade/UF"
            name="cidadeUf"
            placeholder="Cidade - UF"
          />

          <FormField
            className="xl:col-span-2"
            label="Assunto"
            name="assunto"
            placeholder="Título da necessidade"
          />

          <label className="flex flex-col gap-6 xl:col-span-2">
            <span className={fieldLabelClass}>Mensagem</span>
            <textarea
              name="mensagem"
              placeholder="Descrição da sua necessidade"
              className="h-[238px] w-full resize-none rounded-lg border border-Pp3 bg-P1 px-4 py-6 font-montserrat text-[20px] text-W6 outline-none placeholder:text-W2 transition-colors focus:border-Pp3 xl:text-[24px]"
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </label>

          <div className="flex flex-col items-end justify-end gap-4 xl:col-span-2 xl:min-h-[122px]">
            {sent ? (
              <p className="px-4 font-montserrat text-[20px] font-bold text-Pp4 xl:text-[24px]">
                Formulário validado com sucesso.
              </p>
            ) : null}
            <button
              type="submit"
              className="h-[66px] w-full cursor-pointer rounded-sm bg-G4 px-16 py-4 font-quantico text-[24px] font-bold text-Gg0 hover:bg-white ease-in-out duration-300 sm:w-[199px]"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

type FormFieldProps = Readonly<{
  className?: string;
  label: string;
  name: keyof Omit<ContactFormData, "mensagem">;
  placeholder: string;
  inputClassName?: string;
}>;

const FormField = ({
  className = "",
  label,
  name,
  placeholder,
  inputClassName = "",
}: FormFieldProps) => {
  return (
    <label className={`flex flex-col gap-6 ${className}`}>
      <span className={fieldLabelClass}>{label}</span>
      <input
        name={name}
        placeholder={placeholder}
        className={`${inputBaseClass} ${inputClassName}`}
        onInput={(event) => event.currentTarget.setCustomValidity("")}
      />
    </label>
  );
};
