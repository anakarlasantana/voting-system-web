import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import { topicService } from "../services/topic";
import { useNavigate, useParams } from "react-router-dom";

type VotingForm = {
  choice: "Sim" | "Não";
  name?: string;
};

const Voting = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VotingForm>();
  const { topicId } = useParams();
  const id = topicId && /^\d+$/.test(topicId) ? Number(topicId) : null;
  const navigate = useNavigate();

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const onSubmit = async (data: VotingForm) => {
    try {
      setAlert(null);
      await topicService.vote(id as number, data);
      setAlert({ type: "success", message: "Voto enviado com sucesso!" });
      setTimeout(() => {
        setAlert(null);
        navigate("/");
      }, 2500);
    } catch (error: any) {
      console.error("Erro ao enviar voto:", error);
      const backendMessage =
        error.response?.data?.error || "Erro ao enviar voto. Tente novamente.";

      setAlert({ type: "error", message: backendMessage });
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <Paper sx={{ maxWidth: 500, mx: "auto", mt: 8, p: 4 }}>
      {alert && (
        <Alert severity={alert.type} sx={{ mb: 2 }}>
          {alert.message}
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} justifyContent={"center"}>
          <Typography variant="h5">Quero votar na pauta</Typography>
          <Controller
            name="choice"
            control={control}
            rules={{ required: "Escolha uma opção" }}
            render={({ field }) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="Não" control={<Radio />} label="Não" />
              </RadioGroup>
            )}
          />
          {errors.choice && (
            <Typography color="error" variant="body2">
              {errors.choice.message}
            </Typography>
          )}

          <Button type="submit" variant="contained" color="primary">
            Enviar voto
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default Voting;
