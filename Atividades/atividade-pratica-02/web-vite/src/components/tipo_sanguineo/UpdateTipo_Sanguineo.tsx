import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateTipo_Sanguineo = () => {
  const [tipo, setTipo] = useState('');
  const [fator, setFator] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Buscar o tipo sanguíneo pelo ID ao carregar o componente
  useEffect(() => {
    api.get(`/tipos_sanguineos/${id}`)
      .then(response => {
        setTipo(response.data.tipo);
        setFator(response.data.fator);
      })
      .catch(error => {
        console.error("Erro ao buscar tipo sanguíneo:", error);
        alert("Erro ao buscar os dados do tipo sanguíneo.");
      });
  }, [id]);

  const handleUpdateTipoSanguineo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      tipo,
      fator
    };

    try {
      await api.put(`/tipos_sanguineos/${id}`, data);
      alert("Tipo Sanguíneo atualizado com sucesso!");
      navigate('/tipos_sanguineos');  // Redireciona para a lista de tipos sanguíneos após o sucesso
    } catch (error) {
      console.error("Erro ao atualizar tipo sanguíneo:", error);
      alert("Erro na atualização do tipo sanguíneo.");
    }
  };

  return (
    <div>
      <h3>Atualização de Tipo Sanguíneo</h3>
      <form onSubmit={handleUpdateTipoSanguineo}>
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

        <button type="submit">Atualizar</button>
        <button type="reset" onClick={() => { setTipo(''); setFator(''); }}>Limpar</button>
      </form>
    </div>
  );
};

export default UpdateTipo_Sanguineo;
