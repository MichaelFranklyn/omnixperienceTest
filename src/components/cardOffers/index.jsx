import "./style.css";

function cardOffers(props) {
  return (
    <div className="contentCardOffers">
      <div className="div01CardOffers">
        <h1>{props.plan.speed}</h1>
        <h5>{props.plan.payment}</h5>
      </div>
      <div className="div02CardOffers">
        <h1>{props.plan.value}</h1>
        <h5>{props.plan.obs}</h5>
      </div>
    </div>
  );
}

export default cardOffers;
