import "./style.css";
import { getItem } from "../../utils/localStorage";

function ModalResultsCep(props) {
  const dataResults = JSON.parse(getItem("dataResults"));

  return (
    <div>
      <div className="cardInfoUser">
        <div>
          <h1>Endereço</h1>
          <p>{dataResults.logradouro}</p>
        </div>
        <div>
          <h1>Bairro</h1>
          <p>{dataResults.bairro}</p>
        </div>
        <div>
          <h1>Complemento</h1>
          <p>{dataResults.complemento}</p>
        </div>
        <div>
          <h1>CEP</h1>
          <p>{dataResults.cep}</p>
        </div>
        <div>
          <h1>Cidade</h1>
          <p>{dataResults.localidade}</p>
        </div>
        <div>
          <h1>UF</h1>
          <p>{dataResults.uf}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalResultsCep;
