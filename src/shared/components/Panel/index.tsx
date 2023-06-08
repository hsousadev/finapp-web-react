import { useRouter } from "next/router";

import { DefaultButton } from "@/shared/components/DefaultButton";
import { InfoValueCard } from "@/shared/components/InfoValueCard";

import plus from "@/shared/assets/icons/Plus.svg";

import { Container } from "./styles";

interface PanelProps {
  accountName?: string;
  balance: number;
  expenses?: number;
  onClickButton?: () => void;
}

export function Panel({
  accountName,
  balance,
  expenses,
  onClickButton,
}: PanelProps) {
  const router = useRouter();

  const isHome = router.pathname === "/";

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

      {isHome ? (
        <DefaultButton
          icon={plus}
          title="Adicionar instituição"
          onClick={onClickButton}
        />
      ) : (
        <DefaultButton
          icon={plus}
          title="Nova operação"
          onClick={onClickButton}
        />
      )}
    </Container>
  );
}
