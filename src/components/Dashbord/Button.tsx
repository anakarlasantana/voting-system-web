import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Add, Login, Logout } from "@mui/icons-material";
import siteMap from "../../routes/siteMap";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../services/store";
import ActionButton from "../ActionButton";
import { Stack } from "@mui/material";

interface LoginButtonProps {
  onOpenModal: () => void;
}

const LoginButton = ({ onOpenModal }: LoginButtonProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (pathname !== siteMap.public.dashboard) return null;

  return isAuthenticated ? (
    <Stack alignItems={"end"}>
      <ActionButton
        show={true}
        label="Sair"
        icon={<Logout />}
        onClick={() => {
          dispatch(logout());
          navigate(siteMap.public.dashboard);
        }}
      />
      <ActionButton
        show={true}
        label="Criar pauta"
        icon={<Add />}
        onClick={onOpenModal}
      />
    </Stack>
  ) : (
    <Stack alignItems={"end"}>
      <ActionButton
        show={true}
        label="Login"
        icon={<Login />}
        onClick={() => navigate(siteMap.public.singIn)}
      />
    </Stack>
  );
};

export default LoginButton;
