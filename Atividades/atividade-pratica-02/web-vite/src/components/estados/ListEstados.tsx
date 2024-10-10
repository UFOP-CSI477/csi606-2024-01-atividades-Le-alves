import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";


interface EstadoInterface{
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at:string;

}

const ListEstados = () => {

    const [ estados, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {

        api.get('http://localhost:3000/api/estados')
            .then(response =>{
                setEstados(response.data);
            });

    },[]);

    const handleDeleteEstado = async (id: number) =>{

        //validações
        if (!window.confirm("confirma exclusão do estado?")){
            return;
        }
        try{
            await api.delete('/estados',{
                data: {
                    id
                }
            });
            alert("Estado excluido com sucesso!");

            setEstados(estados.filter(estado => estado.id != id));

        }catch(error){
            alert("Erro na exclusão do Estado!");
            console.error(error);
        }
    }

    return(
        <div>
            <h3>Lista de Estados</h3>
            <div>
                <Link to="/estados/create">Inserir</Link>
            </div>
            <div>
                <Link to ="/">Voltar</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                    </tr>

                </thead>

                <tbody>


               {
                   estados.map(estado =>( 
                        <tr>
                            <td>{estado.id}</td>
                            <td>{estado.nome}</td>
                            <td>{estado.sigla}</td>
                            <td>{estado.created_at}</td>
                            <td>{estado.updated_at}</td>
                            <td> <Link to={`/estados/update/${estado.id}`}> Atualizar</Link></td>
                            <td><button onClick={()=>{handleDeleteEstado(estado.id)}}>Excluir</button></td>

                      
                        </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListEstados