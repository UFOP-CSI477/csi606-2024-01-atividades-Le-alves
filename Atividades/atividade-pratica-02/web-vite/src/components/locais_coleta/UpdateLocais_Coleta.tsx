import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateLocais_Coleta = () => {
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidadeId, setCidadeId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    api.get(`/locais_coleta/${id}`)
      .then(response => {
        setNome(response.data.nome);
        setRua(response.data.rua);
        setNumero(response.data.numero);
        setComplemento(response.data.complemento);
        setCidadeId(response.data.cidade_id.toString());
      })
      .catch(error => {
        console.error("Erro ao buscar local de coleta:", error);
        alert("Erro ao buscar os dados do local de coleta.");
      });
  }, [id]);

  const handleUpdateLocalColeta = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      nome,
      rua,
      numero,
      complemento,
      cidade_id: parseInt(cidadeId),  
    };

    try {
      await api.put(`/locais_coleta/${id}`, data);
      alert("Local de Coleta atualizado com sucesso!");
      navigate('/locais_coleta');  
    } catch (error) {
      console.error("Erro ao atualizar local de coleta:", error);
      alert("Erro na atualização do local de coleta.");
    }
  };

  return (
    <div>
      <h3>Atualização de Local de Coleta</h3>
      <form onSubmit={handleUpdateLocalColeta}>
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

        <button type="submit">Atualizar</button>
        <button type="reset" onClick={() => { setNome(''); setRua(''); setNumero(''); setComplemento(''); setCidadeId(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default UpdateLocais_Coleta;
