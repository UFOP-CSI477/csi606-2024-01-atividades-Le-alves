import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateTipo_Sanguineo = () => {
  const [tipo, setTipo] = useState('');
  const [fator, setFator] = useState('');
  const navigate = useNavigate();

  const handleNewTipoSanguineo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados para envio
    const data = {
      tipo,
      fator
    };

    try {
      await api.post('/tipos_sanguineos', data);
      alert('Tipo Sanguíneo criado com sucesso!');
      navigate('/tipos_sanguineos'); 
    } catch (error) {
      console.error('Erro ao criar tipo sanguíneo:', error);
      alert('Erro ao criar o tipo sanguíneo.');
    }
  };

  return (
    <div>
      <h3>Cadastro de Tipo Sanguíneo</h3>
      <form onSubmit={handleNewTipoSanguineo}>
        <div>
          <label htmlFor="tipo">Tipo Sanguíneo</label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fator">Fator</label>
          <input
            type="text"
            name="fator"
            id="fator"
            value={fator}
            onChange={e => setFator(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <button type="reset" onClick={() => { setTipo(''); setFator(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default CreateTipo_Sanguineo;
