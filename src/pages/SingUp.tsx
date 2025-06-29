import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Stack, Typography, Button, Alert } from "@mui/material";
import FormTextField from "../components/FormTextField";
import { authService } from "../services/auth";
import type { ISingUp } from "../interface/singUp";
import { useNavigate } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import siteMap from "../routes/siteMap";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingUp>();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data: ISingUp) => {
    try {
      await authService.ISingUp(data);
      navigate(siteMap.public.singIn);
    } catch (err) {
      setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <Paper sx={{ maxWidth: 500, mx: "auto", mt: 8, p: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant="h5">Cadastrar</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <FormTextField
            name="name"
            label="Nome"
            control={control}
            error={errors.name}
          />
          <FormTextField
            name="cpf"
            label="CPF"
            control={control}
            error={errors.cpf}
          />
          <FormTextField
            name="password"
            label="Senha"
            type="password"
            control={control}
            error={errors.password}
          />
          <Button type="submit" variant="contained" endIcon={<PersonAdd />}>
            Cadastrar
          </Button>
          <Stack alignItems="end">
            <Button
              variant="text"
              onClick={() => navigate(siteMap.public.singIn)}
              sx={{
                textDecoration: "underline",
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                  color: "secondary.main",
                },
              }}
            >
              Já tenho conta
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default SignUp;
