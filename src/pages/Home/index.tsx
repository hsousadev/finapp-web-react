import { Panel } from "./components/Panel";
import { Institutions } from "./components/Institutions";
import { GeneralStatement } from "./components/GeneralStatement";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Panel />
      <Institutions />
      <GeneralStatement />
    </Container>
  );
}
