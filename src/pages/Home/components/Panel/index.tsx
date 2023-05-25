import { Container } from "./styles";

import { DefaultButton } from "@/shared/components/DefaultButton";
import { InfoValueCard } from "@/shared/components/InfoValueCard";

import plus from "@/shared/assets/icons/Plus.svg";

export function Panel() {
  return (
    <Container>
      <div className="incomes-and-expenses">
        <InfoValueCard type="income" value={7500} />
        <InfoValueCard type="expanses" value={2550} />
      </div>

      <DefaultButton icon={plus} title="Adicionar instituição" />
    </Container>
  );
}
