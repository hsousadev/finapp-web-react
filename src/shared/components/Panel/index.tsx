import { DefaultButton } from "@/shared/components/DefaultButton";
import { InfoValueCard } from "@/shared/components/InfoValueCard";

import plus from "@/shared/assets/icons/Plus.svg";

import { Container } from "./styles";

interface PanelProps {
  accountName?: string;
  balance: number;
  expenses?: number;
}

export function Panel({ accountName, balance, expenses }: PanelProps) {
  return (
    <Container>
      <div className="incomes-and-expenses">
        <InfoValueCard
          accountName={accountName ? accountName : ""}
          type="income"
          value={balance ? balance : 0}
        />
        <InfoValueCard
          accountName={accountName ? accountName : ""}
          type="expanses"
          value={expenses ? expenses : 0}
        />
      </div>

      <DefaultButton icon={plus} title="Adicionar instituição" />
    </Container>
  );
}
