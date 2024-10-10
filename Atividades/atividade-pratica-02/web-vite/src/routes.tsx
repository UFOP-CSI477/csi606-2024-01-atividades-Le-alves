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

// Componentes de Locais de Coleta
import ListLocais_Coleta from "./components/locais_coleta/ListLocais_Coleta";
import CreateLocais_Coleta from "./components/locais_coleta/CreateLocais_Coleta";
import UpdateLocais_Coleta from "./components/locais_coleta/UpdateLocais_Coleta";

// Componentes de Tipos Sanguíneos
import ListTipo_Sanguineo from "./components/tipo_sanguineo/ListTipo_Sanguineo";
import CreateTipo_Sanguineo from "./components/tipo_sanguineo/CreateTipo_Sanguineo";
import UpdateTipo_Sanguineo from "./components/tipo_sanguineo/UpdateTipo_Sanguineo";

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

        {/* Rotas para Locais de Coleta */}
        <Route path="/locais_coleta" element={<ListLocais_Coleta />} />
        <Route path="/locais_coleta/create" element={<CreateLocais_Coleta />} />
        <Route path="/locais_coleta/update/:id" element={<UpdateLocais_Coleta />} />

        {/* Rotas para Tipos Sanguíneos */}
        <Route path="/tipo_sanguineo" element={<ListTipo_Sanguineo />} />
        <Route path="/tipo_sanguineo/create" element={<CreateTipo_Sanguineo />} />
        <Route path="/tipo_sanguineo/update/:id" element={<UpdateTipo_Sanguineo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
