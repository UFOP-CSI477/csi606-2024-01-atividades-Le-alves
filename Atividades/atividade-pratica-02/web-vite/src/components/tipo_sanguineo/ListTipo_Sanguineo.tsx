import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface TipoSanguineoInterface {
  id: number;
  tipo: string;
  fator: string;
  created_at: string;
  updated_at: string;
}

const ListTipo_Sanguineo = () => {
  const [tiposSanguineos, setTiposSanguineos] = useState<TipoSanguineoInterface[]>([]);

  // Carregar os tipos sanguíneos ao montar o componente
  useEffect(() => {
    api.get('http://localhost:3000/api/tipos_sanguineos')
      .then(response => {
        setTiposSanguineos(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar tipos sanguíneos:", error);
        alert("Erro ao carregar a lista de tipos sanguíneos.");
      });
  }, []);

  const handleDeleteTipoSanguineo = async (id: number) => {
    if (!window.confirm("Confirma exclusão do tipo sanguíneo?")) {
      return;
    }
    try {
      await api.delete('/tipos_sanguineos', {
        data: {
          id
        }
      });
      alert("Tipo Sanguíneo excluído com sucesso!");
      setTiposSanguineos(tiposSanguineos.filter(tipo => tipo.id !== id));
    } catch (error) {
      alert("Erro na exclusão do tipo sanguíneo!");
      console.error(error);
    }
  }

  return (
    <div>
      <h3>Lista de Tipos Sanguíneos</h3>
      <div>
        <Link to="/tipos_sanguineos/create">Inserir</Link>
      </div>
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Fator</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {tiposSanguineos.map(tipo => (
            <tr key={tipo.id}>
              <td>{tipo.id}</td>
              <td>{tipo.tipo}</td>
              <td>{tipo.fator}</td>
              <td>{tipo.created_at}</td>
              <td>{tipo.updated_at}</td>
              <td>
                <Link to={`/tipos_sanguineos/update/${tipo.id}`}>Atualizar</Link>
              </td>
              <td>
                <button onClick={() => { handleDeleteTipoSanguineo(tipo.id) }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTipo_Sanguineo;
