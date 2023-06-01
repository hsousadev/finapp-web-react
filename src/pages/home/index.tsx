import { useContext } from "react";
import { HomeContext } from "..";

import { Panel } from "@/shared/components/Panel";
import { Institutions } from "./components/Institutions";
import { StatementList } from "../../shared/components/Statement";

import { Container } from "./styles";
import { TopBar } from "@/shared/components/TopBar";

export function Home() {
  const { allBalance, allStatements, allExpenses } = useContext(HomeContext);

  return (
    <Container>
      <TopBar balance={allBalance} expenses={allExpenses} />
      <Panel balance={allBalance} expenses={allExpenses} />
      <Institutions />
      <StatementList name="Extrato Geral" statement={allStatements} />
    </Container>
  );
}
