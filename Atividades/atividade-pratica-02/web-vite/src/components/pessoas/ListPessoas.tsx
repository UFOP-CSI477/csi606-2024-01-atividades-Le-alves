import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface PessoaInterface {
  id: number;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  rg: string;
  cidade_id: number;
  tipo_id: number;
  created_at: string;
  updated_at: string;
}

const ListPessoas = () => {
  const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);


  useEffect(() => {
    api.get('http://localhost:3000/api/pessoas')
      .then(response => {
        setPessoas(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar pessoas:", error);
        alert("Erro ao carregar a lista de pessoas.");
      });
  }, []);

  const handleDeletePessoa = async (id: number) => {
    if (!window.confirm("Confirma exclusão da pessoa?")) {
      return;
    }
    try {
      await api.delete('/pessoas', {
        data: {
          id
        }
      });
      alert("Pessoa excluída com sucesso!");
      setPessoas(pessoas.filter(pessoa => pessoa.id !== id));
    } catch (error) {
      alert("Erro na exclusão da pessoa!");
      console.error(error);
    }
  }

  return (
    <div>
      <h3>Lista de Pessoas</h3>
      <div>
        <Link to="/pessoas/create">Inserir Pessoa</Link>
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
            <th>RG</th>
            <th>Cidade ID</th>
            <th>Tipo Sanguíneo ID</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map(pessoa => (
            <tr key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.rua}</td>
              <td>{pessoa.numero}</td>
              <td>{pessoa.complemento}</td>
              <td>{pessoa.rg}</td>
              <td>{pessoa.cidade_id}</td>
              <td>{pessoa.tipo_id}</td>
              <td>{pessoa.created_at}</td>
              <td>{pessoa.updated_at}</td>
              <td>
                <Link to={`/pessoas/update/${pessoa.id}`}>Atualizar</Link>
              </td>
              <td>
                <button onClick={() => { handleDeletePessoa(pessoa.id) }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPessoas;
