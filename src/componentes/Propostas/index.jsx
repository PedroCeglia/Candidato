import styles from "./Propostas.module.css";
import CardPropostas from "../CardPropostas";
import ItemProposta from "../ItemProposta";

export default function Propostas() {
  return (
    <section className={styles.Container} id="propostas">
      <h2>Propostas</h2>
      <div className={styles.ContainerCardPropostas}>
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Seguranca.png"}
          title={"Monitoramento de cameras a partir de IAs"}
          text={`
          Instalaremos 100.000 câmeras pela cidade, garantindo que qualquer ocorrência nas ruas seja monitorada pelo estado. 
          Com essa medida, buscamos reduzir os inúmeros casos de roubo que ocorrem na cidade.
          `}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Educacao.png"}
          title={"Educação do Futuro nas Escolas Integrais"}
          text={`
            Vamos focar em manter o jovem na escola pelo maior tempo possível, seja por meio do esporte, 
            atividades extracurriculares, refeições de qualidade, entre outras iniciativas inovadoras.
          `}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Saude.png"}
          title={"Salvando vidas com Disciplina e Tecnologia"}
          text={`
          Vamos desenvolver diversas IAs com o objetivo de padronizar e aperfeiçoar todos os atendimentos,
          tornando nossos médicos mais eficientes por meio de uma logística inovadora.  
          `}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Transporte.png"}
          title={"Menos Transito Mais Saude Construindo um Rio Melhor"}
          text={`
            Vamos incorporar o que há de mais avançado em tecnologia para otimizar o tempo da população no deslocamento para o trabalho. 
            Investiremos em sinais inteligentes, viadutos, alargamento de ruas, entre outras melhorias.
        `}
        />
      </div>
      <div className={styles.ContainerItensProposta}>
        <h2>Outras Propostas</h2>

        <ItemProposta
          title={"Militarização da guarda municiapal"}
          index={"1"}
        />
        <ItemProposta title={"Criação de novas linhas de Metro"} index={"2"} />
        <ItemProposta title={"Incentivo do esporte nas escolas"} index={"3"} />
        <ItemProposta title={"Redução dos gastos na Prefeitura"} index={"4"} />
        <ItemProposta
          title={"Bolsa atleta para nossos atletas de 14 a 25 anos"}
          index={"5"}
        />
      </div>
    </section>
  );
}
