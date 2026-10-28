"use client";

import { FormEvent, useEffect, useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { instagramIcon, linkedinIcon ,whatsAppIcon } from "@/public/assets";
import { IconButton } from "@/src/components/ui";
import Image from "next/image";

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
  "h-[60px] xl:h-[77px] w-full rounded-lg border border-Pp3 bg-P1 px-4 py-6 font-montserrat text-[20px] text-W6 outline-none placeholder:text-W2 transition-colors focus:border-Pp3 xl:text-[20px]";

const fieldLabelClass =
  "h-[20px] xl:h-[32px] font-montserrat text-[18px] xl:text-[26px] font-bold leading-none text-W5";

export const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
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
      const newErrors: Partial<Record<ContactFormField, string>> = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as ContactFormField | undefined;
        if (fieldName) {
          newErrors[fieldName] = issue.message;
        }
      });

      setErrors(newErrors);
      setSent(false);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: "knex@contato.com",
          from_email: values.email,
          from_name: values.nome,
          telefone: values.telefone,
          empresa: values.empresa,
          cidade_uf: values.cidadeUf,
          assunto: values.assunto,
          mensagem: values.mensagem,
        }
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setErrors({ nome: "Erro ao enviar o formulário. Tente novamente." });
      setSent(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-BackGround px-5 pt-16 pb-40 text-W6 sm:px-6 lg:px-10 xl:px-[12.5%] xl:pt-28 xl:pb-40">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-21">
        <div className="contents xl:flex xl:h-auto xl:w-full xl:max-w-[404px] xl:flex-col">
          <h1 className="order-1 w-full font-quantico text-[32px] font-bold leading-[48px] opacity-100 text-W0 xl:h-[112px] xl:w-[766px] xl:text-[48px] xl:leading-[56px]">
            Solicite um orçamento para seu projeto digital criar forma.
          </h1>
          <div className="order-2 hidden h-[151px] xl:block" />

          <div className="order-3 flex h-auto w-full max-w-[404px] flex-col gap-8 font-montserrat text-[20px] text-W5 xl:h-[516px] xl:w-[404px] xl:text-[20px]">
            <p className="font-bold leading-tight text-W5 pt-14">
              Sinta-se a vontade para entrar em contato com a nossa equipe,
              estamos a disposição para trazer realidade as suas ideias.
            </p>

            <div className="flex flex-col gap-4">
              <strong className="text-W5">Nosso E-mail</strong>
              <span className="text-W2">org.knex@gmail.com</span>
            </div>

            <div className="flex flex-col gap-4">
              <strong className="text-W5">Nosso Telefone</strong>
              <a href="https://wa.me/558388488786" target="_blank" className="text-W2">(83) 8848-8786</a>
            </div>

            <div className="flex flex-col gap-4">
              <strong className="text-W5">Nossa Localização</strong>
              <span className="text-W2">Rua Alfredo Lustosa Cabral, SN , Salgadinho - Patos/PB</span>
            </div>

          </div>

          <div className="order-4 flex gap-4 xl:mt-16">
            <a href="https://www.instagram.com/knexjr?igsh=MTIweDlyMmx5Y2Q4bA==" target="_blank" rel="noopener noreferrer">
              <IconButton src={instagramIcon} label="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/knex-consultoria-jr/" target="_blank" rel="noopener noreferrer">
              <IconButton src={linkedinIcon} label="LinkedIn" />
            </a>

            <a href="https://wa.me/558388488786?text=Ol%C3%A1%20Knex!%20Vim%20pelo%20site%2Finstagram%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os%20de%20tecnologia." target="_blank" className="">  
            <IconButton src={whatsAppIcon} label="LinkedIn" />
            </a>

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="order-2 grid  h-auto w-full max-w-[952px] grid-cols-1 content-start  gap-x-11 gap-y-8 bg-BackGround xl:mt-[263px] xl:min-h-[997px] xl:w-[952px] xl:grid-cols-2"
        >
          <FormField
            className="xl:col-span-2 "
            label="Nome"
            name="nome"
            placeholder="Seu nome"
            error={errors.nome}
          />

          <FormField
            label="E-mail"
            name="email"
            placeholder="email@contato.com"
            error={errors.email}
          />

          <FormField
            label="Telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            error={errors.telefone}
          />

          <FormField
            label="Empresa"
            name="empresa"
            placeholder="Sua empresa"
            error={errors.empresa}
          />

          <FormField
            label="Cidade/UF"
            name="cidadeUf"
            placeholder="Cidade - UF"
            error={errors.cidadeUf}
          />

          <FormField
            className="xl:col-span-2"
            label="Assunto"
            name="assunto"
            placeholder="Título da necessidade"
            error={errors.assunto}
          />

          <label className="flex flex-col gap-6 xl:col-span-2">
            <span className={fieldLabelClass}>Mensagem</span>
            <textarea
              name="mensagem"
              placeholder="Descrição da sua necessidade"
              className="h-[180px] xl:h-[238px] w-full resize-none rounded-lg border border-Pp3 bg-P1 px-4 py-6 font-montserrat text-[20px] text-W6 outline-none placeholder:text-W2 transition-colors focus:border-Pp3 xl:text-[20px] focus-within:ring-2 focus-within:ring-Pp5  focus-within:shadow-[0_0_20px_2px_rgba(165,111,238,0.60)]"
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
            {errors.mensagem && (
              <span className="font-montserrat text-[16px] font-semibold leading-none text-red-500 xl:text-[18px]">
                {errors.mensagem}
              </span>
            )}
          </label>

          <div className="flex flex-col items-end justify-end gap-4 xl:col-span-2 xl:min-h-[122px]">
            {sent ? (
              <p className="px-4 font-montserrat text-[20px] font-bold text-Pp4 xl:text-[20px]">
                Formulário enviado com sucesso.
              </p>
            ) : null}
            <button
              type="submit"
              disabled={loading}
              className="h-[61px] w-[155px] flex items-center justify-center px-6 cursor-pointer rounded-sm bg-G4 py-4 font-quantico text-[20px] font-bold text-Gg0 hover:bg-white ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed sm:h-[66px] sm:w-[199px] sm:text-[24px] sm:px-16"
            >
              {loading ? (
                <span className="flex gap-0.5">
                  <span className="w-1 h-1 bg-Gg0 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-Gg0 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                  <span className="w-1 h-1 bg-Gg0 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                </span>
              ) : (
                "Enviar"
              )}
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
  error?: string;
}>;

const FormField = ({
  className = "",
  label,
  name,
  placeholder,
  inputClassName = "",
  error,
}: FormFieldProps) => {
  return (
    <label className={`flex flex-col  gap-6  ${className}`}>
      <span className={fieldLabelClass}>{label}</span>
      <div className="flex flex-col gap-2  focus-within:ring-2  focus-within:ring-Pp5 rounded-[8px] focus-within:shadow-[0_0_20px_2px_rgba(165,111,238,0.60)]">
        <input
          name={name}
          placeholder={placeholder}
          className={`${inputBaseClass} ${inputClassName}`}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
        {error && (
          <span className="font-montserrat text-[16px] font-semibold leading-none text-red-500 xl:text-[18px]">
            {error}
          </span>
        )}
      </div>
    </label>
  );
};
