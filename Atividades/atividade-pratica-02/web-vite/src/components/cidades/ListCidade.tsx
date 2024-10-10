import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface CidadeInterface {
  id: number;
  nome: string;
  estado_id: number;
  created_at: string;
  updated_at: string;
}

const ListCidades = () => {
  const [cidades, setCidades] = useState<CidadeInterface[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/cidades')
      .then(response => {
        setCidades(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar cidades:", error);
        alert("Erro ao carregar a lista de cidades.");
      });
  }, []);

  const handleDeleteCidade = async (id: number) => {
    if (!window.confirm("Confirma exclusão da cidade?")) {
      return;
    }
    try {
      await api.delete('/cidades', {
        data: {
          id
        }
      });
      alert("Cidade excluída com sucesso!");
      setCidades(cidades.filter(cidade => cidade.id !== id));
    } catch (error) {
      alert("Erro na exclusão da cidade!");
      console.error(error);
    }
  }

  return (
    <div>
      <h3>Lista de Cidades</h3>
      <div>
        <Link to="/cidades/create">Inserir</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Estado ID</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {cidades.map(cidade => (
            <tr key={cidade.id}>
              <td>{cidade.id}</td>
              <td>{cidade.nome}</td>
              <td>{cidade.estado_id}</td>
              <td>{cidade.created_at}</td>
              <td>{cidade.updated_at}</td>
              <td>
                <Link to={`/cidades/update/${cidade.id}`}>Atualizar</Link>
              </td>
              <td>
                <button onClick={() => { handleDeleteCidade(cidade.id) }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCidades;
