import styles from "./Agenda.module.css";
import Timeline from "@mui/lab/Timeline";

// Material Icons
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SosIcon from "@mui/icons-material/Sos";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import ChurchIcon from "@mui/icons-material/Church";

import ItemAgenda from "../ItemAgenda";

export default function Agenda() {
  return (
    <section className={styles.Agenda} id="agenda">
      <h2>Próximos Eventos</h2>
      <Timeline position="alternate">
        <ItemAgenda
          srcImage={"assets/Agenda/Congresso_Medicina.png"}
          data={"02/10/2024 - 19:30"}
          CenterIcon={SosIcon}
          title={"SOS SUS"}
          text={
            "Congresso que se propõe a debater as metas e os desafios do SUS"
          }
        />
        <ItemAgenda
          srcImage={"assets/logo_oficial.png"}
          data={"03/10/2024 - 08:00"}
          CenterIcon={ChurchIcon}
          title={"Missa do Povo"}
          text={"Missa na Igreja Nossa Senhora da Paz. Participe conosco!"}
        />
        <ItemAgenda
          srcImage={"assets/logo_oficial.png"}
          data={"03/10/2024 - 20:00"}
          CenterIcon={NightlifeIcon}
          title={"Roda de Samba"}
          text={"Roda de Samba no Bar do seu Zeca na Lapa"}
        />
        <ItemAgenda
          srcImage={"assets/logo_oficial.png"}
          data={"04/10/2024 - 20:00"}
          CenterIcon={LiveTvIcon}
          title={"Rede Globo"}
          text={"Sabatina para Prefeito do RJ na Globo"}
        />
      </Timeline>
    </section>
  );
}
