import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconClose from "../../assets/iconClose.svg";
import { addItem } from "../../utils/localStorage";

function ModalInfoCep(props) {
  const navigateTo = useNavigate();
  const [formCep, setFormCep] = useState({ cep: "" });
  const [errorCep, setErrorCep] = useState("");

  const handleChange = (prop) => (event) => {
    setFormCep({ ...formCep, [prop]: event.target.value });
  };

  async function checkCep(e) {
    if (!formCep.cep) {
      setErrorCep("O cep precisa ser preenchido");
      return;
    } else if (formCep.cep.length > 0 && formCep.cep.length < 8) {
      setErrorCep("O cep deve ter 8 dítigos");
      return;
    } else if (formCep.cep.length === 8) {
      setErrorCep("");
    } else if (formCep.cep.length === 0) {
      return;
    }
    try {
      let resposta = await fetch(
        `https://viacep.com.br/ws/${formCep.cep}/json/`
      );
      await resposta.json().then((data) => {
        if (data.cep === undefined) {
          setErrorCep("Cep não foi encontrado");
          return;
        }

        addItem("dataResults", JSON.stringify(data));
        navigateTo("/offers");
      });
    } catch (error) {
      console.log(error);
    }
  }

  function closeModalInfo() {
    props.setStatusModalInfo(false);
  }

  return (
    <div className="contentModal">
      <div className="cardModalInfo">
        <p>
          SEJA BEM VINDO! Informe o seu CEP e garanta as{" "}
          <span>MELHORES OFERTAS</span> da sua cidade.
        </p>
        <form>
          <div className="contentCep">
            <div>
              <label>Informe o seu CEP*</label>
              <input
                type="text"
                placeholder="Informe o CEP"
                value={formCep.cep}
                onChange={handleChange("cep")}
              />
            </div>
            <button type="button" onClick={() => checkCep()}>
              Avançar
            </button>
          </div>
          {errorCep && <span className="errorCep">{errorCep}</span>}
          <img
            src={IconClose}
            alt="Icone de fechar"
            onClick={() => closeModalInfo()}
          />
        </form>
      </div>
    </div>
  );
}

export default ModalInfoCep;
