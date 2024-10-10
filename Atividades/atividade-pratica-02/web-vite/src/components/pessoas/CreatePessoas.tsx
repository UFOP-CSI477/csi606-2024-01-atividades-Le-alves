import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreatePessoa = () => {
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [rg, setRg] = useState('');
  const [cidadeId, setCidadeId] = useState('');
  const [tipoId, setTipoId] = useState('');
  const navigate = useNavigate();

  const handleNewPessoa = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados para envio
    const data = {
      nome,
      rua,
      numero,
      complemento,
      rg,
      cidade_id: parseInt(cidadeId), 
      tipo_id: parseInt(tipoId) 
    };

    try {
      await api.post('/pessoas', data);
      alert('Pessoa criada com sucesso!');
      navigate('/pessoas'); 
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      alert('Erro ao criar a pessoa.');
    }
  };

  return (
    <div>
      <h3>Cadastro de Pessoa</h3>
      <form onSubmit={handleNewPessoa}>
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
          <label htmlFor="rg">RG</label>
          <input
            type="text"
            name="rg"
            id="rg"
            value={rg}
            onChange={e => setRg(e.target.value)}
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

        <div>
          <label htmlFor="tipo_id">ID do Tipo Sanguíneo</label>
          <input
            type="number"
            name="tipo_id"
            id="tipo_id"
            value={tipoId}
            onChange={e => setTipoId(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <button type="reset" onClick={() => { 
          setNome(''); 
          setRua(''); 
          setNumero(''); 
          setComplemento(''); 
          setRg(''); 
          setCidadeId(''); 
          setTipoId(''); 
        }}>
          Limpar
        </button>
      </form>
    </div>
  );
};

export default CreatePessoa;
