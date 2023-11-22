"use client";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { StyledButton } from "../index";
import { IContactForm } from "@/interfaces/IContact";
import { toast, ToastContainer } from "react-toastify";
import { Resend } from "resend";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();
  const Loading = "Cargando...";
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const id = toast(Loading, { autoClose: false });

    try {
      await axios.post("/api/send", data);
      toast.update(id, {
        render: "Mensaje enviado con éxito.",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        className: "animate__animated animate__flipInY",
      });
      reset();
    } catch (error) {
      toast.update(id, {
        render: "Ha ocurrido un error, por favor inténtelo de nuevo.",
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        className: "animate__animated animate__flipInY",
      });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="w-full pt-3">
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div className="flex gap-3">
          <div className="w-full md:w-1/2">
            <Input
              variant="faded"
              color="primary"
              size="lg"
              fullWidth
              placeholder="Tu nombre"
              {...register("name", {
                required: "El nombre es obligatorio.",
                maxLength: {
                  value: 50,
                  message: "El nombre no debe exceder los 50 caracteres.",
                },
              })}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
          </div>
          <div className="w-full md:w-1/2">
            <Input
              variant="faded"
              color="primary"
              type="email"
              size="lg"
              fullWidth
              placeholder="Tu correo electrónico"
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    "Esta no es una dirección de correo electrónico válida.",
                },
              })}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
          </div>
        </div>
        <div>
          <Input
            variant="faded"
            color="primary"
            size="lg"
            fullWidth
            placeholder="Tu asunto"
            {...register("subject", {
              required: "El asunto es obligatorio.",
              maxLength: {
                value: 50,
                message: "El asunto no debe exceder los 50 caracteres.",
              },
            })}
            isInvalid={!!errors.subject}
            errorMessage={errors.subject?.message}
          />
        </div>
        <div>
          <Textarea
            variant="faded"
            color="primary"
            size="lg"
            fullWidth
            placeholder="Tu mensaje"
            {...register("message", {
              required: "El mensaje es obligatorio.",
              maxLength: {
                value: 300,
                message: "El mensaje no debe exceder los 300 caracteres.",
              },
            })}
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
          />
        </div>
        <div className="text-center md:text-left">
          <StyledButton type="submit" color="primary" isLoading={isLoading}>
            Enviar Mensaje
          </StyledButton>
        </div>
      </form>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};
