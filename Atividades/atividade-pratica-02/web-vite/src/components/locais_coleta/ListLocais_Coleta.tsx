import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface LocalColetaInterface {
  id: number;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade_id: number;
  created_at: string;
  updated_at: string;
}

const ListLocais_Coleta = () => {
  const [locais, setLocais] = useState<LocalColetaInterface[]>([]);

  // Carregar os locais de coleta ao montar o componente
  useEffect(() => {
    api.get('http://localhost:3000/api/locais_coleta')
      .then(response => {
        setLocais(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar locais de coleta:", error);
        alert("Erro ao carregar a lista de locais de coleta.");
      });
  }, []);

  const handleDeleteLocal = async (id: number) => {
    if (!window.confirm("Confirma exclusão do local de coleta?")) {
      return;
    }
    try {
      await api.delete('/locais_coleta', {
        data: {
          id
        }
      });
      alert("Local de coleta excluído com sucesso!");
      setLocais(locais.filter(local => local.id !== id));
    } catch (error) {
      alert("Erro na exclusão do local de coleta!");
      console.error(error);
    }
  }

  return (
    <div>
      <h3>Lista de Locais de Coleta</h3>
      <div>
        <Link to="/locais_coleta/create">Inserir</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Cidade ID</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {locais.map(local => (
            <tr key={local.id}>
              <td>{local.id}</td>
              <td>{local.nome}</td>
              <td>{local.rua}</td>
              <td>{local.numero}</td>
              <td>{local.complemento}</td>
              <td>{local.cidade_id}</td>
              <td>{local.created_at}</td>
              <td>{local.updated_at}</td>
              <td>
                <Link to={`/locais_coleta/update/${local.id}`}>Atualizar</Link>
              </td>
              <td>
                <button onClick={() => { handleDeleteLocal(local.id) }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListLocais_Coleta;
