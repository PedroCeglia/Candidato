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
          Instalaremos 100.000 cameras pela cidade, para que nada aconteça na
          rua e o estado não saiba que ocorreu. Tentando resolver os inumeros
          casos de roubo que ocorrem pela cidade.
          `}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Educacao.png"}
          title={"Educação do Futuro nas Escolas Integrais"}
          text={`Vamos focar em deixar o Jovem o maximo de tempo possivel na escola. 
          Seja por meio do esporte, atividades extra curriculares, refeições de qualidade, 
          entre outras inovações.`}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Saude.png"}
          title={"Salvando vidas com Disciplina e Tecnologia"}
          text={`Vamos criar diversas IAs com o objetivo de 
          padronizar e aperfeiçoar todos os atendimentos. 
          Deixaremos nossos Médicos mais efetivos com uma Logistica Inovadora.`}
        />
        <CardPropostas
          srcImage={"assets/Propostas/Proposta_Transporte.png"}
          title={"Menos Transito Mais Saude Construindo um Rio Melhor"}
          text={`Vamos incrementar o que há de mais tecnológico no mercado
          para otimizar o tempo de toda população quando for trabalha. 
          Sinais Inteligentes, Viadutos, alargamento das ruas, etc.`}
        />
      </div>
      <h2>Outras Propostas</h2>
      <div className={styles.ContainerItensProposta}>
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
