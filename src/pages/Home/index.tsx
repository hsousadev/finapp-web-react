import { Panel } from "./components/Panel";
import { Institutions } from "./components/Institutions";
import { GeneralStatement } from "./components/GeneralStatement";

import { TopBar } from "@/shared/components/TopBar";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <TopBar />
      <Panel />
      <Institutions />
      <GeneralStatement />
    </Container>
  );
}
