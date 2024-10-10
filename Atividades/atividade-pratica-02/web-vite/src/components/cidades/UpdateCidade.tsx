import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateCidade = () => {
  const [nome, setNome] = useState('');
  const [estadoId, setEstadoId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Buscar a cidade pelo ID ao carregar o componente
  useEffect(() => {
    api.get(`/cidades/${id}`)
      .then(response => {
        setNome(response.data.nome);
        setEstadoId(response.data.estado_id);
      })
      .catch(error => {
        console.error("Erro ao buscar cidade:", error);
        alert("Erro ao buscar os dados da cidade.");
      });
  }, [id]);

  const handleUpdateCidade = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      nome,
      estado_id: parseInt(estadoId),  // Converte o estado_id para número antes de enviar
    };

    try {
      await api.put(`/cidades/${id}`, data);
      alert("Cidade atualizada com sucesso!");
      navigate('/cidades');  // Redireciona para a lista de cidades após o sucesso
    } catch (error) {
      console.error("Erro ao atualizar cidade:", error);
      alert("Erro na atualização da cidade.");
    }
  };

  return (
    <div>
      <h3>Atualização de Cidade</h3>
      <form onSubmit={handleUpdateCidade}>
        <div>
          <label htmlFor="nome">Nome da Cidade</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="estado_id">ID do Estado</label>
          <input
            type="number"
            name="estado_id"
            id="estado_id"
            value={estadoId}
            onChange={e => setEstadoId(e.target.value)}
          />
        </div>

        <button type="submit">Atualizar</button>
        <button type="reset" onClick={() => { setNome(''); setEstadoId(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default UpdateCidade;
