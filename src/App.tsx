import "./App.css";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/index";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MainContainer>
              <AppRoutes />
            </MainContainer>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
