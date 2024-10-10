import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateCidades = () => {
  const [nome, setNome] = useState('');
  const [estadoId, setEstadoId] = useState('');
  const navigate = useNavigate();

  const handleNewCidade = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados para envio
    const data = {
      nome,
      estado_id: parseInt(estadoId), 
    };

    try {
      await api.post('/cidades', data);
      alert('Cidade criada com sucesso!');
      navigate('/cidades'); 
    } catch (error) {
      console.error('Erro ao criar cidade:', error);
      alert('Erro ao criar a cidade.');
    }
  };

  return (
    <div>
      <h3>Cadastro de Cidade</h3>
      <form onSubmit={handleNewCidade}>
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

        <button type="submit">Cadastrar</button>
        <button type="reset" onClick={() => { setNome(''); setEstadoId(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default CreateCidades;
