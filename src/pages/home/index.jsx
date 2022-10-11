import "./style.css";
import React, { useState } from "react";
import ModalInfoCep from "../../components/modalInfoCep";

function Home() {
  const [statusModalInfo, setStatusModalInfo] = useState(true);

  return (
    <div className="contentHome">
      <header>Conteúdo Header</header>
      <main>
        <p>Conteúdo Home</p>
        <button type="button" onClick={() => setStatusModalInfo(true)}>
          Abrir Modal
        </button>
        {statusModalInfo && (
          <ModalInfoCep setStatusModalInfo={setStatusModalInfo} />
        )}
      </main>
      <footer>Conteúdo Footer</footer>
    </div>
  );
}

export default Home;
