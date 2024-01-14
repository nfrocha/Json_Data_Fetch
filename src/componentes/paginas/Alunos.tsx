import { QueryClient, QueryClientProvider } from "react-query";
import ListaAlunos from "./ListaAlunos";

const Alunos = () => {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <ListaAlunos></ListaAlunos>
    </QueryClientProvider>
  );
};

export default Alunos;
