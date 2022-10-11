import "./style.css";
import CardOffers from "../../components/cardOffers";
import ModalResultsCep from "../../components/modalResultsCep";
import { plans } from "../../plans/plans";
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigateTo = useNavigate();

  return (
    <div className="contentOffers">
      <header>Conteúdo Header</header>
      <main>
        <ModalResultsCep />
        <div className="contentPlans">
          {plans.map((plan, index) => (
            <CardOffers key={index} plan={plan} />
          ))}
        </div>
        <div className="buttonOffers">
          <button type="button" onClick={() => navigateTo("/home")}>
            Ops, errei meu cep!
          </button>
        </div>
      </main>
      <footer>Conteúdo Footer</footer>
    </div>
  );
}

export default Offers;
