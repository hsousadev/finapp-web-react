import { ListItem } from "@/shared/components/ListItem";

import chartLineUp from "@/shared/assets/icons/ChartLineUp.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";

import { Container } from "./styles";

export function GeneralStatement() {
  return (
    <Container>
      <div className="head">
        <h2>Extrato geral</h2>
      </div>

      <div className="list">
        <ListItem
          icon={trendDown}
          text="Conta de Luz · R$300 · 15 de Maio de 2023"
          expense={1200}
        />
        <ListItem
          icon={trendDown}
          text="Conta de Luz · R$300 · 15 de Maio de 2023"
          expense={1200}
        />
         <ListItem
          icon={trendDown}
          text="Conta de Luz · R$300 · 15 de Maio de 2023"
          expense={1200}
        />
      </div>
    </Container>
  );
}
