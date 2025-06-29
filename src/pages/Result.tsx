import { useVotingResult } from "../services/hooks/useTopic";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Result = () => {
  const { topicId } = useParams();
  const id = topicId && /^\d+$/.test(topicId) ? Number(topicId) : null;
  const { data, isLoading, error } = useVotingResult(id!);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Typography color="error">Error: {error.message}</Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={5} p={10} component={Paper}>
      <Typography variant="h5">Resultado da Votação</Typography>
      {data && (
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6">Pauta:</Typography>
            <Typography variant="h5">{data.title}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">Total de votos:</Typography>
            <Typography variant="h5">{data.total}</Typography>
          </Stack>
        </Stack>
      )}
      <Stack>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </Stack>
    </Stack>
  );
};

export default Result;
