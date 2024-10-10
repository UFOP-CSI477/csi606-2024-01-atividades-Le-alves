import { Link } from "react-router-dom";

const Menu = () => {

    return( 


        <div>
            <h2>Aplicação de Doação de Sangue</h2>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/estados">Estado</Link></li>
                <li><Link to="/cidades">Cidade</Link></li>
                <li><Link to="/locais_coleta">Local de Coleta</Link></li>
                <li><Link to="/tipo_sanguineo">Tipo Sanguineo</Link></li>
                <li>Pessoa</li>
            </ul>
        </div>

    );


}

export default Menu