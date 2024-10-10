import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// Componentes de Estados
import ListEstados from "./components/estados/ListEstados";
import CreateEstado from "./components/estados/CreateEstado";
import UpdateEstado from "./components/estados/UpdateEstado";

// Componentes de Cidades
import ListCidades from "./components/cidades/ListCidade";
import CreateCidade from "./components/cidades/CreateCidade";
import UpdateCidade from "./components/cidades/UpdateCidade";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas do App */}
        <Route path="/" element={<App />} />

        {/* Rotas para Estados */}
        <Route path="/estados" element={<ListEstados />} />
        <Route path="/estados/create" element={<CreateEstado />} />
        <Route path="/estados/update/:id" element={<UpdateEstado />} />

        {/* Rotas para Cidades */}
        <Route path="/cidades" element={<ListCidades />} />
        <Route path="/cidades/create" element={<CreateCidade />} />
        <Route path="/cidades/update/:id" element={<UpdateCidade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
