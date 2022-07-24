import { Router } from "../routes";
import { UsuarioLogadoProvider } from "../shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Router />
    </UsuarioLogadoProvider>
  );
}

