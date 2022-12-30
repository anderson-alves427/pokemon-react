import { dataSobre } from "./mocks";
import "./styles.css";

export const Sobre = () => {
  return(
    <section className="sobre">
      <h2>Sobre o projeto</h2>
      <p>{dataSobre.descricao}</p>
    </section>
  );
}