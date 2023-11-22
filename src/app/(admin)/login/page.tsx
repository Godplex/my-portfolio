"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { StyledButton } from "@/components/Styled";
import { Logo } from "@/components/index";

type FormInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <Card className="py-4 w-full md:w-1/2 lg:w-1/3">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Logo />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              variant="faded"
              color="primary"
              size="lg"
              fullWidth
              className="mb-4"
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
              })}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              variant="faded"
              color="primary"
              size="lg"
              fullWidth
              className="mb-4"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria.",
              })}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <StyledButton type="submit" color="primary" fullWidth>
              Iniciar sesión
            </StyledButton>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
