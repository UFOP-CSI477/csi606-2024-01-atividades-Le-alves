import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateLocais_Coleta = () => {
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidadeId, setCidadeId] = useState('');
  const navigate = useNavigate();

  const handleNewLocalColeta = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados para envio
    const data = {
      nome,
      rua,
      numero,
      complemento,
      cidade_id: parseInt(cidadeId), 
    };

    try {
      await api.post('/locais_coleta', data);
      alert('Local de Coleta criado com sucesso!');
      navigate('/locais_coleta');  
    } catch (error) {
      console.error('Erro ao criar local de coleta:', error);
      alert('Erro ao criar o local de coleta.');
    }
  };

  return (
    <div>
      <h3>Cadastro de Local de Coleta</h3>
      <form onSubmit={handleNewLocalColeta}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="rua">Rua</label>
          <input
            type="text"
            name="rua"
            id="rua"
            value={rua}
            onChange={e => setRua(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            name="numero"
            id="numero"
            value={numero}
            onChange={e => setNumero(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            name="complemento"
            id="complemento"
            value={complemento}
            onChange={e => setComplemento(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cidade_id">ID da Cidade</label>
          <input
            type="number" 
            name="cidade_id"
            id="cidade_id"
            value={cidadeId}
            onChange={e => setCidadeId(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <button type="reset" onClick={() => { setNome(''); setRua(''); setNumero(''); setComplemento(''); setCidadeId(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default CreateLocais_Coleta;
