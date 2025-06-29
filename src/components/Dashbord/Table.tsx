import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Stack,
  Alert,
  Pagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useOpenSession, useTopic } from "../../services/hooks/useTopic";
import type { RootState } from "../../services/store";
import siteMap from "../../routes/siteMap";
import translateStatus from "../../utils/status";
import DialogForm from "../DialogForm";

const TableDashbord = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useTopic(page);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [openModal, setOpenModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<any | null>(null);
  const openSession = useOpenSession();

  const handleRowClick = (topic: any) => {
    if (topic.status === "open") {
      if (isAuthenticated) {
        navigate(`/topics/${topic.id}/vote`);
      } else {
        setAlertMessage("Você precisa estar logado para votar.");
        setTimeout(() => {
          setAlertMessage("");
          navigate(siteMap.public.singIn);
        }, 2000);
      }
    } else if (topic.status === "closed") {
      navigate(`/topics/${topic.id}/result`);
    } else if (topic.status === "waiting") {
      if (isAuthenticated) {
        setSelectedTopic(topic);
        setOpenModal(true);
      } else {
        setAlertMessage("Sessão ainda não aberta para votação.");
        setTimeout(() => setAlertMessage(""), 3000);
      }
    }
  };

  const handleSubmitSession = async (data: { duration_minutes?: number }) => {
    await openSession.mutateAsync({
      topicId: selectedTopic?.id,
      payload: data,
    });
    setOpenModal(false);
    setSelectedTopic(null);
  };

  if (isLoading)
    return (
      <Stack alignItems="center" mt={4}>
        <CircularProgress />
      </Stack>
    );

  if (error)
    return (
      <Typography color="error" mt={4}>
        Erro ao carregar pautas.
      </Typography>
    );

  return (
    <>
      <Stack spacing={2} p={5} component={Paper} sx={{ width: "150vh" }}>
        <Typography variant="h5">Pautas para Votação</Typography>

        {alertMessage && <Alert severity="warning">{alertMessage}</Alert>}
        <TableContainer>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                <TableCell>Título</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Criado em</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.results?.map((topic) => (
                <TableRow
                  key={topic.id}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(topic)}
                >
                  <TableCell>{topic.title}</TableCell>
                  <TableCell>{topic.description}</TableCell>
                  <TableCell>{translateStatus(topic.status)}</TableCell>
                  <TableCell>
                    {new Date(topic.created_at).toLocaleDateString("pt-BR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack alignItems="end" mt={2}>
          <Pagination
            count={Math.ceil((data?.count || 1) / 10)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      </Stack>

      <DialogForm
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedTopic(null);
        }}
        onSubmit={handleSubmitSession}
        title={`Abrir sessão para: ${selectedTopic?.title || ""}`}
        fields={[
          {
            name: "duration_minutes",
            label: "Duração da sessão (minutos)",
            type: "number",
          },
        ]}
      />
    </>
  );
};

export default TableDashbord;
