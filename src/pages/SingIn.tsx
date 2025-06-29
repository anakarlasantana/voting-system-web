import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/auth/authSlice";
import type { ISingIn } from "../interface/singIn";
import { Alert, Button, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormTextField from "../components/FormTextField";
import { authService } from "../services/auth";
import siteMap from "../routes/siteMap";
import { Login } from "@mui/icons-material";

const SingIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingIn>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const onSubmit = async (data: ISingIn) => {
    try {
      const { access, refresh } = await authService.ISingIn(data);
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      const user = await authService.me();
      dispatch(setCredentials({ token: access, user }));
      navigate("/");
    } catch (err) {
      setError("CPF ou senha inválidos");
    }
  };

  return (
    <Paper sx={{ maxWidth: 500, mx: "auto", p: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <Typography variant="h5">Entrar</Typography>
          <Stack spacing={2}>
            {error && <Alert severity="error">{error}</Alert>}
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
            <Button type="submit" variant="contained" endIcon={<Login />}>
              Entrar
            </Button>
          </Stack>
          <Stack alignItems={"end"}>
            <Button
              variant="text"
              onClick={() => navigate(siteMap.public.singUp)}
              sx={{
                textDecoration: "underline",
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                  color: "secondary.main",
                },
              }}
            >
              Cadastrar
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default SingIn;
