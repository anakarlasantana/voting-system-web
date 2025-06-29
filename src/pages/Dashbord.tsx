import { useState } from "react";
import { Stack } from "@mui/material";
import TableDashbord from "../components/Dashbord/Table";
import LoginButton from "../components/Dashbord/Button";
import DialogForm from "../components/DialogForm";
import { useCreateTopic } from "../services/hooks/useTopic";

const Dashbord = () => {
  const [openModal, setOpenModal] = useState(false);
  const createTopic = useCreateTopic();

  const handleCreateTopic = async (data: {
    title: string;
    description: string;
  }) => {
    await createTopic.mutateAsync(data);
    setOpenModal(false);
  };

  return (
    <Stack>
      <LoginButton onOpenModal={() => setOpenModal(true)} />
      <TableDashbord />
      <DialogForm
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleCreateTopic}
        title="Criar Nova Pauta"
        fields={[
          { name: "title", label: "Título" },
          { name: "description", label: "Descrição" },
        ]}
      />
    </Stack>
  );
};

export default Dashbord;
