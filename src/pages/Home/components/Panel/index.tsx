import { HomeContext } from "@/pages";
import { useContext } from "react";

import { DefaultButton } from "@/shared/components/DefaultButton";
import { InfoValueCard } from "@/shared/components/InfoValueCard";

import plus from "@/shared/assets/icons/Plus.svg";

import { Container } from "./styles";

export function Panel() {
  const { allBalance } = useContext(HomeContext);

  return (
    <Container>
      <div className="incomes-and-expenses">
        <InfoValueCard type="income" value={allBalance} />
        <InfoValueCard type="expanses" value={2550} />
      </div>

      <DefaultButton icon={plus} title="Adicionar instituição" />
    </Container>
  );
}
