import { useContext } from "react";
import { HomeContext } from "..";

import { Panel } from "@/shared/components/Panel";
import { Institutions } from "./components/Institutions";
import { GeneralStatement } from "./components/GeneralStatement";

import { Container } from "./styles";
import { TopBar } from "@/shared/components/TopBar";

export function Home() {
  const { allBalance } = useContext(HomeContext);

  return (
    <Container>
      <TopBar balance={allBalance} />
      <Panel balance={allBalance} />
      <Institutions />
      <GeneralStatement />
    </Container>
  );
}
